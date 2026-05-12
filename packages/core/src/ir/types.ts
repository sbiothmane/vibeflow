import type { JsonObject, JsonValue } from "../util/json.js";

/**
 * A child-action container. Power Automate actions can nest other actions in
 * several semantically distinct slots:
 *   - `actions`                : Scope/Foreach/Until body, If "then" branch
 *   - `else.actions`           : If "else" branch
 *   - `cases.<caseName>.actions`: Switch case body
 *   - `default.actions`        : Switch default body
 */
export type ChildContainerKind =
  | { kind: "actions" }
  | { kind: "else" }
  | { kind: "case"; caseName: string }
  | { kind: "default" };

export interface ChildContainer {
  kind: ChildContainerKind;
  /** Insertion-ordered map of action name to node. */
  actions: Map<string, Action>;
  /**
   * Keys other than `actions` found in the wrapping slot object. For
   * `case` children this captures the `case` match value; for `else`/`default`
   * this is normally empty but reserved for forward compatibility. Not used
   * for top-level `actions` children.
   */
  slotExtra?: JsonObject;
  /** Original key order of the slot object (e.g. ["case", "actions"]). */
  slotKeyOrder?: string[];
}

export interface Action {
  /** Action name (the key in its parent container). */
  name: string;
  /** Action type from definition.json (e.g. "OpenApiConnection", "If", "Foreach"). */
  type: string;
  /** Parsed runAfter dependencies. Keys are action names, values are status arrays. */
  runAfter: Record<string, string[]>;
  /**
   * Raw action body MINUS the structural fields the IR owns (`type`,
   * `runAfter`, `actions`, `else`, `cases`, `default`). On emit we splice
   * structural fields back in and produce a complete action object. Held in
   * the original key order for deterministic output.
   */
  rawWithoutStructural: JsonObject;
  /** Ordered child containers, present only for control-flow types. */
  children: ChildContainer[];
  /** Original key order of the action body. Drives deterministic emit. */
  originalKeyOrder: string[];
}

export interface Trigger {
  name: string;
  type: string;
  /** Triggers do not host nested actions; the body is preserved verbatim minus `type`. */
  rawWithoutType: JsonObject;
  originalKeyOrder: string[];
}

export interface Definition {
  /** Top-level keys from `properties.definition` preserved in original order. */
  topLevelKeyOrder: string[];
  schema?: string;
  contentVersion?: string;
  metadata?: JsonObject;
  parameters?: JsonObject;
  /** Insertion-ordered triggers. */
  triggers: Map<string, Trigger>;
  /** Insertion-ordered top-level actions. */
  actions: Map<string, Action>;
  /** Any extra unknown top-level fields we have not modeled yet. */
  extra: JsonObject;
}

export interface FlowWrapper {
  /** Top-level wrapper keys in original order. */
  wrapperKeyOrder: string[];
  /** `properties.*` keys in original order. */
  propertiesKeyOrder: string[];
  /** Verbatim outer fields (id, name, type). */
  outer: JsonObject;
  /**
   * Wrapper `properties.*` fields excluding `definition`, preserved as-is
   * (apiId, displayName, connectionReferences, flowFailureAlertSubscribed,
   * isManaged, and any unknown future fields).
   */
  properties: JsonObject;
  definition: Definition;
}

export interface Flow {
  /** Stable flow identifier (the directory name under Microsoft.Flow/flows/). */
  flowId: string;
  wrapper: FlowWrapper;
}

/** Helper: looks up an action by name, searching only top-level entries. */
export function getTopLevelAction(definition: Definition, name: string): Action | undefined {
  return definition.actions.get(name);
}

/** Recursive walk over every action in the definition. */
export function* walkActions(definition: Definition): Generator<{
  action: Action;
  parent: Action | null;
  container: ChildContainer | null;
  depth: number;
  path: string[];
}> {
  function* walk(
    container: Map<string, Action>,
    parent: Action | null,
    containerRef: ChildContainer | null,
    depth: number,
    pathPrefix: string[],
  ): Generator<{
    action: Action;
    parent: Action | null;
    container: ChildContainer | null;
    depth: number;
    path: string[];
  }> {
    for (const action of container.values()) {
      const path = [...pathPrefix, action.name];
      yield { action, parent, container: containerRef, depth, path };
      for (const child of action.children) {
        yield* walk(child.actions, action, child, depth + 1, [...path, childLabel(child.kind)]);
      }
    }
  }
  yield* walk(definition.actions, null, null, 0, []);
}

export function childLabel(kind: ChildContainerKind): string {
  switch (kind.kind) {
    case "actions":
      return "actions";
    case "else":
      return "else.actions";
    case "case":
      return `cases.${kind.caseName}.actions`;
    case "default":
      return "default.actions";
  }
}
