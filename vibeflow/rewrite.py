from __future__ import annotations

import re
import shutil
from pathlib import Path
from typing import Any

from .aliases import flow_alias_section, load_aliases
from .index import build_index
from .linting import validate_run_after
from .package import discover_export
from .utils import (
    ACTION_REF_RE,
    slugify_name,
    transform_json,
    unique_name,
    unique_name_case_insensitive,
    walk_json,
    write_json,
)


EXCLUDED_CONSTANT_PATH_PARTS = {
    "triggers",
    "host",
    "authentication",
    "metadata",
    "runAfter",
    "type",
    "apiId",
    "connectionName",
    "dataset",
    "operationId",
    "table",
}


def rewrite_export(
    export_path: str | Path,
    aliases_path: str | Path,
    out_path: str | Path,
    *,
    force: bool = False,
) -> dict[str, Any]:
    source = discover_export(export_path)
    aliases = load_aliases(aliases_path)
    out = Path(out_path).expanduser().resolve()
    if out.exists():
        if not force:
            raise FileExistsError(f"{out} already exists. Pass --force to replace it.")
        shutil.rmtree(out)
    shutil.copytree(source.root, out)

    rewritten = discover_export(out)
    report: dict[str, Any] = {
        "source": str(source.root),
        "output": str(out),
        "flows": [],
    }

    for flow in rewritten.flows:
        wrapper = flow.load_wrapper()
        definition = wrapper.get("properties", {}).get("definition")
        if not isinstance(definition, dict):
            continue
        original_index = build_index(flow)
        flow_aliases = flow_alias_section(aliases, flow.flow_id)

        flow_report: dict[str, Any] = {
            "flowId": flow.flow_id,
            "definitionPath": str(flow.definition_path),
            "transformations": [],
            "skipped": [],
            "validationErrors": [],
        }

        rename_map = _action_rename_map(original_index, flow_aliases)
        if rename_map:
            _rename_actions(definition, rename_map)
            flow_report["transformations"].append(
                {"type": "rename-actions", "count": len(rename_map), "mapping": rename_map}
            )
        else:
            flow_report["skipped"].append({"type": "rename-actions", "reason": "No safe action aliases to apply."})

        removed_metadata = _remove_operation_metadata(definition)
        if removed_metadata:
            flow_report["transformations"].append({"type": "remove-operation-metadata", "count": removed_metadata})

        config_result = _extract_config_constants(definition, flow_aliases)
        if config_result["replacementCount"]:
            flow_report["transformations"].append(config_result)
        else:
            flow_report["skipped"].append(
                {
                    "type": "extract-config-constants",
                    "reason": "No exact action-input constants were safe to replace.",
                }
            )

        flow_report["skipped"].extend(_skipped_structural_rewrites(original_index))

        validation_errors = _validate_rewritten_definition(flow, wrapper)
        flow_report["validationErrors"] = validation_errors
        if validation_errors:
            flow_report["skipped"].append(
                {
                    "type": "finalize",
                    "reason": "Static validation found issues; inspect validationErrors before import.",
                }
            )
        write_json(flow.definition_path, wrapper)
        report["flows"].append(flow_report)

    write_json(out / "vibeflow-rewrite-report.json", report)
    return report


def _action_rename_map(index: Any, flow_aliases: dict[str, Any]) -> dict[str, str]:
    action_aliases = flow_aliases.get("actions", {}) if isinstance(flow_aliases, dict) else {}
    all_names_lower = {node.name.lower() for node in index.actions}
    taken_lower: set[str] = set()
    rename_map: dict[str, str] = {}
    for node in index.actions:
        action_info = action_aliases.get(node.name, {})
        if isinstance(action_info, dict):
            candidate = action_info.get("alias") or node.name
            rename_requested = action_info.get("renameOnRewrite", True)
        else:
            candidate = node.name
            rename_requested = True
        clean = slugify_name(str(candidate), "Action")
        # Allow keeping the current name while still reserving it case-insensitively.
        local_taken_lower = set(all_names_lower)
        local_taken_lower.discard(node.name.lower())
        local_taken_lower.update(taken_lower)
        new_name = unique_name_case_insensitive(clean, local_taken_lower)
        taken_lower.add(new_name.lower())
        if clean == node.name and new_name == node.name and not rename_requested:
            continue
        if new_name != node.name:
            rename_map[node.name] = new_name
    return rename_map


