from __future__ import annotations

from collections import defaultdict
from pathlib import Path
from typing import Any

from .index import WorkflowIndex
from .utils import load_json, slugify_name, unique_name_case_insensitive


def generate_aliases(indexes: list[WorkflowIndex]) -> dict[str, Any]:
    flows: dict[str, Any] = {}
    for index in indexes:
        flows[index.flow.flow_id] = _flow_aliases(index)
    return {
        "schema": "vibeflow.aliases.v1",
        "description": "Editable aliases for opaque Power Automate export IDs. Keep values stable and edit aliases before asking AI to modify a flow.",
        "flows": flows,
    }


def load_aliases(path: str | Path) -> dict[str, Any]:
    data = load_json(Path(path))
    if not isinstance(data, dict) or data.get("schema") != "vibeflow.aliases.v1":
        raise ValueError(f"{path} is not a vibeflow aliases.json file")
    return data


def flow_alias_section(aliases: dict[str, Any], flow_id: str) -> dict[str, Any]:
    flows = aliases.get("flows", {})
    section = flows.get(flow_id, {})
    return section if isinstance(section, dict) else {}


def _flow_aliases(index: WorkflowIndex) -> dict[str, Any]:
    action_names_lower = {node.name.lower() for node in index.actions}
    taken_actions_lower: set[str] = set()
    actions = {}
    for node in index.actions:
        alias = unique_name_case_insensitive(slugify_name(node.name, "Action"), taken_actions_lower)
        actions[node.name] = {
            "alias": alias,
            "type": node.type,
            "path": node.path_text,
            "parent": node.parent,
            "operationId": node.operation_id,
            "renameOnRewrite": alias != node.name or alias.lower() != node.name.lower() or alias.lower() not in action_names_lower,
        }

    variables = {
        name: {
            "alias": slugify_name(name, "Variable"),
            **details,
            "mutationCount": index.variable_mutations.get(name, 0),
            "referenceCount": index.variable_ref_counts.get(name, 0),
        }
        for name, details in sorted(index.variables.items())
    }

    connectors = _connector_aliases(index)
    form_fields = {
        field_id: {
            "alias": f"form_field_{position:03d}",
            "referenceCount": count,
            "notes": "Replace this alias with the real Forms question label when known.",
        }
        for position, (field_id, count) in enumerate(index.form_field_counts.most_common(), start=1)
    }

    constants = _constant_aliases(index)
    return {
        "displayName": index.flow.display_name(),
        "definitionPath": index.flow.relative_definition_path,
        "actions": actions,
        "variables": variables,
        "connectors": connectors,
        "formFields": form_fields,
        "constants": constants,
    }


def _connector_aliases(index: WorkflowIndex) -> dict[str, Any]:
    refs = index.flow.connection_references()
    connections_map = index.flow.connections_map()
    apis_map = index.flow.apis_map()
    connectors: dict[str, Any] = {}
    for name in sorted(set(refs) | set(connections_map) | set(apis_map)):
        ref = refs.get(name, {}) if isinstance(refs.get(name), dict) else {}
        connectors[name] = {
            "alias": slugify_name(name, "connector"),
            "connectionId": connections_map.get(name),
            "apiId": apis_map.get(name) or ref.get("id"),
            "apiName": ref.get("apiName"),
            "source": ref.get("source"),
        }
    return connectors


def _constant_aliases(index: WorkflowIndex) -> dict[str, Any]:
    grouped: dict[tuple[str, str], set[str]] = defaultdict(set)
    for constant in index.constants:
        grouped[(constant.category, constant.value)].add("/".join(constant.path))

    category_counts: defaultdict[str, int] = defaultdict(int)
    aliases: dict[str, Any] = {}
    for (category, value), paths in sorted(grouped.items(), key=lambda item: (item[0][0], item[0][1])):
        category_counts[category] += 1
        key = f"{category}_{category_counts[category]:03d}"
        aliases[key] = {
            "alias": key,
            "category": category,
            "value": value,
            "paths": sorted(paths),
            "replaceOnRewrite": category in {"email", "url", "guid"},
        }
    return aliases
