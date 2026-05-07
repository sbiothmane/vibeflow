from __future__ import annotations

from collections import Counter, defaultdict
from dataclasses import dataclass, field
from typing import Any, Iterable

from .package import FlowFile
from .utils import (
    ACTION_REF_RE,
    EMAIL_RE,
    FORM_FIELD_RE,
    FUNCTION_RE,
    GUID_RE,
    URL_RE,
    VARIABLE_REF_RE,
    is_noisy_metadata_path,
    looks_like_form_id,
    path_string,
    short_value,
    walk_json,
)


@dataclass(frozen=True)
class ActionNode:
    name: str
    type: str
    path: tuple[str, ...]
    parent: str | None
    parent_container: tuple[str, ...]
    depth: int
    if_depth: int
    run_after: tuple[str, ...]
    run_after_statuses: dict[str, tuple[str, ...]] = field(default_factory=dict)
    connector_api: str | None = None
    connection_name: str | None = None
    operation_id: str | None = None
    metadata_id: str | None = None

    @property
    def path_text(self) -> str:
        return path_string(self.path)


@dataclass
class ConstantRef:
    category: str
    value: str
    path: tuple[str, ...]

    def as_dict(self) -> dict[str, Any]:
        return {
            "category": self.category,
            "value": self.value,
            "path": path_string(self.path),
            "preview": short_value(self.value),
        }


@dataclass
class ExpressionRef:
    path: tuple[str, ...]
    value: str
    functions: list[str] = field(default_factory=list)
    action_refs: list[str] = field(default_factory=list)
    variable_refs: list[str] = field(default_factory=list)
    form_fields: list[str] = field(default_factory=list)

    def as_dict(self) -> dict[str, Any]:
        return {
            "path": path_string(self.path),
            "value": self.value,
            "functions": self.functions,
            "actionRefs": self.action_refs,
            "variableRefs": self.variable_refs,
            "formFields": self.form_fields,
        }


@dataclass
class WorkflowIndex:
    flow: FlowFile
    wrapper: dict[str, Any]
    definition: dict[str, Any]
    actions: list[ActionNode]
    variables: dict[str, dict[str, Any]]
    variable_mutations: Counter[str]
    expressions: list[ExpressionRef]
    constants: list[ConstantRef]
    metadata_ids: list[str]
    action_type_counts: Counter[str]
    connector_counts: Counter[str]
    form_field_counts: Counter[str]
    action_ref_counts: Counter[str]
    variable_ref_counts: Counter[str]

    def summary(self) -> dict[str, Any]:
        triggers = self.definition.get("triggers", {})
        parameters = self.definition.get("parameters", {})
        return {
            "flowId": self.flow.flow_id,
            "displayName": self.flow.display_name(),
            "definitionPath": self.flow.relative_definition_path,
            "triggerCount": len(triggers) if isinstance(triggers, dict) else 0,
            "triggers": sorted(triggers.keys()) if isinstance(triggers, dict) else [],
            "topLevelActionCount": len(self.definition.get("actions", {})),
            "totalActionCount": len(self.actions),
            "actionTypes": dict(sorted(self.action_type_counts.items())),
            "scopeCount": self.action_type_counts.get("Scope", 0),
            "ifCount": self.action_type_counts.get("If", 0),
            "switchCount": self.action_type_counts.get("Switch", 0),
            "variableCount": len(self.variables),
            "variables": self.variables,
            "connectorOperations": dict(sorted(self.connector_counts.items())),
            "expressionCount": len(self.expressions),
            "formFieldIdCount": len(self.form_field_counts),
            "hardCodedConstantCount": len(self.constants),
            "metadataGuidCount": len(self.metadata_ids),
            "parameters": sorted(parameters.keys()) if isinstance(parameters, dict) else [],
        }


def build_index(flow: FlowFile) -> WorkflowIndex:
    wrapper = flow.load_wrapper()
    definition = wrapper.get("properties", {}).get("definition", {})
    if not isinstance(definition, dict):
        raise ValueError(f"{flow.definition_path} does not contain a workflow definition")

    actions: list[ActionNode] = []
    variables: dict[str, dict[str, Any]] = {}
    variable_mutations: Counter[str] = Counter()
    action_type_counts: Counter[str] = Counter()
    connector_counts: Counter[str] = Counter()

    root_actions = definition.get("actions", {})
    if isinstance(root_actions, dict):
        _collect_actions(
            root_actions,
            actions,
            variables,
            variable_mutations,
            action_type_counts,
            connector_counts,
            parent=None,
            parent_container=("actions",),
            path_prefix=("actions",),
            depth=1,
            if_depth=0,
        )

    expressions = _collect_expressions(definition)
    constants = _collect_constants(definition)
    metadata_ids = [
        value
        for path, value in walk_json(definition)
        if isinstance(value, str) and path and path[-1] == "operationMetadataId"
    ]

    form_field_counts: Counter[str] = Counter()
    action_ref_counts: Counter[str] = Counter()
    variable_ref_counts: Counter[str] = Counter()
    for expression in expressions:
        form_field_counts.update(expression.form_fields)
        action_ref_counts.update(expression.action_refs)
        variable_ref_counts.update(expression.variable_refs)

    return WorkflowIndex(
        flow=flow,
        wrapper=wrapper,
        definition=definition,
        actions=actions,
        variables=variables,
        variable_mutations=variable_mutations,
        expressions=expressions,
        constants=constants,
        metadata_ids=metadata_ids,
        action_type_counts=action_type_counts,
        connector_counts=connector_counts,
        form_field_counts=form_field_counts,
        action_ref_counts=action_ref_counts,
        variable_ref_counts=variable_ref_counts,
    )


