# Next Steps

Status snapshot, **2026-05-11**:

| Phase | Status |
|------:|--------|
| 1 — Core IR, parser, emitter, catalog loader, package loader | ✅ |
| 2 — Validator, builder API, typed connector shim codegen (56 connectors / 1,283 ops) | ✅ |
| 2.5 — Export packager (`manifest.json` + maps), zip writer, three runnable example flows | ✅ |
| 3 — Local Claude Code-driven agent on top of the existing tools | 👈 next |
| 4 — Local app shell (server + web UI) | ⏳ |
| 5 — Catalog refresh in TS, IR diff visualization, MCP adapter | ⏳ |

This note is about what to do between now and a working Phase 3.

## The honest gating problem

Phase 2 gave us a library that can build, validate, package, and zip a Power Automate flow. But **we have not actually imported a generated zip into Power Automate yet.** Until we do that, we don't know:

1. Whether the `manifest.json` shape we synthesize is accepted by the import UI.
2. Whether our IR-emitted `definition.json` is accepted as-is by the runtime.
3. Whether our parameter shapes for grouped-key connectors (Outlook `emailMessage/...`, Approvals `WebhookApprovalCreationInput/...`, SharePoint `dataset` / `table`) actually run when the flow executes.
4. Which fields are mandatory in the wrapper (`name`, `id`, `type`, `connectionReferences`, etc.) that we currently set as defaults.

Everything in Phase 3 (the agent) assumes "compile → import → run" works. So the very next thing to do is **import the three example zips and find out what breaks.**

```bash
# Optional: bake tenant-specific values into definition.json (see docs/example-zips.md)
export VIBEFLOW_FORM_ID="…"
export VIBEFLOW_SHAREPOINT_SITE_URL="https://tenant.sharepoint.com/sites/…"
export VIBEFLOW_LIST_NAME="…"
export VIBEFLOW_NOTIFY_EMAIL="you@tenant.com"
bun run generate:examples          # writes generated/zips/*.zip (+ IMPORT.md inside each)
# Create a SharePoint list automatically (Graph): tools/provision-sharepoint-list.ts
# Microsoft Forms: still manual id — see docs/example-zips.md (Forms section)
# then in https://make.powerautomate.com:
#   My flows → Import → Import package (legacy) → upload zip
```

Each zip now contains **`IMPORT.md`** and **`required-inputs.json`** listing connections, env vars, and step-by-step import checks—use those as the agent-facing contract until compile-time config UI exists.

Try them in this order: `form-response-email.zip`, `daily-sharepoint-digest.zip`, `sharepoint-approval.zip`. Each unlocks one extra surface (connector trigger → built-in trigger + foreach → conditional with built-in If).

Capture what fails. If something is rejected at import, save the error message; if it imports but fails to run, save the run-history error. Both feed directly into fixes in `packages/core/src/package/build.ts` or `packages/core/src/emit/emit.ts`.

## What I'd do in parallel with the import test

These are small, safe improvements while we wait on import feedback:

1. **Pre-import validator pass.** Add a lint that catches the obvious "you'll fail at import" issues: any action whose `host.connectionName` doesn't appear in `properties.connectionReferences`; any expression that references an action name that doesn't exist; any built-in type we don't know (`Recurrence`, `Compose`, `Until`, …) — the catalog tracks the built-in list now, we just need to wire it.
2. **Reference-import test.** Add a test that does `parsePackage(examples/example1) → buildExportPackage → writeExportZip` and confirms the regenerated zip is structurally equivalent to the original. This is the "we can round-trip *packages*, not just definitions" guarantee.
3. **A few more connector-rich examples.** Things that exercise Teams adaptive cards, SharePoint update item, Outlook with attachments. These are the operations the grouped-key shape question matters most for.

## Phase 3: Claude Code-driven agent

The architecture you described — "user clones the app, runs `bun dev`, the local app talks to Claude Code on the user's machine" — has a clean mapping onto the Claude Agent SDK. Here's a concrete shape.

### Package layout for Phase 3

```text
packages/
  agent/                          # @vibeflow/agent
    src/
      tools/
        list_actions.ts
        get_action.ts
        add_action.ts
        set_param.ts
        rename_action.ts
        move_action.ts
        add_scope.ts
        add_if.ts
        add_foreach.ts
        find_operation.ts          # searches @vibeflow/connectors catalog
        describe_operation.ts
        set_trigger.ts
        validate.ts
        compile.ts                 # IR → export package + zip
        snapshot.ts                # current IR + summary for the model
      session.ts                   # FlowSession: holds Flow IR + history + working dir
      loop.ts                      # Claude Agent SDK runner
      system-prompt.ts             # describes IR, catalog, tool contract
      schemas.ts                   # zod schemas mirrored to each tool
    cli.ts                         # `vibeflow agent` interactive REPL (no UI needed)
```

### How the agent loop runs locally

