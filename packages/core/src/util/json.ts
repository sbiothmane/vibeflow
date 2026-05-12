export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonObject | JsonArray;
export interface JsonObject {
  [key: string]: JsonValue | undefined;
}
export type JsonArray = JsonValue[];

export function isJsonObject(value: unknown): value is JsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function isJsonArray(value: unknown): value is JsonArray {
  return Array.isArray(value);
}

/**
 * Deep-clone a JSON-compatible value. Faster and simpler than structuredClone
 * for plain JSON and avoids the risk of cloning Map/Set/Date that we never use.
 */
export function cloneJson<T extends JsonValue | undefined>(value: T): T {
  if (value === undefined || value === null) return value;
  if (typeof value !== "object") return value;
  if (Array.isArray(value)) {
    return value.map((entry) => cloneJson(entry)) as T;
  }
  const out: JsonObject = {};
  for (const [k, v] of Object.entries(value)) {
    out[k] = cloneJson(v as JsonValue | undefined);
  }
  return out as T;
}

/**
 * Deep structural equality for JSON values. Object key order does not matter.
 * Returns the first divergence path (dot-joined) when not equal.
 */
export function jsonDiffPath(
  a: JsonValue | undefined,
  b: JsonValue | undefined,
  path: string[] = [],
): string | null {
  if (a === b) return null;
  if (a === undefined || b === undefined) return path.join(".") || "<root>";
  if (a === null || b === null) return path.join(".") || "<root>";
  if (typeof a !== typeof b) return path.join(".") || "<root>";
  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) {
      return path.join(".") || "<root>";
    }
    for (let i = 0; i < a.length; i++) {
      const diff = jsonDiffPath(a[i] as JsonValue, b[i] as JsonValue, [...path, String(i)]);
      if (diff) return diff;
    }
    return null;
  }
  if (typeof a === "object") {
    const aObj = a as JsonObject;
    const bObj = b as JsonObject;
    const keys = new Set([...Object.keys(aObj), ...Object.keys(bObj)]);
    for (const key of keys) {
      const diff = jsonDiffPath(aObj[key], bObj[key], [...path, key]);
      if (diff) return diff;
    }
    return null;
  }
  return path.join(".") || "<root>";
}

export function deepEqual(a: JsonValue | undefined, b: JsonValue | undefined): boolean {
  return jsonDiffPath(a, b) === null;
}
