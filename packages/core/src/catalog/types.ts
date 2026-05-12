export type OperationKind = "action" | "trigger";

export interface OperationParameter {
  /** Display name from Microsoft Learn ("Form Id"). */
  name: string;
  /**
   * Stable connector parameter key as it appears under
   * `inputs.parameters.<key>` in a flow definition. May contain `/` for nested
   * keys (e.g. `emailMessage/To`).
   */
  key: string;
  required: boolean;
  /** Raw type string from the docs ("string", "array of string", "integer", ...). */
  type: string;
  description: string;
}

export interface Operation {
  operationId: string;
  kind: OperationKind;
  displayName: string;
  deprecated: boolean;
  description: string;
  parameters: OperationParameter[];
  /** Raw returns text from the docs, when available. */
  returnsRaw: string;
}

export interface Connector {
  /** "shared_office365", "shared_sharepointonline", ... */
  connectorId: string;
  displayName: string;
  sourceUrl?: string;
  sourceUpdatedAt?: string;
  /** Connector's full apiId as it appears in `inputs.host.apiId`. */
  apiId: string;
  operations: Map<string, Operation>;
}

export type BuiltinKind = "action" | "control" | "trigger" | "connector-wrapper";

export interface BuiltinAction {
  /** "If", "Switch", "Foreach", "Compose", "OpenApiConnection", ... */
  type: string;
  kind: BuiltinKind;
  displayName: string;
  description: string;
}