```text
              ┌──────────────────────────────────────────────────┐
              │  user (terminal or, later, web UI)               │
              └──────────────────────┬───────────────────────────┘
                                     │ prompt
                                     ▼
              ┌──────────────────────────────────────────────────┐
              │  @vibeflow/agent  (runs in Bun, in repo)         │
              │  ┌────────────────────────────────────────────┐  │
              │  │ Claude Agent SDK loop                      │  │
              │  │   tools: vibeflowTools                     │  │
              │  │   systemPrompt: schema + catalog primer    │  │
              │  └────────────┬──────────────┬────────────────┘  │
              │               │ tool_use     │ text              │
              │               ▼              ▼                   │
              │      tool handler        streamed reply          │
              │   (mutates Flow IR        back to user           │
              │    via @vibeflow/core)                           │
              └──────────────────────────────────────────────────┘
                                     │
                                     ▼
                          @vibeflow/core + @vibeflow/connectors
                          (validator, builder, packager)
```

The user's Claude Code subscription/credentials handle authentication. We never see a token: the SDK reads them from the local Claude Code setup.

### The tool surface (initial draft)

Each tool is a typed function plus a Zod schema. The schema is what the model sees; the function body calls into `@vibeflow/core` / `@vibeflow/connectors`. Keep them small and orthogonal — the agent composes them.

| Tool | What it does | Backing call |
|------|--------------|--------------|
| `snapshot` | Returns a compact summary of the current flow: triggers, action tree, validation status. | `walkActions` + `validateFlow` |
| `find_operation(q)` | Fuzzy/text search over the catalog (display name, operation id, description). | `ConnectorCatalog` |
| `describe_operation(connectorId, opId)` | Full param schema + required-ness + description. | `ConnectorCatalog.getOperation` |
| `set_trigger(name, spec)` | Replaces the flow's trigger. | `FlowBuilder.setTrigger` |
| `add_action(name, spec, after?)` | Adds a top-level or scoped action. | `FlowBuilder.addAction` |
| `add_scope / add_if / add_foreach` | Adds a control-flow container with a callback body the model fills via more tool calls. | builder API |
| `set_param(actionName, key, value)` | Edits an existing action's `inputs.parameters` entry. | direct IR mutation |
| `rename_action(old, new)` | Renames in container + rewrites all `@outputs('old')` references. | (port the Python `rewrite._rename_actions` logic) |
| `remove_action(name)` | Removes + repairs run-after edges of dependants. | direct IR mutation + validator |
| `validate` | Runs the catalog-aware validator and returns issues. | `validateFlow` |
| `compile(displayName, plan)` | Emits a zip ready to import; returns the path. | `buildExportPackage` + `writeExportZip` |

Worth keeping **out** of the first tool surface (to limit blast radius and decision space):

- Anything that edits `properties.connectionReferences` keys other than adding them by name. Tightly scoped: the agent declares connection needs, the user wires real connections at import.
- Direct JSON editing of `definition.json` fields. We force the agent through the IR.
- Renaming connectors (`apiId`). Connectors are immutable once set.

### System prompt sketch

```text
You are a Power Automate flow editor. You work on a single Flow IR through
typed tools. You never produce raw JSON; instead you call tools that mutate
the IR.

When you start a session, call `snapshot` to see the current flow. To learn
what a connector operation needs, call `find_operation` and then
`describe_operation`. When you add a connector action, refer to operations
through the connector shim (operationId, apiId, parameters with their
canonical keys, including grouped keys like "emailMessage/To").

After every meaningful change, call `validate`. If there are errors, fix
them before moving on. Use `compile` only when the user asks for a final
build.

Rules:
- Preserve action names that the user has named explicitly.
- Use descriptive, snake_case action names for new actions.
- Never reference an action's outputs in an expression before that action
  has been added.
- For control-flow containers (If/Switch/Foreach), prefer adding a single
  container action with its body provided in one go.
```

### CLI smoke test before any UI

```bash
bun run agent --session ./tmp/session-1
> Create a new flow that runs daily, gets items from SharePoint list "X"
  in site "Y", and emails me a summary.
[agent calls find_operation, describe_operation, set_trigger, add_action,
 add_foreach, add_action, validate, compile]
> Saved generated/zips/session-1.zip
```

This is the iteration target. No web app yet — just a terminal REPL with the agent loop and the existing toolchain. Once prompts and tools feel right here, the web shell in Phase 4 is just streaming the same `loop.ts` to a websocket.

## Suggested ordering for the next ~week

1. **Import the three demo zips** into a real Power Automate environment. Fix whatever the import or first run reveals — almost certainly in `build.ts` (manifest shape) or `emit.ts` (small wrapper fields).
2. **Round-trip a real export.** `parsePackage(examples/example1) → buildExportPackage → zip`, then import that zip and confirm it matches the original. If the original runs, ours should too. This is the strongest "Vibeflow doesn't corrupt your flows" guarantee we can give the agent.
3. **Add `@vibeflow/agent` scaffolding** with `snapshot`, `find_operation`, `describe_operation`, `add_action`, `set_param`, `validate`, `compile`. Wire the Claude Agent SDK.
4. **CLI smoke session.** Build a tiny in-terminal REPL. Iterate on the system prompt against real prompts ("change the email recipient", "add a condition", "wrap this scope in try/catch").
5. **Pick the first non-trivial benchmark.** A short script that asks the agent to reproduce `examples/example1` from a one-paragraph description. Use the diff against the real export as the quality signal.

Once #4 is working, the web app in Phase 4 is mostly a UX question; the engine is solved.
