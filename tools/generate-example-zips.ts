#!/usr/bin/env bun
/*
 * Build example Vibeflow flows and write Power Automate import zips.
 *
 * Usage:
 *   bun tools/generate-example-zips.ts [--out generated/zips] [--tree]
 *
 * For each example defined in @vibeflow/connectors/examples we:
 *   1. Build the flow via the FlowBuilder + connector shims.
 *   2. Validate against the connector catalog. Errors abort the run.
 *   3. Package the flow with manifest.json / apisMap / connectionsMap.
 *   4. Write a single .zip to the out directory (and optionally a tree copy).
 */
import { mkdir, rm } from "node:fs/promises";
import { join, resolve } from "node:path";

import {
  ConnectorCatalog,
  buildExportPackage,
  validateFlow,
  writeExportTree,
  writeExportZip,
} from "@vibeflow/core";
import {
  EXAMPLES,
  buildExampleImportBundle,
  readExampleEnv,
} from "@vibeflow/connectors/examples";

interface CliOptions {
  outDir: string;
  writeTree: boolean;
}

function parseArgs(argv: string[]): CliOptions {
  const opts: CliOptions = { outDir: "generated/zips", writeTree: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--out") opts.outDir = argv[++i] ?? opts.outDir;
    else if (a === "--tree") opts.writeTree = true;
  }
  return opts;
}

async function main(): Promise<void> {
  const opts = parseArgs(process.argv.slice(2));
  const repoRoot = resolve(import.meta.dir, "..");
  const outDir = resolve(repoRoot, opts.outDir);

  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });

  const catalog = await ConnectorCatalog.load();

  let ok = 0;
  let bad = 0;

  for (const example of EXAMPLES) {
    process.stdout.write(`• ${example.id} ... `);
    try {
      const flow = example.build();

      const validation = validateFlow(flow.toFlow(), { catalog });
      if (validation.errorCount > 0) {
        console.log("FAILED validation");
        for (const issue of validation.issues) {
          if (issue.severity !== "error") continue;
          console.log(`    [error] ${issue.rule}: ${issue.message}`);
        }
        bad += 1;
        continue;
      }
      if (validation.warningCount > 0) {
        for (const issue of validation.issues) {
          if (issue.severity !== "warning") continue;
          console.log(`\n    [warn]  ${issue.rule}: ${issue.message}`);
        }
        process.stdout.write("    ");
      }

      const built = buildExportPackage(flow.toFlow(), {
        displayName: example.displayName,
        description: example.description,
        connectionPlan: example.connectionPlan,
      });

      const env = readExampleEnv();
      const importBundle = buildExampleImportBundle(example, env);
      built.files.push({ path: "IMPORT.md", body: importBundle.markdown });
      built.files.push({ path: "required-inputs.json", json: importBundle.requiredInputsJson });

      const zipPath = join(outDir, `${example.id}.zip`);
      await writeExportZip(built, { outPath: zipPath });
      if (opts.writeTree) {
        await writeExportTree(built, join(outDir, example.id), 2);
      }
      console.log(`zip → ${zipPath}`);
      ok += 1;
    } catch (err) {
      console.log("ERROR");
      console.error(err);
      bad += 1;
    }
  }

  console.log("");
  console.log(`Done. ${ok} ok, ${bad} failed. Output: ${outDir}`);
  if (bad > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
