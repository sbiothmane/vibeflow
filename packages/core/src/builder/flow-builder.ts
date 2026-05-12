import type { ConnectorCatalog } from "../catalog/catalog.js";
import { emitFlow } from "../emit/emit.js";
import type {
  Action,
  ChildContainer,
  Definition,
  Flow,
  FlowWrapper,
  Trigger,
} from "../ir/types.js";
import type { ValidationResult } from "../validate/types.js";
import { validateFlow } from "../validate/validate.js";
import { cloneJson, type JsonObject, type JsonValue } from "../util/json.js";
import {
  ActionRef,
  TriggerRef,
  type ActionSpec,
  type RunAfterSpec,
  type TriggerSpec,
} from "./types.js";

const STRUCTURAL_KEYS = new Set(["type", "runAfter", "actions", "else", "cases", "default"]);

const DEFAULT_SCHEMA =
  "https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#";

const DEFAULT_DEFINITION_KEYS = [
  "$schema",
  "contentVersion",
  "parameters",
  "triggers",
  "actions",
];

export interface CreateFlowOptions {
  displayName?: string;
  flowId?: string;
  apiId?: string;
  connectionReferences?: JsonObject;
  parameters?: JsonObject;
  metadata?: JsonObject;
}

/** Internal helper interface for adding actions to a container. */
export interface ContainerBuilder {
  addAction(name: string, spec: ActionSpec, opts?: AddActionOptions): ActionRef;
  addScope(name: string, body: (scope: ContainerBuilder) => void, opts?: AddActionOptions): ActionRef;
  addForeach(
    name: string,
    foreach: string,
    body: (scope: ContainerBuilder) => void,
    opts?: AddActionOptions,
  ): ActionRef;
  addIf(
    name: string,
    expression: JsonObject,
    body: { then: (b: ContainerBuilder) => void; else?: (b: ContainerBuilder) => void },
    opts?: AddActionOptions,
  ): ActionRef;
  addSwitch(
    name: string,
    on: string,
    body: {
      cases: Record<string, { case: JsonValue; body: (b: ContainerBuilder) => void }>;
      default?: (b: ContainerBuilder) => void;
    },
    opts?: AddActionOptions,
  ): ActionRef;
  addUntil(
    name: string,
    expression: string,
    limit: { count?: number; timeout?: string },
    body: (scope: ContainerBuilder) => void,
    opts?: AddActionOptions,
  ): ActionRef;
}

export interface AddActionOptions {
  after?: RunAfterSpec;
  metadata?: JsonObject;
}

/**
 * Public entry point. Returns a FlowBuilder backed by a fresh Flow IR.
 */
export function createFlow(options: CreateFlowOptions = {}): FlowBuilder {
  const flowId =
    options.flowId ??
    `00000000-0000-0000-0000-${Math.floor(Math.random() * 1e12)
      .toString(16)
      .padStart(12, "0")}`;

  const definition: Definition = {
    topLevelKeyOrder: [...DEFAULT_DEFINITION_KEYS],
    schema: DEFAULT_SCHEMA,
    contentVersion: "1.0.0.0",
    parameters: options.parameters
      ? (cloneJson(options.parameters) as JsonObject)
      : ({
          $connections: {
            defaultValue: {},
            type: "Object",
          },
          $authentication: {
            defaultValue: {},
            type: "SecureObject",
          },
        } as JsonObject),
    triggers: new Map(),
    actions: new Map(),
    extra: {},
  };

  if (options.metadata) {
    definition.topLevelKeyOrder.splice(2, 0, "metadata");
    definition.metadata = cloneJson(options.metadata) as JsonObject;
  }

  const propertiesKeyOrder = ["apiId", "displayName", "definition", "connectionReferences"];

  const properties: JsonObject = {};
  if (options.apiId) properties["apiId"] = options.apiId;
  if (options.displayName) properties["displayName"] = options.displayName;
  if (options.connectionReferences) {
    properties["connectionReferences"] = cloneJson(options.connectionReferences) as JsonObject;
  } else {
    properties["connectionReferences"] = {};
  }

  const wrapper: FlowWrapper = {
    wrapperKeyOrder: ["properties"],
    propertiesKeyOrder,
    outer: {},
    properties,
    definition,
  };

  return new FlowBuilder({ flowId, wrapper });
}

