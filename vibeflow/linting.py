from __future__ import annotations

from collections import defaultdict
from dataclasses import dataclass
from typing import Any

from .index import WorkflowIndex, equals_left_operands


@dataclass(frozen=True)
class LintIssue:
    rule: str
    severity: str
    category: str
    message: str
    path: str
    suggestion: str

    def as_dict(self) -> dict[str, str]:
        return {
            "rule": self.rule,
            "severity": self.severity,
            "category": self.category,
            "message": self.message,
            "path": self.path,
            "suggestion": self.suggestion,
        }


def lint_indexes(indexes: list[WorkflowIndex], profile: str = "balanced") -> dict[str, Any]:
    if profile != "balanced":
        raise ValueError("Only the balanced lint profile is implemented in V1")
    flow_results = []
    totals = defaultdict(int)
    for index in indexes:
        issues = lint_index(index)
        for issue in issues:
            totals[issue.severity] += 1
        flow_results.append(
            {
                "flowId": index.flow.flow_id,
                "displayName": index.flow.display_name(),
                "issueCount": len(issues),
                "issues": [issue.as_dict() for issue in issues],
            }
        )
    return {
        "profile": profile,
        "issueCount": sum(result["issueCount"] for result in flow_results),
        "severityCounts": dict(sorted(totals.items())),
        "flows": flow_results,
    }


def lint_index(index: WorkflowIndex) -> list[LintIssue]:
    issues: list[LintIssue] = []
    issues.extend(_lint_graph(index))
    issues.extend(_lint_scopes(index))
    issues.extend(_lint_variables(index))
    issues.extend(_lint_logic(index))
    issues.extend(_lint_constants(index))
    issues.extend(_lint_names(index))
    issues.extend(_lint_connectors(index))
    return issues


def _lint_graph(index: WorkflowIndex) -> list[LintIssue]:
    issues: list[LintIssue] = []
    for path, missing in validate_run_after(index.definition):
        issues.append(
            LintIssue(
                rule="PA000",
                severity="error",
                category="correctness",
                message=f"runAfter references missing action(s): {', '.join(missing)}",
                path=path,
                suggestion="Fix runAfter keys before importing or rewriting the flow.",
            )
        )
    action_names = {node.name for node in index.actions}
    unresolved = sorted(ref for ref in index.action_ref_counts if ref not in action_names)
    if unresolved:
        issues.append(
            LintIssue(
                rule="PA001",
                severity="error",
                category="correctness",
                message=f"Expression references unknown action(s): {', '.join(unresolved[:8])}",
                path="properties/definition",
                suggestion="Update action references or restore the missing action names.",
            )
        )
    return issues


def _lint_scopes(index: WorkflowIndex) -> list[LintIssue]:
    issues: list[LintIssue] = []
    if len(index.actions) > 20 and index.action_type_counts.get("Scope", 0) < 2:
        issues.append(
            LintIssue(
                rule="PA100",
                severity="warning",
                category="reliability",
                message="Large flow has little scope structure.",
                path="properties/definition/actions",
                suggestion="Group validation, decision, notification, and error handling blocks into named scopes.",
            )
        )
    catch_nodes = [
        node
        for node in index.actions
        if node.type == "Scope"
        and ("catch" in node.name.lower() or "error" in node.name.lower() or "failure" in node.name.lower())
    ]
    has_failed_run_after = any(_node_runs_after_failure(node) for node in catch_nodes)
    if len(index.actions) > 10 and not has_failed_run_after:
        issues.append(
            LintIssue(
                rule="PA101",
                severity="warning",
                category="reliability",
                message="No clear Catch/Error scope configured to run after failure.",
                path="properties/definition/actions",
                suggestion="Use a Try scope for main work and a Catch scope with Failed/TimedOut run-after settings using result() and workflow().",
            )
        )
    return issues


