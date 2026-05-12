# Vibeflow

Local TypeScript toolkit for **programmatically building and editing Power Automate flows** through an AI agent. Vibeflow gives the agent a typed surface (intermediate representation + connector catalog + validator) instead of letting it edit raw `definition.json`.

> Status: early. Phase 1 (core IR + parser/emitter + catalog) lands first.

## Why

Editing Power Automate `definition.json` files by hand or via LLM string-rewrites is error-prone: random GUIDs, opaque Forms field IDs, unforgiving connector schemas, and structural rules that aren't visible in the JSON. Vibeflow makes the underlying flow a first-class typed structure so an AI agent can reason and mutate at the action/parameter level, then emit a flow that imports cleanly into Power Automate.

## Architecture (in one diagram)

```text
                ┌────────────────────────────────────────────┐
                │              Agent / CLI / Web             │
                │  high-level tools: add_action, set_param,  │
                │  validate, compile, decompile, diff        │
                └───────────────┬────────────────────────────┘
                                │
                ┌───────────────▼────────────────────────────┐
                │            Builder / DSL API               │
                │  flow.addAction(Outlook.sendEmailV2(...))  │
                └───────────────┬────────────────────────────┘
                                │
   parser ────► │             Flow IR (typed)                │ ◄──── emitter
                │  Flow, Trigger, Action, Scope, If, Switch, │
                │  Foreach, Until, Variable, RunAfter        │
                └───────────────┬────────────────────────────┘
                                │ used for validation + autocomplete
                ┌───────────────▼────────────────────────────┐
                │            Connector Catalog               │
                │  56 connectors / 1,283 operations          │
                │  + built-in workflow action types          │
                └────────────────────────────────────────────┘
```

The first PR (this commit) establishes the **IR, parser, emitter, package loader, and catalog**. Everything above that — builder, validator, agent tools, CLI, web UI — is built on top.

## Repository layout

```text
vibeflow/
  packages/
    core/                # @vibeflow/core — IR, parser, emitter, validator, builder, catalog
    connectors/          # @vibeflow/connectors — typed shims generated from the catalog
      src/_generated/    # 56 connector modules, ~1,283 operations
      scripts/generate.ts
  generated/
    connectors/
      normalized/        # 56 normalized connector JSON files (operationId → metadata)
      raw/               # Raw Microsoft Learn markdown the normalized files were derived from
      builtin-workflow-actions.json
      catalog-summary.json
      operation-inventory.json
  examples/              # Real Power Automate exports used as round-trip fixtures
  tools/
    collect_connector_definitions.py   # Python scraper that rebuilds generated/connectors/
  docs/
```

Future packages (sketched, not yet implemented):

- `@vibeflow/agent` — Claude Agent SDK tool surface (`add_action`, `set_param`, `validate`, `compile`, ...).
- `@vibeflow/server` — Local Bun/Hono server that hosts the agent loop + chat UI.
- `@vibeflow/web` — Vite/React chat + flow-view client.
- `@vibeflow/cli` — Optional `vibeflow` CLI exposing the same tools.

## Prerequisites

