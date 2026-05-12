import type { ActionSpec, ExpressionOrValue, TriggerSpec } from "@vibeflow/core";

/** Common shape returned by generated factory functions. */
export type { ActionSpec, ExpressionOrValue, TriggerSpec };

export interface ConnectorCallOptions {
  /** Override `inputs.host.connectionName`. Defaults to the connector id. */
  connectionName?: string;
  /** Additional fields merged into the action body, e.g. `metadata`. */
  extra?: Record<string, unknown>;
  /** Override `inputs.authentication`. Defaults to `@parameters('$authentication')`. */
  authentication?: string;
}

interface BuildOpts {
  kind: "action" | "trigger";
  apiId: string;
  defaultConnectionName: string;
  operationId: string;
  parameters: Record<string, ExpressionOrValue>;
  options?: ConnectorCallOptions;
}

const DEFAULT_AUTHENTICATION = "@parameters('$authentication')";

export function buildConnectorCall(opts: BuildOpts): ActionSpec | TriggerSpec {
  const cleanedParams = stripUndefined(opts.parameters);
  const body: Record<string, unknown> = {
    type: opts.kind === "trigger" ? "OpenApiConnectionWebhook" : "OpenApiConnection",
    inputs: {
      parameters: cleanedParams,
      host: {
        apiId: opts.apiId,
        connectionName: opts.options?.connectionName ?? opts.defaultConnectionName,
        operationId: opts.operationId,
      },
      authentication: opts.options?.authentication ?? DEFAULT_AUTHENTICATION,
    },
  };
  if (opts.options?.extra) {
    for (const [key, value] of Object.entries(opts.options.extra)) {
      if (key === "type" || key === "inputs" || key === "runAfter") continue;
      body[key] = value;
    }
  }
  return body as ActionSpec;
}

function stripUndefined(value: Record<string, ExpressionOrValue>): Record<string, ExpressionOrValue> {
  const out: Record<string, ExpressionOrValue> = {};
  for (const [k, v] of Object.entries(value)) {
    if (v === undefined) continue;
    out[k] = v;
  }
  return out;
}
