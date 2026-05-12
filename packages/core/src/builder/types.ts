import type { JsonObject, JsonValue } from "../util/json.js";

/**
 * The body of an action minus structural fields (runAfter / child containers).
 * `type` is mandatory; everything else (inputs, expression, foreach, metadata, ...)
 * is whatever the action type demands.
 */
export interface ActionSpec extends JsonObject {
  type: string;
}

/** Body of a trigger. Same shape as an action minus runAfter/children. */
export interface TriggerSpec extends JsonObject {
  type: string;
}

/** Either a literal value (string/number/boolean/object) or a Power Automate expression. */
export type ExpressionOrValue<T extends JsonValue = JsonValue> = T | string;

/** Run-after spec accepted by the builder. */
export type RunAfterSpec =
  | Record<string, string[]>
  | Array<string | ActionRef>;

export interface ActionRefLike {
  readonly name: string;
}

/**
 * Lightweight reference to an action by name. Provides helpers for building
 * expressions that point at this action's outputs/body.
 */
export class ActionRef implements ActionRefLike {
  constructor(public readonly name: string) {}

  /**
   * Expression referencing this action's outputs. Pass `path` to drill into a
   * dotted body path, e.g. `output("body/value")`.
   */
  output(path?: string): string {
    return path ? `@outputs('${this.name}')?['${path}']` : `@outputs('${this.name}')`;
  }

  /** Expression referencing this action's body (shorthand for outputs.body). */
  body(path?: string): string {
    return path ? `@body('${this.name}')?['${path}']` : `@body('${this.name}')`;
  }

  /** Expression that resolves to this action's result envelope (for runAfter result()). */
  result(): string {
    return `@result('${this.name}')`;
  }

  toString(): string {
    return this.name;
  }
}

/** Reference to a trigger. */
export class TriggerRef {
  constructor(public readonly name: string) {}

  outputs(path?: string): string {
    return path ? `@triggerOutputs()?['${path}']` : `@triggerOutputs()`;
  }

  body(path?: string): string {
    return path ? `@triggerBody()?['${path}']` : `@triggerBody()`;
  }
}