- [Bun](https://bun.sh) 1.3+
- Eventually: [Claude Code](https://claude.com/claude-code) installed and authenticated locally. The agent uses your local Claude subscription/credentials; no Anthropic API key needed in env.

## Getting started

```bash
bun install
bun test                              # run all workspace tests
bun packages/connectors/scripts/generate.ts   # regenerate connector shims
```

You should see all tests pass, including lossless round-trip on the two example flows in `examples/`, validator behavior on real flows, and a from-scratch flow built with the generated connector shims.

## Building a flow

```ts
import {
  ConnectorCatalog,
  createFlow,
} from "@vibeflow/core";
import { MicrosoftForms, Office365Outlook } from "@vibeflow/connectors";

const flow = createFlow({
  displayName: "Form response → Email",
  connectionReferences: {
    shared_microsoftforms: { api: { name: "shared_microsoftforms" }, runtimeSource: "embedded" },
    shared_office365:      { api: { name: "shared_office365"      }, runtimeSource: "embedded" },
  },
});

const trigger = flow.setTrigger(
  "When_a_new_response_is_submitted",
  MicrosoftForms.createFormWebhook({ form_id: "EXAMPLE_FORM_ID" }),
);

const getResponse = flow.addAction(
  "Get_response_details",
  MicrosoftForms.getFormResponseById({
    form_id: "EXAMPLE_FORM_ID",
    response_id: trigger.outputs("body/resourceData/responseId"),
  }),
);

flow.addAction(
  "Send_email",
  Office365Outlook.sendEmailV2({
    "emailMessage/To": "tester@example.com",
    "emailMessage/Subject": "New form response",
    "emailMessage/Body": `<p>Response id: ${getResponse.output("body/responseId")}</p>`,
  }),
  { after: [getResponse] },
);

const catalog = await ConnectorCatalog.load();
const validation = flow.validate(catalog);
if (validation.errorCount > 0) throw new Error("invalid");

const definitionJson = flow.toJson();   // ready to write to definition.json
```

## Core concepts

### The IR is lossless

`parseFlow(json)` returns a typed `Flow` object whose `emitFlow(...)` produces byte-equivalent JSON for the structures it owns. Unknown fields are preserved verbatim and key order is honored on emit. This is locked behind tests in `packages/core/tests/roundtrip.test.ts`.

### The catalog is the schema

`ConnectorCatalog.load()` builds a typed view of every connector in `generated/connectors/normalized/` plus the built-in workflow types (`If`, `Switch`, `Foreach`, etc.). The catalog is what lets the validator say "this `operationId` doesn't exist on `shared_office365`" or "`SendEmailV2` requires `emailMessage/To`".

The catalog is regenerated by `tools/collect_connector_definitions.py`. A TypeScript port is on the roadmap.

### Connectors covered

56 Microsoft and built-in connectors with 1,283 operations. Full list lives in `generated/connectors/catalog-summary.json`.

## Roadmap

| Phase | Scope | Status |
|-------|-------|--------|
| 1 | `@vibeflow/core`: IR, parse/emit, catalog loader, package loader, round-trip tests | ✅ |
| 2 | Validator, builder API, typed connector shim codegen (56 connectors / 1,283 ops) | ✅ |
| 3 | `@vibeflow/agent`: Claude Agent SDK tool surface + interactive CLI smoke test | ⏳ |
| 4 | `@vibeflow/server` + `@vibeflow/web`: local app shell, zip import/export, chat panel | ⏳ |
| 5 | Catalog refresh in TS, IR diff visualization, optional MCP server adapter | ⏳ |

## Documentation

- [Next Steps](docs/next-steps.md) — what to do between now and a working Claude Code-driven agent.
- [AI Editing Playbook](docs/ai-editing-playbook.md)
- [Import And Testing Checklist](docs/import-testing-checklist.md)
- [Power Automate Style Guide](docs/power-automate-style-guide.md)
- [Power Automate Connector Definition Research](docs/power-automate-connector-definition-research.md)

## Generating example zips

Three demo flows are defined in `packages/connectors/src/examples/index.ts`. Build them as importable Power Automate zips:

```bash
bun run generate:examples           # writes generated/zips/*.zip
bun run generate:examples --tree    # also write the unzipped tree for inspection
```

Outputs:

```text
generated/zips/
  form-response-email.zip          # Microsoft Forms trigger → Outlook email
  sharepoint-approval.zip          # SharePoint trigger → Approval → conditional email
  daily-sharepoint-digest.zip      # Recurrence trigger → SharePoint getItems → Foreach → email
```

See **[Example zips and provisioning](docs/example-zips.md)** for:

- Environment variables that bake real **form id**, **SharePoint site**, **list name**, and **email** addresses into the zip.
- **`IMPORT.md`** and **`required-inputs.json`** inside every zip (human + agent readable).
- **`tools/provision-sharepoint-list.ts`** — creates a list via Microsoft Graph (`az login` or `GRAPH_ACCESS_TOKEN`).
- Honest limits on **automating Microsoft Forms** creation (and how an agent should handle that).

## Examples

- `examples/example1` — Real export used as a round-trip fixture.
- `examples/example2` — Real export used as a round-trip fixture.
