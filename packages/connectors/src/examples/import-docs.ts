/**
 * Markdown + JSON artifacts bundled inside each example zip so importers know
 * exactly what to configure (connections, env vars, SharePoint list, form id).
 */
import type { ExampleEnv } from "./env.js";

export interface ExampleRequiredInput {
  /** Stable machine id, e.g. `form_id`. */
  id: string;
  /** Short label. */
  label: string;
  /** What to do / where to find it. */
  description: string;
  /** Human-readable locations in the flow editor. */
  whereUsed: string[];
  /** Env var that bakes this in at zip generation (`bun run generate:examples`). */
  envVar?: string;
  /** Example value. */
  example?: string;
}

export interface ExampleImportBundle {
  /** Packaged as `IMPORT.md` at the root of the zip. */
  markdown: string;
  /** Packaged as `required-inputs.json` at the root of the zip. */
  requiredInputsJson: {
    exampleId: string;
    displayName: string;
    description: string;
    connectionsRequired: string[];
    resolvedAtBuildTime: ExampleEnv;
    inputs: ExampleRequiredInput[];
    importSteps: string[];
    provisioning: {
      sharePointListCli?: string;
      formsNote: string;
    };
  };
}

export function buildExampleImportBundle(
  spec: {
    id: string;
    displayName: string;
    description: string;
    connectionsRequired: string[];
    requiredInputs: ExampleRequiredInput[];
    importSteps: string[];
    provisioningSharePointListCli?: string;
    provisioningFormsNote: string;
  },
  env: ExampleEnv,
): ExampleImportBundle {
  const requiredInputsJson = {
    exampleId: spec.id,
    displayName: spec.displayName,
    description: spec.description,
    connectionsRequired: spec.connectionsRequired,
    resolvedAtBuildTime: env,
    inputs: spec.requiredInputs,
    importSteps: spec.importSteps,
    provisioning: {
      ...(spec.provisioningSharePointListCli
        ? { sharePointListCli: spec.provisioningSharePointListCli }
        : {}),
      formsNote: spec.provisioningFormsNote,
    },
  };

  const lines: string[] = [];
  lines.push(`# Import: ${spec.displayName}`);
  lines.push("");
  lines.push(spec.description);
  lines.push("");
  lines.push("## Connections (sign in during import)");
  for (const c of spec.connectionsRequired) {
    lines.push(`- \`${c}\``);
  }
  lines.push("");
  lines.push("## Values baked into this zip (from your environment)");
  lines.push("");
  lines.push(
    "If you ran `bun run generate:examples` **without** setting env vars, placeholders remain — edit the flow after import or re-run generation with the variables below.",
  );
  lines.push("");
  lines.push("| Variable | Current value in this package |");
  lines.push("|----------|--------------------------------|");
  lines.push(`| \`VIBEFLOW_FORM_ID\` | \`${env.formId}\` |`);
  lines.push(`| \`VIBEFLOW_SHAREPOINT_SITE_URL\` | \`${env.sharepointSiteUrl}\` |`);
  lines.push(`| \`VIBEFLOW_LIST_NAME\` | \`${env.listName}\` |`);
  lines.push(`| \`VIBEFLOW_NOTIFY_EMAIL\` | \`${env.notifyEmail}\` |`);
  lines.push(`| \`VIBEFLOW_APPROVER_EMAIL\` | \`${env.approverEmail}\` |`);
  lines.push("");
  lines.push("## Before you import");
  for (const step of spec.importSteps) {
    lines.push(`1. ${step}`);
  }
  lines.push("");
  lines.push("## Fields you must fix if still placeholder");
  for (const input of spec.requiredInputs) {
    lines.push(`### ${input.label} (\`${input.id}\`)`);
    lines.push(input.description);
    if (input.envVar) lines.push(`- **Set at generation time:** \`${input.envVar}\``);
    if (input.example) lines.push(`- **Example:** \`${input.example}\``);
    if (input.whereUsed.length) {
      lines.push("- **Where:**");
      for (const w of input.whereUsed) {
        lines.push(`  - ${w}`);
      }
    }
    lines.push("");
  }
  lines.push("## Automating data sources");
  lines.push("");
  lines.push("### SharePoint list");
  if (spec.provisioningSharePointListCli) {
    lines.push("Create the list with the repo script (see `docs/provisioning.md` for auth):");
    lines.push("");
    lines.push("```bash");
    lines.push(spec.provisioningSharePointListCli);
    lines.push("```");
    lines.push("");
  } else {
    lines.push("Create a list in SharePoint manually or use `bun tools/provision-sharepoint-list.ts` — see `docs/provisioning.md`.");
  }
  lines.push("");
  lines.push("### Microsoft Forms");
  lines.push(spec.provisioningFormsNote);
  lines.push("");
  lines.push("## Import in Power Automate");
  lines.push("");
  lines.push("1. Open [Power Automate](https://make.powerautomate.com) → **My flows**.");
  lines.push("2. **Import** → **Import package (Legacy)**.");
  lines.push("3. Upload this `.zip`, map each connection to your tenant account.");
  lines.push("4. Open the flow and resolve any remaining connector errors; save and test.");
  lines.push("");

  return {
    markdown: lines.join("\n"),
    requiredInputsJson,
  };
}