def _rename_actions(definition: dict[str, Any], rename_map: dict[str, str]) -> None:
    actions = definition.get("actions", {})
    if isinstance(actions, dict):
        definition["actions"] = _rename_action_container(actions, rename_map)

    def replace_refs(path: tuple[str, ...], value: Any) -> Any:
        if isinstance(value, str):
            return _replace_action_reference_text(value, rename_map)
        return value

    transformed = transform_json(definition, replace_refs)
    definition.clear()
    definition.update(transformed)


def _rename_action_container(actions: dict[str, Any], rename_map: dict[str, str]) -> dict[str, Any]:
    renamed: dict[str, Any] = {}
    for old_name, action in actions.items():
        new_name = rename_map.get(old_name, old_name)
        if isinstance(action, dict):
            run_after = action.get("runAfter")
            if isinstance(run_after, dict):
                action["runAfter"] = {rename_map.get(dep, dep): statuses for dep, statuses in run_after.items()}
            for key, child in list(action.items()):
                if key == "actions" and isinstance(child, dict):
                    action[key] = _rename_action_container(child, rename_map)
                elif key == "else" and isinstance(child, dict) and isinstance(child.get("actions"), dict):
                    child["actions"] = _rename_action_container(child["actions"], rename_map)
                elif key == "cases" and isinstance(child, dict):
                    for case in child.values():
                        if isinstance(case, dict) and isinstance(case.get("actions"), dict):
                            case["actions"] = _rename_action_container(case["actions"], rename_map)
                elif key == "default" and isinstance(child, dict) and isinstance(child.get("actions"), dict):
                    child["actions"] = _rename_action_container(child["actions"], rename_map)
        renamed[new_name] = action
    return renamed


def _replace_action_reference_text(text: str, rename_map: dict[str, str]) -> str:
    def replace(match: re.Match[str]) -> str:
        function_name = match.group(1)
        quote = match.group(2)
        old_name = match.group(3)
        new_name = rename_map.get(old_name)
        if not new_name:
            return match.group(0)
        return f"{function_name}({quote}{new_name}{quote}"

    return ACTION_REF_RE.sub(replace, text)


def _remove_operation_metadata(value: Any) -> int:
    removed = 0
    if isinstance(value, dict):
        metadata = value.get("metadata")
        if isinstance(metadata, dict) and "operationMetadataId" in metadata:
            metadata.pop("operationMetadataId", None)
            removed += 1
            if not metadata:
                value.pop("metadata", None)
        for child in list(value.values()):
            removed += _remove_operation_metadata(child)
    elif isinstance(value, list):
        for child in value:
            removed += _remove_operation_metadata(child)
    return removed


def _extract_config_constants(definition: dict[str, Any], flow_aliases: dict[str, Any]) -> dict[str, Any]:
    constants = flow_aliases.get("constants", {}) if isinstance(flow_aliases, dict) else {}
    replaceable = {
        info.get("value"): key
        for key, info in constants.items()
        if isinstance(info, dict)
        and info.get("replaceOnRewrite")
        and info.get("category") in {"email", "url", "guid"}
        and isinstance(info.get("value"), str)
        and len(info["value"]) < 500
    }
    replaceable = {value: key for value, key in replaceable.items() if value}
    if not replaceable:
        return {"type": "extract-config-constants", "replacementCount": 0}

    replacement_count = 0
    root_actions = definition.get("actions", {})
    if not isinstance(root_actions, dict):
        return {"type": "extract-config-constants", "replacementCount": 0}

    config_values: dict[str, str] = {}

    def replace_constant(path: tuple[str, ...], value: Any) -> Any:
        nonlocal replacement_count
        if not isinstance(value, str):
            return value
        if any(part in EXCLUDED_CONSTANT_PATH_PARTS for part in path):
            return value
        if "@{" in value or value.startswith("@"):
            return value
        alias_key = replaceable.get(value)
        if not alias_key:
            return value
        config_values[alias_key] = value
        replacement_count += 1
        return f"@variables('Config')?['{alias_key}']"

    definition["actions"] = transform_json(root_actions, replace_constant, ("actions",))
    if replacement_count:
        _add_config_initializer(definition, config_values)
    return {
        "type": "extract-config-constants",
        "replacementCount": replacement_count,
        "configKeys": sorted(config_values),
    }