def package_summary(indexes: Iterable[WorkflowIndex]) -> dict[str, Any]:
    index_list = list(indexes)
    return {
        "flowCount": len(index_list),
        "flows": [index.summary() for index in index_list],
    }


def action_tree_markdown(index: WorkflowIndex) -> str:
    lines = [f"# Action Tree: {index.flow.display_name()}", ""]
    for node in index.actions:
        indent = "  " * max(node.depth - 1, 0)
        connector = f" `{node.operation_id}`" if node.operation_id else ""
        run_after = f" after {', '.join(node.run_after)}" if node.run_after else ""
        lines.append(f"{indent}- `{node.name}` ({node.type}){connector}{run_after}")
    lines.append("")
    return "\n".join(lines)


def expression_inventory(index: WorkflowIndex) -> dict[str, Any]:
    return {
        "functions": dict(_count_functions(index.expressions).most_common()),
        "actionReferences": dict(index.action_ref_counts.most_common()),
        "variableReferences": dict(index.variable_ref_counts.most_common()),
        "formFields": dict(index.form_field_counts.most_common()),
        "expressions": [expression.as_dict() for expression in index.expressions],
    }


def _collect_actions(
    action_map: dict[str, Any],
    actions: list[ActionNode],
    variables: dict[str, dict[str, Any]],
    variable_mutations: Counter[str],
    action_type_counts: Counter[str],
    connector_counts: Counter[str],
    *,
    parent: str | None,
    parent_container: tuple[str, ...],
    path_prefix: tuple[str, ...],
    depth: int,
    if_depth: int,
) -> None:
    for name, action in action_map.items():
        if not isinstance(action, dict):
            continue
        action_type = str(action.get("type", "Unknown"))
        inputs = action.get("inputs", {})
        host = inputs.get("host", {}) if isinstance(inputs, dict) else {}
        connector_api = host.get("apiId") if isinstance(host, dict) else None
        connection_name = host.get("connectionName") if isinstance(host, dict) else None
        operation_id = host.get("operationId") if isinstance(host, dict) else None
        if connector_api or operation_id:
            connector_counts[f"{connector_api or 'unknown'}::{operation_id or 'unknown'}"] += 1

        run_after_data = action.get("runAfter") or {}
        run_after = tuple(sorted(run_after_data.keys()))
        run_after_statuses = {
            str(dep): tuple(str(status) for status in statuses)
            for dep, statuses in run_after_data.items()
            if isinstance(statuses, list)
        }
        metadata_id = action.get("metadata", {}).get("operationMetadataId")
        node = ActionNode(
            name=name,
            type=action_type,
            path=path_prefix + (name,),
            parent=parent,
            parent_container=parent_container,
            depth=depth,
            if_depth=if_depth + (1 if action_type == "If" else 0),
            run_after=run_after,
            run_after_statuses=run_after_statuses,
            connector_api=connector_api,
            connection_name=connection_name,
            operation_id=operation_id,
            metadata_id=metadata_id if isinstance(metadata_id, str) else None,
        )
        actions.append(node)
        action_type_counts[action_type] += 1
        _collect_variables(action, action_type, variables, variable_mutations)

        for label, child_actions in _child_action_maps(action):
            _collect_actions(
                child_actions,
                actions,
                variables,
                variable_mutations,
                action_type_counts,
                connector_counts,
                parent=name,
                parent_container=node.path + (label,),
                path_prefix=node.path + (label,),
                depth=depth + 1,
                if_depth=node.if_depth,
            )


def _child_action_maps(action: dict[str, Any]) -> Iterable[tuple[str, dict[str, Any]]]:
    actions = action.get("actions")
    if isinstance(actions, dict):
        yield "actions", actions
    else_branch = action.get("else", {})
    if isinstance(else_branch, dict) and isinstance(else_branch.get("actions"), dict):
        yield "else/actions", else_branch["actions"]
    cases = action.get("cases", {})
    if isinstance(cases, dict):
        for case_name, case in cases.items():
            if isinstance(case, dict) and isinstance(case.get("actions"), dict):
                yield f"cases/{case_name}/actions", case["actions"]
    default = action.get("default", {})
    if isinstance(default, dict) and isinstance(default.get("actions"), dict):
        yield "default/actions", default["actions"]


