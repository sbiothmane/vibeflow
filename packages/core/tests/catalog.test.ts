import { describe, expect, test } from "bun:test";
import { resolve } from "node:path";

import { ConnectorCatalog } from "../src/index.js";

const CATALOG_DIR = resolve(import.meta.dir, "../../../generated/connectors");

describe("ConnectorCatalog", () => {
  test("loads connectors and operations", async () => {
    const catalog = await ConnectorCatalog.load({ catalogDir: CATALOG_DIR });
    expect(catalog.connectorCount).toBeGreaterThan(40);
    expect(catalog.operationCount).toBeGreaterThan(1000);
  });

  test("resolves connectors by short id and by apiId", async () => {
    const catalog = await ConnectorCatalog.load({ catalogDir: CATALOG_DIR });

    const byShort = catalog.getConnector("shared_office365");
    expect(byShort?.displayName).toBe("Office 365 Outlook");

    const byApi = catalog.getConnectorByApiId(
      "/providers/Microsoft.PowerApps/apis/shared_office365",
    );
    expect(byApi?.connectorId).toBe("shared_office365");
  });

  test("resolves a known operation", async () => {
    const catalog = await ConnectorCatalog.load({ catalogDir: CATALOG_DIR });

    const op = catalog.getOperation("shared_microsoftforms", "GetFormResponseById");
    expect(op?.displayName).toBe("Get response details");
    expect(op?.kind).toBe("action");
    expect(op?.parameters.find((p) => p.key === "form_id")?.required).toBe(true);
    expect(op?.parameters.find((p) => p.key === "response_id")?.required).toBe(true);
  });

  test("knows built-in workflow types", async () => {
    const catalog = await ConnectorCatalog.load({ catalogDir: CATALOG_DIR });

    expect(catalog.isBuiltin("If")).toBe(true);
    expect(catalog.isBuiltin("OpenApiConnection")).toBe(true);
    expect(catalog.isBuiltin("ThisTypeDoesNotExist")).toBe(false);
    expect(catalog.getBuiltin("Switch")?.displayName).toBe("Switch");
  });
});
