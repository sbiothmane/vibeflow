# vibeflow

Power Automate export examples and deterministic tooling for AI-safe flow edits.

Vibeflow understands exported cloud-flow packages such as `examples/example1`, inspects the underlying `definition.json`, generates AI context files, lints common Power Automate quality issues, and writes rewritten packages only to generated output copies.

## Quick Start

```bash
python3 -m vibeflow inspect examples/example1
python3 -m vibeflow context examples/example1 --out generated/context/example1
python3 -m vibeflow lint examples/example1
python3 -m vibeflow rewrite examples/example1 \
  --aliases generated/context/example1/aliases.json \
  --out generated/rewrites/example1
```

Install as an editable package if you want the `vibeflow` command:

```bash
python3 -m pip install -e ".[dev]"
vibeflow inspect examples/example1
```

## Commands

- `inspect <export>` summarizes triggers, actions, variables, connectors, expressions, constants, metadata IDs, and opaque Forms fields.
- `context <export> --out <dir>` writes AI-ready files: `summary.json`, `aliases.json`, `action-tree.md`, `connectors.json`, `expressions.json`, `lint.json`, and `prompt-rules.md`.
- `lint <export> --profile balanced` reports reliability, maintainability, expression, constants, scope, naming, and connector issues.
- `rewrite <export> --aliases <aliases.json> --out <dir>` clones the export and applies safe aggressive rewrites to the copy.

## Rewrite Safety

Rewrites never modify the source export. V1 can normalize action names, update recognized action references, remove noisy `operationMetadataId` metadata, and extract exact action-input constants into a `Config` object variable. Larger structural changes such as If-to-Switch conversion or automatic Try/Catch wrapping are reported when they cannot be proven safe.

## Documentation

- [Power Automate Style Guide](docs/power-automate-style-guide.md)
- [AI Editing Playbook](docs/ai-editing-playbook.md)
- [Import And Testing Checklist](docs/import-testing-checklist.md)

## Examples

- `examples/example1` — Example flow
- `examples/example2` — Example flow 2
