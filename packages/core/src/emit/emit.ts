import type {
  Action,
  ChildContainer,
  Definition,
  Flow,
  Trigger,
} from "../ir/types.js";
import { cloneJson, type JsonObject } from "../util/json.js";

/**
 * Emit a Flow wrapper JSON object equivalent to what was parsed.
 *
 * Round-trip guarantee: for any flow `f`, `emitFlow(parseFlow(json)) === json`
 * structurally (deep-equal). Key order is preserved on a best-effort basis to
 * keep diffs small.
 */
export function emitFlow(flow: Flow): JsonObject {
  const { wrapper } = flow;
  const out: JsonObject = {};
  for (const key of wrapper.wrapperKeyOrder) {
    if (key === "properties") {
      out["properties"] = emitProperties(flow);
    } else if (key in wrapper.outer) {
      out[key] = cloneJson(wrapper.outer[key]);
    }
  }
  // Append any wrapper-level keys we discovered after the fact.
  for (const [k, v] of Object.entries(wrapper.outer)) {
    if (!(k in out)) out[k] = cloneJson(v);
  }
  if (!("properties" in out)) {
    out["properties"] = emitProperties(flow);
  }
  return out;
}

function emitProperties(flow: Flow): JsonObject {
  const { wrapper } = flow;
  const out: JsonObject = {};
  for (const key of wrapper.propertiesKeyOrder) {
    if (key === "definition") {
      out["definition"] = emitDefinition(wrapper.definition);
    } else if (key in wrapper.properties) {
      out[key] = cloneJson(wrapper.properties[key]);
    }
  }
  for (const [k, v] of Object.entries(wrapper.properties)) {
    if (!(k in out)) out[k] = cloneJson(v);
  }
  if (!("definition" in out)) {
    out["definition"] = emitDefinition(wrapper.definition);
  }
  return out;
}

function emitDefinition(definition: Definition): JsonObject {
  const out: JsonObject = {};
  for (const key of definition.topLevelKeyOrder) {
    switch (key) {
      case "$schema":
        if (definition.schema !== undefined) out[key] = definition.schema;
        break;
      case "contentVersion":
        if (definition.contentVersion !== undefined) out[key] = definition.contentVersion;
        break;
      case "metadata":
        if (definition.metadata !== undefined) out[key] = cloneJson(definition.metadata);
        break;
      case "parameters":
        if (definition.parameters !== undefined) out[key] = cloneJson(definition.parameters);
        break;
      case "triggers":
        out[key] = emitTriggers(definition.triggers);
        break;
      case "actions":
        out[key] = emitActionMap(definition.actions);
        break;
      default:
        if (key in definition.extra) {
          out[key] = cloneJson(definition.extra[key]);
        }
    }
  }
  for (const [k, v] of Object.entries(definition.extra)) {
    if (!(k in out)) out[k] = cloneJson(v);
  }
  if (!("triggers" in out)) out["triggers"] = emitTriggers(definition.triggers);
  if (!("actions" in out)) out["actions"] = emitActionMap(definition.actions);
  return out;
}

function emitTriggers(triggers: Map<string, Trigger>): JsonObject {
  const out: JsonObject = {};
  for (const [name, trigger] of triggers) {
    out[name] = emitTrigger(trigger);
  }
  return out;
}

function emitTrigger(trigger: Trigger): JsonObject {
  const out: JsonObject = {};
  for (const key of trigger.originalKeyOrder) {
    if (key === "type") {
      out["type"] = trigger.type;
    } else if (key in trigger.rawWithoutType) {
      out[key] = cloneJson(trigger.rawWithoutType[key]);
    }
  }
  for (const [k, v] of Object.entries(trigger.rawWithoutType)) {
    if (!(k in out)) out[k] = cloneJson(v);
  }
  if (!("type" in out)) out["type"] = trigger.type;
  return out;
}

function emitActionMap(actions: Map<string, Action>): JsonObject {
  const out: JsonObject = {};
  for (const [name, action] of actions) {
    out[name] = emitAction(action);
  }
  return out;
}

function emitAction(action: Action): JsonObject {
  const out: JsonObject = {};
  for (const key of action.originalKeyOrder) {
    switch (key) {
      case "type":
        out["type"] = action.type;
        break;
      case "runAfter":
        out["runAfter"] = emitRunAfter(action.runAfter);
        break;
      case "actions":
      case "else":
      case "cases":
      case "default":
        spliceStructural(key, action, out);
        break;
      default:
        if (key in action.rawWithoutStructural) {
          out[key] = cloneJson(action.rawWithoutStructural[key]);
        }
    }
  }
  // Any keys introduced after construction that weren't in the original order.
  for (const [k, v] of Object.entries(action.rawWithoutStructural)) {
    if (!(k in out)) out[k] = cloneJson(v);
  }
  if (!("type" in out)) out["type"] = action.type;
  // runAfter is only emitted when it was present in the original definition,
  // or when an edit has added at least one dependency. This matches
  // Power Automate, which omits runAfter on the first child of a container.
  const originalHadRunAfter = action.originalKeyOrder.includes("runAfter");
  if (!("runAfter" in out) && (originalHadRunAfter || Object.keys(action.runAfter).length > 0)) {
    out["runAfter"] = emitRunAfter(action.runAfter);
  }
  // Children groups introduced via edits but not in the original key order.
  for (const child of action.children) {
    const slotKey = childSlotKey(child);
    if (!(slotKey in out)) {
      spliceStructural(slotKey, action, out);
    }
  }
  return out;
}

function emitRunAfter(runAfter: Record<string, string[]>): JsonObject {
  const out: JsonObject = {};
  for (const [dep, statuses] of Object.entries(runAfter)) {
    out[dep] = [...statuses];
  }
  return out;
}

function spliceStructural(slotKey: string, action: Action, out: JsonObject): void {
  switch (slotKey) {
    case "actions": {
      const child = action.children.find((c) => c.kind.kind === "actions");
      if (child) out["actions"] = emitActionMap(child.actions);
      break;
    }
    case "else": {
      const child = action.children.find((c) => c.kind.kind === "else");
      if (child) out["else"] = emitSlot(child);
      break;
    }
    case "cases": {
      const caseChildren = action.children.filter((c) => c.kind.kind === "case");
      if (caseChildren.length > 0) {
        const casesObj: JsonObject = {};
        for (const child of caseChildren) {
          if (child.kind.kind !== "case") continue;
          casesObj[child.kind.caseName] = emitSlot(child);
        }
        out["cases"] = casesObj;
      }
      break;
    }
    case "default": {
      const child = action.children.find((c) => c.kind.kind === "default");
      if (child) out["default"] = emitSlot(child);
      break;
    }
  }
}

function emitSlot(child: ChildContainer): JsonObject {
  const slotKeyOrder = child.slotKeyOrder ?? ["actions"];
  const slotExtra = child.slotExtra ?? {};
  const out: JsonObject = {};
  for (const key of slotKeyOrder) {
    if (key === "actions") {
      out["actions"] = emitActionMap(child.actions);
    } else if (key in slotExtra) {
      out[key] = cloneJson(slotExtra[key]);
    }
  }
  for (const [k, v] of Object.entries(slotExtra)) {
    if (!(k in out)) out[k] = cloneJson(v);
  }
  if (!("actions" in out)) out["actions"] = emitActionMap(child.actions);
  return out;
}

function childSlotKey(child: ChildContainer): string {
  switch (child.kind.kind) {
    case "actions":
      return "actions";
    case "else":
      return "else";
    case "case":
      return "cases";
    case "default":
      return "default";
  }
}