export class FlowBuilder implements ContainerBuilder {
  private readonly rootContainer: InternalContainerBuilder;

  constructor(public readonly flow: Flow) {
    this.rootContainer = new InternalContainerBuilder(flow.wrapper.definition.actions);
  }

  setTrigger(name: string, spec: TriggerSpec): TriggerRef {
    const definition = this.flow.wrapper.definition;
    const { originalKeyOrder, rawWithoutType } = splitTriggerSpec(spec);
    const trigger: Trigger = {
      name,
      type: spec.type,
      rawWithoutType,
      originalKeyOrder,
    };
    definition.triggers.clear();
    definition.triggers.set(name, trigger);
    return new TriggerRef(name);
  }

  setConnectionReferences(refs: JsonObject): void {
    this.flow.wrapper.properties["connectionReferences"] = cloneJson(refs) as JsonObject;
  }

  /**
   * Ensure a connection reference entry exists. Idempotent: if a reference
   * with the given key already exists it is left alone unless `replace` is
   * passed.
   */
  ensureConnectionReference(
    key: string,
    reference: JsonObject,
    options: { replace?: boolean } = {},
  ): void {
    const existing = this.flow.wrapper.properties["connectionReferences"];
    const refs: JsonObject =
      existing && typeof existing === "object" && !Array.isArray(existing)
        ? (existing as JsonObject)
        : {};
    if (!refs[key] || options.replace) {
      refs[key] = cloneJson(reference) as JsonObject;
    }
    this.flow.wrapper.properties["connectionReferences"] = refs;
  }

  addAction(name: string, spec: ActionSpec, opts?: AddActionOptions): ActionRef {
    return this.rootContainer.addAction(name, spec, opts);
  }

  addScope(
    name: string,
    body: (scope: ContainerBuilder) => void,
    opts?: AddActionOptions,
  ): ActionRef {
    return this.rootContainer.addScope(name, body, opts);
  }

  addForeach(
    name: string,
    foreach: string,
    body: (scope: ContainerBuilder) => void,
    opts?: AddActionOptions,
  ): ActionRef {
    return this.rootContainer.addForeach(name, foreach, body, opts);
  }

  addIf(
    name: string,
    expression: JsonObject,
    body: { then: (b: ContainerBuilder) => void; else?: (b: ContainerBuilder) => void },
    opts?: AddActionOptions,
  ): ActionRef {
    return this.rootContainer.addIf(name, expression, body, opts);
  }

  addSwitch(
    name: string,
    on: string,
    body: {
      cases: Record<string, { case: JsonValue; body: (b: ContainerBuilder) => void }>;
      default?: (b: ContainerBuilder) => void;
    },
    opts?: AddActionOptions,
  ): ActionRef {
    return this.rootContainer.addSwitch(name, on, body, opts);
  }

  addUntil(
    name: string,
    expression: string,
    limit: { count?: number; timeout?: string },
    body: (scope: ContainerBuilder) => void,
    opts?: AddActionOptions,
  ): ActionRef {
    return this.rootContainer.addUntil(name, expression, limit, body, opts);
  }

  /** Validate the in-progress flow. */
  validate(catalog?: ConnectorCatalog): ValidationResult {
    return validateFlow(this.flow, catalog ? { catalog } : {});
  }

  /** Snapshot the underlying Flow IR. */
  toFlow(): Flow {
    return this.flow;
  }

  /** Emit a Power Automate wrapper JSON object. */
  toJson(): JsonObject {
    return emitFlow(this.flow);
  }
}

class InternalContainerBuilder implements ContainerBuilder {
  constructor(private readonly actions: Map<string, Action>) {}