def _collect_variables(
    action: dict[str, Any],
    action_type: str,
    variables: dict[str, dict[str, Any]],
    variable_mutations: Counter[str],
) -> None:
    inputs = action.get("inputs", {})
    if not isinstance(inputs, dict):
        return
    if action_type == "InitializeVariable":
        for variable in inputs.get("variables", []) or []:
            if not isinstance(variable, dict) or "name" not in variable:
                continue
            name = str(variable["name"])
            variables[name] = {
                "type": variable.get("type"),
                "hasInitialValue": "value" in variable,
                "initialValueType": type(variable.get("value")).__name__ if "value" in variable else None,
            }
    elif action_type in {"SetVariable", "AppendToArrayVariable", "AppendToStringVariable", "IncrementVariable", "DecrementVariable"}:
        name = inputs.get("name")
        if isinstance(name, str):
            variable_mutations[name] += 1


def _collect_expressions(definition: dict[str, Any]) -> list[ExpressionRef]:
    expressions: list[ExpressionRef] = []
    for path, value in walk_json(definition):
        if isinstance(value, str) and "@" in value:
            expressions.append(_expression_ref(path, value))
        elif isinstance(value, dict) and _looks_like_expression_object(value):
            expression_text = _compact_expression_object(value)
            expressions.append(_expression_ref(path, expression_text, object_functions=list(value.keys())))
    return expressions


def _expression_ref(path: tuple[str, ...], value: str, object_functions: list[str] | None = None) -> ExpressionRef:
    function_names = list(object_functions or []) + FUNCTION_RE.findall(value)
    functions = sorted(set(function_names))
    action_refs = [match.group(3) for match in ACTION_REF_RE.finditer(value)]
    variable_refs = [match.group(2) for match in VARIABLE_REF_RE.finditer(value)]
    form_fields = FORM_FIELD_RE.findall(value)
    return ExpressionRef(
        path=path,
        value=value,
        functions=functions,
        action_refs=action_refs,
        variable_refs=variable_refs,
        form_fields=form_fields,
    )


def _looks_like_expression_object(value: dict[str, Any]) -> bool:
    if not value:
        return False
    expression_keys = {
        "and",
        "or",
        "not",
        "equals",
        "less",
        "lessOrEquals",
        "greater",
        "greaterOrEquals",
        "contains",
        "empty",
    }
    return any(key in expression_keys for key in value)


def _compact_expression_object(value: dict[str, Any]) -> str:
    return str(value)


def _collect_constants(definition: dict[str, Any]) -> list[ConstantRef]:
    constants: list[ConstantRef] = []
    for path, value in walk_json(definition):
        if not isinstance(value, str) or not value:
            continue
        category = _classify_constant(path, value)
        if category:
            constants.append(ConstantRef(category=category, value=value, path=path))
    return constants


def _classify_constant(path: tuple[str, ...], value: str) -> str | None:
    if is_noisy_metadata_path(path):
        return None
    key = path[-1] if path else ""
    if key in {"apiId", "connectionName", "operationId", "authentication", "$schema"}:
        return None
    if "<" in value and ">" in value and len(value) > 1000:
        return "html"
    if EMAIL_RE.search(value):
        return "email"
    if URL_RE.search(value):
        return "url"
    if GUID_RE.search(value):
        return "guid"
    if looks_like_form_id(value, path):
        return "form_id"
    return None


def _count_functions(expressions: Iterable[ExpressionRef]) -> Counter[str]:
    counter: Counter[str] = Counter()
    for expression in expressions:
        counter.update(expression.functions)
    return counter


def equals_left_operands(index: WorkflowIndex) -> Counter[str]:
    counter: Counter[str] = Counter()
    for node in index.actions:
        if node.type != "If":
            continue
        action = _lookup_action(index.definition.get("actions", {}), node.path)
        if not isinstance(action, dict):
            continue
        expression = action.get("expression")
        lefts = _extract_equals_lefts(expression)
        counter.update(lefts)
    return counter


def _lookup_action(root_actions: dict[str, Any], path: tuple[str, ...]) -> dict[str, Any] | None:
    current: Any = {"actions": root_actions}
    for segment in path:
        if segment == "actions":
            current = current.get("actions") if isinstance(current, dict) else None
        elif segment == "else/actions":
            current = current.get("else", {}).get("actions") if isinstance(current, dict) else None
        elif segment.startswith("cases/"):
            parts = segment.split("/")
            current = current.get("cases", {}).get(parts[1], {}).get("actions") if isinstance(current, dict) else None
        elif segment == "default/actions":
            current = current.get("default", {}).get("actions") if isinstance(current, dict) else None
        elif isinstance(current, dict):
            current = current.get(segment)
        else:
            return None
    return current if isinstance(current, dict) else None


def _extract_equals_lefts(expression: Any) -> list[str]:
    if not isinstance(expression, dict):
        return []
    lefts: list[str] = []
    equals = expression.get("equals")
    if isinstance(equals, list) and equals:
        lefts.append(str(equals[0]))
    for key in ("and", "or"):
        children = expression.get(key)
        if isinstance(children, list):
            for child in children:
                lefts.extend(_extract_equals_lefts(child))
    return lefts