def _lint_variables(index: WorkflowIndex) -> list[LintIssue]:
    issues: list[LintIssue] = []
    if len(index.variables) >= 10:
        issues.append(
            LintIssue(
                rule="PA200",
                severity="warning",
                category="maintainability",
                message=f"Flow initializes {len(index.variables)} variables.",
                path="properties/definition/actions",
                suggestion="Group deploy-time constants into one object variable and prefer Compose/Data Operations for one-off derived values.",
            )
        )
    mutated = sorted(name for name, count in index.variable_mutations.items() if count >= 5)
    if mutated:
        issues.append(
            LintIssue(
                rule="PA201",
                severity="info",
                category="maintainability",
                message=f"Variable(s) mutated many times: {', '.join(mutated[:8])}",
                path="properties/definition/actions",
                suggestion="Consider replacing stateful branches with expressions, Switch cases, or data operations where possible.",
            )
        )
    return issues


def _lint_logic(index: WorkflowIndex) -> list[LintIssue]:
    issues: list[LintIssue] = []
    max_if_depth = max((node.if_depth for node in index.actions), default=0)
    if max_if_depth >= 5:
        issues.append(
            LintIssue(
                rule="PA300",
                severity="warning",
                category="logic",
                message=f"Nested condition depth reaches {max_if_depth}.",
                path="properties/definition/actions",
                suggestion="Convert repeated equality branches into a Switch or split decision groups into named scopes.",
            )
        )
    repeated_operands = {operand: count for operand, count in equals_left_operands(index).items() if count >= 4}
    if repeated_operands:
        first = next(iter(repeated_operands))
        issues.append(
            LintIssue(
                rule="PA301",
                severity="info",
                category="logic",
                message=f"Repeated equality checks against the same value appear {repeated_operands[first]} times.",
                path="properties/definition/actions",
                suggestion="Use a Switch action when many branches compare the same expression to different constants.",
            )
        )
    empty_string_checks = [
        expression for expression in index.expressions if "'', '']" in expression.value or '""' in expression.value
    ]
    if empty_string_checks:
        issues.append(
            LintIssue(
                rule="PA302",
                severity="info",
                category="expressions",
                message="Flow contains empty-string comparisons.",
                path=empty_string_checks[0].as_dict()["path"],
                suggestion="Prefer empty(), coalesce(), length(), and explicit null handling when semantics are clear.",
            )
        )
    return issues


def _lint_constants(index: WorkflowIndex) -> list[LintIssue]:
    issues: list[LintIssue] = []
    constant_counts = defaultdict(int)
    for constant in index.constants:
        constant_counts[constant.category] += 1
    if constant_counts:
        parts = ", ".join(f"{key}: {value}" for key, value in sorted(constant_counts.items()))
        issues.append(
            LintIssue(
                rule="PA400",
                severity="warning",
                category="constants",
                message=f"Hard-coded constants detected ({parts}).",
                path="properties/definition",
                suggestion="Move environment-specific values into aliases.json, Power Platform environment variables, or a Config object variable.",
            )
        )
    long_html = [constant for constant in index.constants if constant.category == "html"]
    if long_html:
        issues.append(
            LintIssue(
                rule="PA401",
                severity="info",
                category="maintainability",
                message=f"{len(long_html)} long HTML/template value(s) embedded in actions.",
                path="/".join(long_html[0].path),
                suggestion="Keep large HTML in a reviewed template source and inject dynamic fields through clear aliases.",
            )
        )
    if index.form_field_counts:
        issues.append(
            LintIssue(
                rule="PA402",
                severity="warning",
                category="ai-safety",
                message=f"{len(index.form_field_counts)} opaque Microsoft Forms response field ID(s) referenced.",
                path="properties/definition",
                suggestion="Review aliases.json and replace generated form_field aliases with real question labels before AI editing.",
            )
        )
    if len(index.metadata_ids) > 20:
        issues.append(
            LintIssue(
                rule="PA403",
                severity="info",
                category="maintainability",
                message=f"{len(index.metadata_ids)} designer metadata GUID(s) found.",
                path="properties/definition",
                suggestion="Rewrite can remove noisy operationMetadataId values from the generated copy.",
            )
        )
    return issues