  addAction(name: string, spec: ActionSpec, opts?: AddActionOptions): ActionRef {
    requireUniqueName(this.actions, name);
    const action = buildActionFromSpec(name, spec, opts, []);
    this.actions.set(name, action);
    return new ActionRef(name);
  }

  addScope(
    name: string,
    body: (scope: ContainerBuilder) => void,
    opts?: AddActionOptions,
  ): ActionRef {
    requireUniqueName(this.actions, name);
    const childContainer: ChildContainer = {
      kind: { kind: "actions" },
      actions: new Map(),
    };
    body(new InternalContainerBuilder(childContainer.actions));
    const action = buildActionFromSpec(name, { type: "Scope" }, opts, [childContainer]);
    this.actions.set(name, action);
    return new ActionRef(name);
  }

  addForeach(
    name: string,
    foreach: string,
    body: (scope: ContainerBuilder) => void,
    opts?: AddActionOptions,
  ): ActionRef {
    requireUniqueName(this.actions, name);
    const childContainer: ChildContainer = {
      kind: { kind: "actions" },
      actions: new Map(),
    };
    body(new InternalContainerBuilder(childContainer.actions));
    const action = buildActionFromSpec(
      name,
      { type: "Foreach", foreach } as ActionSpec,
      opts,
      [childContainer],
    );
    this.actions.set(name, action);
    return new ActionRef(name);
  }

  addIf(
    name: string,
    expression: JsonObject,
    body: { then: (b: ContainerBuilder) => void; else?: (b: ContainerBuilder) => void },
    opts?: AddActionOptions,
  ): ActionRef {
    requireUniqueName(this.actions, name);
    const thenContainer: ChildContainer = {
      kind: { kind: "actions" },
      actions: new Map(),
    };
    body.then(new InternalContainerBuilder(thenContainer.actions));
    const containers: ChildContainer[] = [thenContainer];
    if (body.else) {
      const elseContainer: ChildContainer = {
        kind: { kind: "else" },
        actions: new Map(),
        slotKeyOrder: ["actions"],
        slotExtra: {},
      };
      body.else(new InternalContainerBuilder(elseContainer.actions));
      containers.push(elseContainer);
    }
    const action = buildActionFromSpec(
      name,
      { type: "If", expression: expression as JsonValue } as unknown as ActionSpec,
      opts,
      containers,
    );
    this.actions.set(name, action);
    return new ActionRef(name);
  }

  addSwitch(
    name: string,
    on: string,
    body: {
      cases: Record<string, { case: JsonValue; body: (b: ContainerBuilder) => void }>;
      default?: (b: ContainerBuilder) => void;
    },
    opts?: AddActionOptions,
  ): ActionRef {
    requireUniqueName(this.actions, name);
    const containers: ChildContainer[] = [];
    for (const [caseName, entry] of Object.entries(body.cases)) {
      const container: ChildContainer = {
        kind: { kind: "case", caseName },
        actions: new Map(),
        slotKeyOrder: ["case", "actions"],
        slotExtra: { case: entry.case },
      };
      entry.body(new InternalContainerBuilder(container.actions));
      containers.push(container);
    }
    if (body.default) {
      const defaultContainer: ChildContainer = {
        kind: { kind: "default" },
        actions: new Map(),
        slotKeyOrder: ["actions"],
        slotExtra: {},
      };
      body.default(new InternalContainerBuilder(defaultContainer.actions));
      containers.push(defaultContainer);
    }
    const action = buildActionFromSpec(
      name,
      { type: "Switch", expression: on } as ActionSpec,
      opts,
      containers,
    );
    this.actions.set(name, action);
    return new ActionRef(name);
  }

