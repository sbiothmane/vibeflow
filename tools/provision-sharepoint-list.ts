#!/usr/bin/env bun
/**
 * Create a SharePoint list via Microsoft Graph (genericList template).
 *
 * Auth (pick one):
 *   - `GRAPH_ACCESS_TOKEN` — bearer token for `https://graph.microsoft.com`
 *   - Azure CLI: `az login` then this script runs
 *     `az account get-access-token --resource https://graph.microsoft.com`
 *
 * Usage:
 *   bun tools/provision-sharepoint-list.ts \
 *     --site-url "https://contoso.sharepoint.com/sites/Procurement" \
 *     --list-name "Vibeflow Demo Requests"
 *
 * Required Graph permissions (delegated or application):
 *   - Sites.ReadWrite.All (or Sites.Manage.All) to create lists
 *
 * After the list exists, set:
 *   VIBEFLOW_SHAREPOINT_SITE_URL — same as --site-url
 *   VIBEFLOW_LIST_NAME — same as --list-name (display name)
 *   bun run generate:examples
 */
import { spawnSync } from "node:child_process";

interface Cli {
  siteUrl: string;
  listName: string;
}

function usage(): never {
  console.error(`Usage: bun tools/provision-sharepoint-list.ts --site-url "https://tenant.sharepoint.com/sites/SiteName" --list-name "My List"`);
  process.exit(1);
}

function parseCli(argv: string[]): Cli {
  let siteUrl = "";
  let listName = "";
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--site-url") siteUrl = argv[++i] ?? "";
    else if (a === "--list-name") listName = argv[++i] ?? "";
  }
  if (!siteUrl || !listName) usage();
  return { siteUrl, listName };
}

function getAccessToken(): string {
  const fromEnv = process.env.GRAPH_ACCESS_TOKEN?.trim();
  if (fromEnv) return fromEnv;

  const r = spawnSync(
    "az",
    ["account", "get-access-token", "--resource", "https://graph.microsoft.com", "--query", "accessToken", "-o", "tsv"],
    { encoding: "utf8" },
  );
  if (r.status !== 0) {
    throw new Error(
      "Could not get a Graph token. Set GRAPH_ACCESS_TOKEN or run `az login` and ensure the Azure CLI is installed.",
    );
  }
  const token = r.stdout.trim();
  if (!token) throw new Error("Azure CLI returned an empty access token.");
  return token;
}

function siteGraphPath(siteUrl: string): string {
  const u = new URL(siteUrl);
  const host = u.hostname;
  const pathname = u.pathname.replace(/\/$/, "");
  const path = pathname && pathname !== "/" ? pathname : "";
  // Microsoft Graph: /sites/{hostname}:/{relative-path}
  return `${host}:${path || "/"}`;
}

async function resolveSiteId(token: string, siteUrl: string): Promise<string> {
  const key = encodeURIComponent(siteGraphPath(siteUrl));
  const url = `https://graph.microsoft.com/v1.0/sites/${key}`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Resolve site failed (${res.status}): ${text}`);
  }
  const data = JSON.parse(text) as { id?: string };
  if (!data.id) throw new Error("Graph response missing site id.");
  return data.id;
}

async function createList(token: string, siteId: string, displayName: string): Promise<void> {
  const url = `https://graph.microsoft.com/v1.0/sites/${siteId}/lists`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      displayName,
      list: { template: "genericList" },
    }),
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Create list failed (${res.status}): ${text}`);
  }
}

async function main(): Promise<void> {
  const cli = parseCli(process.argv);
  const token = getAccessToken();
  console.error(`Resolving site: ${cli.siteUrl}`);
  const siteId = await resolveSiteId(token, cli.siteUrl);
  console.error(`Site id: ${siteId}`);
  console.error(`Creating list "${cli.listName}"...`);
  await createList(token, siteId, cli.listName);
  console.error("Done.");
  console.error("");
  console.error("Next:");
  console.error(`  export VIBEFLOW_SHAREPOINT_SITE_URL=${JSON.stringify(cli.siteUrl)}`);
  console.error(`  export VIBEFLOW_LIST_NAME=${JSON.stringify(cli.listName)}`);
  console.error("  bun run generate:examples");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