def _lint_names(index: WorkflowIndex) -> list[LintIssue]:
    bad_names = [
        node.name
        for node in index.actions
        if not _is_clean_name(node.name)
        or any(word in node.name for word in ("Intialize", "Varaiable", "Attachement", "Attachements"))
    ]
    if not bad_names:
        return []
    return [
        LintIssue(
            rule="PA500",
            severity="info",
            category="naming",
            message=f"{len(bad_names)} action name(s) are hard for code-based editing.",
            path="properties/definition/actions",
            suggestion="Use stable PascalCase or snake_case names without brackets, copy suffixes, misspellings, or punctuation.",
        )
    ]


def _lint_connectors(index: WorkflowIndex) -> list[LintIssue]:
    issues: list[LintIssue] = []
    connection_names = set(index.flow.connection_references()) | set(index.flow.connections_map())
    missing_connections = sorted(
        {
            node.connection_name
            for node in index.actions
            if node.connection_name and node.connection_name not in connection_names
        }
    )
    if missing_connections:
        issues.append(
            LintIssue(
                rule="PA600",
                severity="error",
                category="connectors",
                message=f"Connector references missing from package maps: {', '.join(missing_connections)}",
                path="properties/definition/actions",
                suggestion="Repair connectionReferences/connectionsMap before import.",
            )
        )

    connector_actions = [node for node in index.actions if node.type == "OpenApiConnection"]
    retry_configured = 0
    for node in connector_actions:
        action = _lookup_by_name(index.definition.get("actions", {}), node.name)
        retry_policy = action.get("runtimeConfiguration", {}).get("retryPolicy") if isinstance(action, dict) else None
        if retry_policy:
            retry_configured += 1
    if len(connector_actions) >= 5 and retry_configured == 0:
        issues.append(
            LintIssue(
                rule="PA601",
                severity="info",
                category="reliability",
                message="No explicit retry policies found on connector-heavy flow.",
                path="properties/definition/actions",
                suggestion="Use exponential retry policies for transient connector failures where the action is idempotent.",
            )
        )
    return issues


def validate_run_after(definition: dict[str, Any]) -> list[tuple[str, list[str]]]:
    errors: list[tuple[str, list[str]]] = []
    root_actions = definition.get("actions", {})
    if isinstance(root_actions, dict):
        _validate_action_container(root_actions, "actions", errors)
    return errors


def _validate_action_container(actions: dict[str, Any], path: str, errors: list[tuple[str, list[str]]]) -> None:
    names = set(actions)
    for name, action in actions.items():
        if not isinstance(action, dict):
            continue
        missing = sorted(dep for dep in (action.get("runAfter") or {}) if dep not in names)
        if missing:
            errors.append((f"{path}/{name}/runAfter", missing))
        for label, child in _child_maps(action):
            _validate_action_container(child, f"{path}/{name}/{label}", errors)


def _child_maps(action: dict[str, Any]) -> list[tuple[str, dict[str, Any]]]:
    child_maps = []
    if isinstance(action.get("actions"), dict):
        child_maps.append(("actions", action["actions"]))
    if isinstance(action.get("else"), dict) and isinstance(action["else"].get("actions"), dict):
        child_maps.append(("else/actions", action["else"]["actions"]))
    if isinstance(action.get("cases"), dict):
        for case_name, case in action["cases"].items():
            if isinstance(case, dict) and isinstance(case.get("actions"), dict):
                child_maps.append((f"cases/{case_name}/actions", case["actions"]))
    if isinstance(action.get("default"), dict) and isinstance(action["default"].get("actions"), dict):
        child_maps.append(("default/actions", action["default"]["actions"]))
    return child_maps


def _node_runs_after_failure(node: Any) -> bool:
    failure_statuses = {"Failed", "TimedOut"}
    return any(
        status in failure_statuses
        for statuses in getattr(node, "run_after_statuses", {}).values()
        for status in statuses
    )


def _is_clean_name(name: str) -> bool:
    return name.replace("_", "").isalnum() and not any(ch in name for ch in "[]{}()")


def _lookup_by_name(actions: dict[str, Any], name: str) -> dict[str, Any] | None:
    for action_name, action in actions.items():
        if action_name == name and isinstance(action, dict):
            return action
        if not isinstance(action, dict):
            continue
        for _, child in _child_maps(action):
            found = _lookup_by_name(child, name)
            if found is not None:
                return found
    return None