  addUntil(
    name: string,
    expression: string,
    limit: { count?: number; timeout?: string },
    body: (scope: ContainerBuilder) => void,
    opts?: AddActionOptions,
  ): ActionRef {
    requireUniqueName(this.actions, name);
    const childContainer: ChildContainer = {
      kind: { kind: "actions" },
      actions: new Map(),
    };
    body(new InternalContainerBuilder(childContainer.actions));
    const limitJson: JsonObject = {};
    if (limit.count !== undefined) limitJson["count"] = limit.count;
    if (limit.timeout !== undefined) limitJson["timeout"] = limit.timeout;
    const action = buildActionFromSpec(
      name,
      { type: "Until", expression, limit: limitJson } as ActionSpec,
      opts,
      [childContainer],
    );
    this.actions.set(name, action);
    return new ActionRef(name);
  }
}

function requireUniqueName(actions: Map<string, Action>, name: string): void {
  if (!name) throw new Error("FlowBuilder: action name must be a non-empty string");
  if (actions.has(name)) {
    throw new Error(`FlowBuilder: action name "${name}" already exists in this container`);
  }
}

function buildActionFromSpec(
  name: string,
  spec: ActionSpec,
  opts: AddActionOptions | undefined,
  children: ChildContainer[],
): Action {
  const runAfter = normalizeRunAfter(opts?.after ?? {});
  const rawWithoutStructural: JsonObject = {};
  const specKeyOrder = Object.keys(spec);
  for (const key of specKeyOrder) {
    if (STRUCTURAL_KEYS.has(key)) continue;
    rawWithoutStructural[key] = cloneJson(spec[key] as JsonValue) as JsonValue;
  }
  if (opts?.metadata) {
    rawWithoutStructural["metadata"] = cloneJson(opts.metadata) as JsonObject;
  }

  const originalKeyOrder = buildOriginalKeyOrder(specKeyOrder, runAfter, children, opts?.metadata);

  return {
    name,
    type: spec.type,
    runAfter,
    rawWithoutStructural,
    children,
    originalKeyOrder,
  };
}

function buildOriginalKeyOrder(
  specKeyOrder: string[],
  runAfter: Record<string, string[]>,
  children: ChildContainer[],
  extraMetadata: JsonObject | undefined,
): string[] {
  const order: string[] = [];
  const seen = new Set<string>();
  const push = (key: string): void => {
    if (!seen.has(key)) {
      order.push(key);
      seen.add(key);
    }
  };

  if (Object.keys(runAfter).length > 0) push("runAfter");

  for (const key of specKeyOrder) {
    if (key === "type" || key === "runAfter") {
      push(key);
      continue;
    }
    if (STRUCTURAL_KEYS.has(key)) continue;
    push(key);
  }

  if (extraMetadata && !seen.has("metadata")) push("metadata");
  if (!seen.has("type")) push("type");

  // Structural child slots in the standard order.
  for (const child of children) {
    switch (child.kind.kind) {
      case "actions":
        push("actions");
        break;
      case "else":
        push("else");
        break;
      case "case":
        push("cases");
        break;
      case "default":
        push("default");
        break;
    }
  }
  return order;
}

function normalizeRunAfter(spec: RunAfterSpec): Record<string, string[]> {
  if (Array.isArray(spec)) {
    const result: Record<string, string[]> = {};
    for (const entry of spec) {
      const name = typeof entry === "string" ? entry : entry.name;
      if (!name) continue;
      result[name] = ["Succeeded"];
    }
    return result;
  }
  const result: Record<string, string[]> = {};
  for (const [k, v] of Object.entries(spec)) {
    result[k] = Array.isArray(v) ? [...v] : ["Succeeded"];
  }
  return result;
}

function splitTriggerSpec(spec: TriggerSpec): {
  originalKeyOrder: string[];
  rawWithoutType: JsonObject;
} {
  const originalKeyOrder = Object.keys(spec);
  const rawWithoutType: JsonObject = {};
  for (const key of originalKeyOrder) {
    if (key === "type") continue;
    rawWithoutType[key] = cloneJson(spec[key] as JsonValue) as JsonValue;
  }
  return { originalKeyOrder, rawWithoutType };
}