def _add_config_initializer(definition: dict[str, Any], config_values: dict[str, str]) -> str:
    actions = definition.setdefault("actions", {})
    taken = set(actions)
    config_action_name = unique_name("Initialize_Config", taken)
    config_action = {
        "type": "InitializeVariable",
        "inputs": {
            "variables": [
                {
                    "name": "Config",
                    "type": "object",
                    "value": {key: config_values[key] for key in sorted(config_values)},
                }
            ]
        },
        "runAfter": {},
    }
    new_actions = {config_action_name: config_action}
    for name, action in actions.items():
        if isinstance(action, dict):
            run_after = action.get("runAfter")
            if not run_after:
                action["runAfter"] = {config_action_name: ["Succeeded"]}
        new_actions[name] = action
    definition["actions"] = new_actions
    return config_action_name


def _skipped_structural_rewrites(index: Any) -> list[dict[str, str]]:
    skipped: list[dict[str, str]] = []
    if index.action_type_counts.get("If", 0) >= 5:
        skipped.append(
            {
                "type": "if-to-switch",
                "reason": "Nested If tree detected, but V1 only reports this unless branch equivalence can be proven manually from aliases.",
            }
        )
    if index.action_type_counts.get("Scope", 0) < 2 and len(index.actions) > 20:
        skipped.append(
            {
                "type": "try-catch-scope-wrap",
                "reason": "Automatic scope wrapping would change execution ordering; V1 reports the need instead of guessing.",
            }
        )
    return skipped


def _validate_rewritten_definition(flow: Any, wrapper: dict[str, Any]) -> list[str]:
    definition = wrapper.get("properties", {}).get("definition", {})
    errors = [f"{path}: missing {', '.join(missing)}" for path, missing in validate_run_after(definition)]
    action_names = _collect_action_names(definition)
    duplicates = _case_insensitive_action_duplicates(definition)
    for normalized, names in sorted(duplicates.items()):
        errors.append(f"Duplicate action names after case-insensitive normalization ({normalized}): {', '.join(names)}")
    action_refs = {
        match.group(3)
        for _, value in walk_json(definition)
        if isinstance(value, str)
        for match in ACTION_REF_RE.finditer(value)
    }
    for action_name in sorted(action_refs):
        if action_name not in action_names:
            errors.append(f"Expression references missing action: {action_name}")
    connection_names = set(flow.connection_references()) | set(flow.connections_map())
    for connection_name in _collect_connection_names(definition):
        if connection_name not in connection_names:
            errors.append(f"Missing connector reference: {connection_name}")
    return errors


def _case_insensitive_action_duplicates(definition: dict[str, Any]) -> dict[str, list[str]]:
    grouped: dict[str, list[str]] = {}
    for name in _collect_action_names(definition):
        grouped.setdefault(name.lower(), []).append(name)
    return {key: sorted(names) for key, names in grouped.items() if len(names) > 1}


def _collect_action_names(definition: dict[str, Any]) -> set[str]:
    names: set[str] = set()
    root_actions = definition.get("actions", {})
    if isinstance(root_actions, dict):
        _collect_action_names_from_container(root_actions, names)
    return names


def _collect_action_names_from_container(actions: dict[str, Any], names: set[str]) -> None:
    for name, action in actions.items():
        names.add(name)
        if not isinstance(action, dict):
            continue
        for child in _child_containers(action):
            _collect_action_names_from_container(child, names)


def _collect_connection_names(definition: dict[str, Any]) -> set[str]:
    names: set[str] = set()
    for _, value in walk_json(definition):
        if isinstance(value, dict):
            host = value.get("host")
            if isinstance(host, dict) and isinstance(host.get("connectionName"), str):
                names.add(host["connectionName"])
    return names


def _child_containers(action: dict[str, Any]) -> list[dict[str, Any]]:
    children: list[dict[str, Any]] = []
    if isinstance(action.get("actions"), dict):
        children.append(action["actions"])
    if isinstance(action.get("else"), dict) and isinstance(action["else"].get("actions"), dict):
        children.append(action["else"]["actions"])
    if isinstance(action.get("cases"), dict):
        for case in action["cases"].values():
            if isinstance(case, dict) and isinstance(case.get("actions"), dict):
                children.append(case["actions"])
    if isinstance(action.get("default"), dict) and isinstance(action["default"].get("actions"), dict):
        children.append(action["default"]["actions"])
    return children
