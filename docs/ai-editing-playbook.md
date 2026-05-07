# AI Editing Playbook

Use this workflow when asking Codex or another AI assistant to modify a Power Automate export.

## 1. Generate Context

```bash
python3 -m vibeflow context examples/example1 --out generated/context/example1
```

Review these files first:

- `aliases.json`: editable names for random IDs, constants, connectors, variables, and actions.
- `summary.json`: quick flow inventory.
- `action-tree.md`: readable nested action map.
- `lint.json`: known risks and suggested fixes.
- `expressions.json`: expression, action, variable, and Forms field references.

## 2. Edit Aliases

Replace generated aliases such as `form_field_001` with real form question names. Keep raw `value` fields unchanged unless you are intentionally changing the flow.

Good AI request:

> Update the branch for `form_request_type` = `Advance Program`. Use aliases only. Do not change connector references or trigger form IDs.

Risky AI request:

> Find the request type field and update it.

## 3. Rewrite A Copy

```bash
python3 -m vibeflow rewrite examples/example1 \
  --aliases generated/context/example1/aliases.json \
  --out generated/rewrites/example1
```

Rewrites always create a new package copy. The original export remains unchanged.

## 4. Review Report

Open `generated/rewrites/example1/vibeflow-rewrite-report.json` and check:

- Applied transformations.
- Skipped transformations and reasons.
- Static validation errors.

Skipped items are intentional when Vibeflow cannot prove a change is safe.

## 5. Import And Validate

Import the generated copy into Power Automate, configure connections, and run a realistic test case. Static validation cannot replace run-history validation in Power Automate.
