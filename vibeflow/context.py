from __future__ import annotations

from pathlib import Path
from typing import Any

from .aliases import generate_aliases
from .index import WorkflowIndex, action_tree_markdown, expression_inventory, package_summary
from .linting import lint_indexes
from .utils import write_json, write_text


def write_context(indexes: list[WorkflowIndex], out_dir: str | Path) -> dict[str, Any]:
    out = Path(out_dir)
    out.mkdir(parents=True, exist_ok=True)

    summary = package_summary(indexes)
    aliases = generate_aliases(indexes)
    lint = lint_indexes(indexes)

    write_json(out / "summary.json", summary)
    write_json(out / "aliases.json", aliases)
    write_json(out / "lint.json", lint)

    connectors: dict[str, Any] = {}
    expressions: dict[str, Any] = {}
    action_tree_lines: list[str] = []
    for index in indexes:
        connectors[index.flow.flow_id] = aliases["flows"][index.flow.flow_id]["connectors"]
        expressions[index.flow.flow_id] = expression_inventory(index)
        action_tree_lines.append(action_tree_markdown(index))

    write_json(out / "connectors.json", connectors)
    write_json(out / "expressions.json", expressions)
    write_text(out / "action-tree.md", "\n".join(action_tree_lines))
    write_text(out / "prompt-rules.md", prompt_rules())

    return {
        "outDir": str(out.resolve()),
        "files": [
            "summary.json",
            "aliases.json",
            "lint.json",
            "connectors.json",
            "expressions.json",
            "action-tree.md",
            "prompt-rules.md",
        ],
    }


def prompt_rules() -> str:
    return """# Vibeflow AI Editing Rules

Use this context before editing a Power Automate export.

1. Treat `aliases.json` as the source of truth for opaque IDs. Do not invent Forms response IDs, connector names, SharePoint list IDs, or environment constants.
2. Refer to form fields by their alias names in planning and code comments. If an alias is still named `form_field_###`, ask for the real question label or keep the raw ID untouched.
3. Preserve package structure: `manifest.json`, `Microsoft.Flow/flows/<flow-id>/definition.json`, `connectionsMap.json`, and `apisMap.json`.
4. Prefer named scopes for validation, decision logic, notifications, and error handling. Use Try/Catch patterns with `result()` and `workflow()` for diagnostics.
5. Prefer expressions and data operations over many stateful variables. Use `empty()`, `coalesce()`, `contains()`, `length()`, `formatDateTime()`, and object variables when they make the logic clearer.
6. Never update connection IDs, authentication blocks, trigger form IDs, or connector host blocks unless the user explicitly asks and provides replacement aliases.
7. After edits, validate JSON, action references, `runAfter` dependencies, connector references, and import the generated copy into Power Automate for final run-history validation.
"""
