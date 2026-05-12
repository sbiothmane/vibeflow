from __future__ import annotations

import argparse
import json
import re
import urllib.request
from collections import Counter, defaultdict
from dataclasses import dataclass
from pathlib import Path
from typing import Any


CONNECTORS = {
    # Microsoft 365 and Office
    "shared_excelonline": {
        "doc_slug": "excelonline",
        "display_name": "Excel Online (OneDrive)",
    },
    "shared_excelonlinebusiness": {
        "doc_slug": "excelonlinebusiness",
        "display_name": "Excel Online (Business)",
    },
    "shared_office365groups": {
        "doc_slug": "office365groups",
        "display_name": "Office 365 Groups",
    },
    "shared_office365users": {
        "doc_slug": "office365users",
        "display_name": "Office 365 Users",
    },
    "shared_approvals": {
        "doc_slug": "approvals",
        "display_name": "Standard approvals",
    },
    "shared_microsoftforms": {
        "doc_slug": "microsoftforms",
        "display_name": "Microsoft Forms",
    },
    "shared_office365": {
        "doc_slug": "office365",
        "display_name": "Office 365 Outlook",
    },
    "shared_onedrive": {
        "doc_slug": "onedrive",
        "display_name": "OneDrive",
    },
    "shared_onedriveforbusiness": {
        "doc_slug": "onedriveforbusiness",
        "display_name": "OneDrive for Business",
    },
    "shared_onenote": {
        "doc_slug": "onenote",
        "display_name": "OneNote (Business)",
    },
    "shared_outlook": {
        "doc_slug": "outlook",
        "display_name": "Outlook.com",
    },
    "shared_planner": {
        "doc_slug": "planner",
        "display_name": "Planner",
    },
    "shared_sharepointonline": {
        "doc_slug": "sharepointonline",
        "display_name": "SharePoint",
    },
    "shared_teams": {
        "doc_slug": "teams",
        "display_name": "Microsoft Teams",
    },
    "shared_todo": {
        "doc_slug": "todo",
        "display_name": "Microsoft To-Do (Business)",
    },
    "shared_wordonlinebusiness": {
        "doc_slug": "wordonlinebusiness",
        "display_name": "Word Online (Business)",
    },
    # Power Platform and Power Automate
    "shared_commondataserviceforapps": {
        "doc_slug": "commondataserviceforapps",
        "display_name": "Microsoft Dataverse",
    },
    "shared_dataflows": {
        "doc_slug": "dataflows",
        "display_name": "Power Query Dataflows",
    },
    "shared_flowmanagement": {
        "doc_slug": "flowmanagement",
        "display_name": "Power Automate Management",
    },
    "shared_m365updatesapp": {
        "doc_slug": "m365updatesapp",
        "display_name": "Updates App (Microsoft 365)",
    },
    "shared_microsoftflowforadmins": {
        "doc_slug": "microsoftflowforadmins",
        "display_name": "Power Automate for Admins",
    },
    "shared_powerappsforadmins": {
        "doc_slug": "powerappsforadmins",
        "display_name": "Power Apps for Admins",
    },
    "shared_powerappsforappmakers": {
        "doc_slug": "powerappsforappmakers",
        "display_name": "Power Apps for Makers",
    },
    "shared_powerappsnotification": {
        "doc_slug": "powerappsnotification",
        "display_name": "Power Apps Notification",
    },
    "shared_powerappsnotificationv2": {
        "doc_slug": "powerappsnotificationv2",
        "display_name": "Power Apps Notification V2",
    },
    "shared_powerbi": {
        "doc_slug": "powerbi",
        "display_name": "Power BI",
    },
    "shared_powerplatformadminv2": {
        "doc_slug": "powerplatformadminv2",
        "display_name": "Power Platform for Admins V2",
    },
    "shared_powerplatformforadmins": {
        "doc_slug": "powerplatformforadmins",
        "display_name": "Power Platform for Admins",
    },
    "shared_processmining": {
        "doc_slug": "processmining",
        "display_name": "Process Mining",
    },
    # Built-in-ish utility and workflow staples
    "shared_flowpush": {
        "doc_slug": "flowpush",
        "display_name": "Notifications",
    },
    "shared_rss": {
        "doc_slug": "rss",
        "display_name": "RSS",
    },
    "shared_webcontents": {
        "doc_slug": "webcontents",
        "display_name": "HTTP with Microsoft Entra ID (preauthorized)",
    },
    # Microsoft data, storage, and integration connectors commonly used from flows
    "shared_arm": {
        "doc_slug": "arm",
        "display_name": "Azure Resource Manager",
    },
    "shared_azureautomation": {
        "doc_slug": "azureautomation",
        "display_name": "Azure Automation",
    },
    "shared_azureblob": {
        "doc_slug": "azureblob",
        "display_name": "Azure Blob Storage",
    },
    "shared_azureeventgrid": {
        "doc_slug": "azureeventgrid",
        "display_name": "Azure Event Grid",
    },
    "shared_azureeventgridpublish": {
        "doc_slug": "azureeventgridpublish",
        "display_name": "Azure Event Grid Publish",
    },
    "shared_azurefile": {
        "doc_slug": "azurefile",
        "display_name": "Azure File Storage",
    },
    "shared_azureloganalyticsdatacollector": {
        "doc_slug": "azureloganalyticsdatacollector",
        "display_name": "Azure Log Analytics Data Collector",
    },
    "shared_azuremonitorlogs": {
        "doc_slug": "azuremonitorlogs",
        "display_name": "Azure Monitor Logs",
    },
    "shared_azureopenai": {
        "doc_slug": "azureopenai",
        "display_name": "Azure OpenAI",
    },
    "shared_azurequeues": {
        "doc_slug": "azurequeues",
        "display_name": "Azure Queues",
    },
    "shared_azuretables": {
        "doc_slug": "azuretables",
        "display_name": "Azure Table Storage",
    },
    "shared_bingmaps": {
        "doc_slug": "bingmaps",
        "display_name": "Bing Maps",
    },
    "shared_bingsearch": {
        "doc_slug": "bingsearch",
        "display_name": "Bing Search",
    },
    "shared_cognitiveservicestextanalytics": {
        "doc_slug": "cognitiveservicestextanalytics",
        "display_name": "Azure Cognitive Service for Language",
    },
    "shared_documentdb": {
        "doc_slug": "documentdb",
        "display_name": "Azure Cosmos DB",
    },
    "shared_filesystem": {
        "doc_slug": "filesystem",
        "display_name": "File System",
    },
    "shared_formrecognizer": {
        "doc_slug": "formrecognizer",
        "display_name": "Azure AI Document Intelligence (form recognizer)",
    },
    "shared_keyvault": {
        "doc_slug": "keyvault",
        "display_name": "Azure Key Vault",
    },
    "shared_sendgrid": {
        "doc_slug": "sendgrid",
        "display_name": "SendGrid",
    },
    "shared_servicebus": {
        "doc_slug": "servicebus",
        "display_name": "Service Bus",
    },
    "shared_sftpwithssh": {
        "doc_slug": "sftpwithssh",
        "display_name": "SFTP - SSH",
    },
    "shared_smtp": {
        "doc_slug": "smtp",
        "display_name": "SMTP",
    },
    "shared_sql": {
        "doc_slug": "sql",
        "display_name": "SQL Server",
    },
    "shared_visualstudioteamservices": {
        "doc_slug": "visualstudioteamservices",
        "display_name": "Azure DevOps",
    },
}


DOC_URL = "https://learn.microsoft.com/en-us/connectors/{slug}/?accept=text/markdown"
API_ID_PREFIX = "/providers/Microsoft.PowerApps/apis/"


@dataclass
class OperationSection:
    kind: str
    display_name: str
    lines: list[str]


def main() -> int:
    parser = argparse.ArgumentParser(description="Collect Power Automate connector definitions from Microsoft Learn.")
    parser.add_argument("--examples", default="examples", help="Directory containing exported flow examples.")
    parser.add_argument("--out", default="generated/connectors", help="Output directory.")
    parser.add_argument("--no-fetch", action="store_true", help="Reuse existing raw markdown files.")
    args = parser.parse_args()

    root = Path.cwd()
    examples_dir = root / args.examples
    out_dir = root / args.out
    raw_dir = out_dir / "raw"
    normalized_dir = out_dir / "normalized"
    raw_dir.mkdir(parents=True, exist_ok=True)
    normalized_dir.mkdir(parents=True, exist_ok=True)

    inventory = collect_example_inventory(examples_dir)
    write_json(out_dir / "operation-inventory.json", inventory)

    catalog: dict[str, Any] = {
        "source": "microsoft-learn-connectors-markdown",
        "rawDir": str(raw_dir.relative_to(root)),
        "connectors": {},
    }

    for connector_id, config in CONNECTORS.items():
        slug = config["doc_slug"]
        raw_path = raw_dir / f"{connector_id}.md"
        source_url = DOC_URL.format(slug=slug)
        if not args.no_fetch:
            raw_path.write_text(fetch_text(source_url), encoding="utf-8")

        markdown = raw_path.read_text(encoding="utf-8")
        parsed = parse_connector_markdown(markdown, connector_id, config["display_name"], source_url)
        used_ops = inventory["connectors"].get(connector_id, {}).get("operations", {})
        for operation_id, usage in used_ops.items():
            if operation_id in parsed["operations"]:
                parsed["operations"][operation_id]["usedInExamples"] = usage["count"]
                parsed["operations"][operation_id]["observedParametersInExamples"] = usage["observedParameters"]
            else:
                parsed["missingUsedOperations"][operation_id] = usage["count"]
        write_json(normalized_dir / f"{connector_id}.json", parsed)
        catalog["connectors"][connector_id] = {
            "displayName": parsed["displayName"],
            "docSlug": slug,
            "sourceUrl": source_url,
            "rawPath": str(raw_path.relative_to(root)),
            "normalizedPath": str((normalized_dir / f"{connector_id}.json").relative_to(root)),
            "operationCount": len(parsed["operations"]),
            "usedOperationCount": len(used_ops),
            "missingUsedOperations": parsed["missingUsedOperations"],
        }

    write_json(out_dir / "catalog-summary.json", catalog)
    print(json.dumps(catalog, indent=2))
    return 0


def fetch_text(url: str) -> str:
    request = urllib.request.Request(url, headers={"User-Agent": "vibeflow-connector-research/0.1"})
    with urllib.request.urlopen(request, timeout=30) as response:
        return response.read().decode("utf-8")


def collect_example_inventory(examples_dir: Path) -> dict[str, Any]:
    connector_counts: dict[str, Counter[str]] = defaultdict(Counter)
    connector_parameter_counts: dict[str, dict[str, Counter[str]]] = defaultdict(lambda: defaultdict(Counter))
    flow_summaries: list[dict[str, Any]] = []

    for definition_path in sorted(examples_dir.rglob("definition.json")):
        wrapper = json.loads(definition_path.read_text(encoding="utf-8"))
        definition = wrapper.get("properties", {}).get("definition", {})
        flow_name = wrapper.get("properties", {}).get("displayName") or wrapper.get("name")
        flow_counts: Counter[str] = Counter()
        flow_parameter_counts: dict[str, Counter[str]] = defaultdict(Counter)

        triggers = definition.get("triggers", {})
        if isinstance(triggers, dict):
            walk_action_map(triggers, flow_counts, flow_parameter_counts)

        actions = definition.get("actions", {})
        if isinstance(actions, dict):
            walk_action_map(actions, flow_counts, flow_parameter_counts)

        for key, count in flow_counts.items():
            connector_id, operation_id = key.split("::", 1)
            connector_counts[connector_id][operation_id] += count
        for key, counter in flow_parameter_counts.items():
            connector_id, operation_id = key.split("::", 1)
            connector_parameter_counts[connector_id][operation_id].update(counter)

        flow_summaries.append(
            {
                "flow": flow_name,
                "definitionPath": str(definition_path),
                "operations": dict(sorted(flow_counts.items())),
                "parameters": {
                    key: dict(sorted(counter.items()))
                    for key, counter in sorted(flow_parameter_counts.items())
                },
            }
        )

    return {
        "flows": flow_summaries,
        "connectors": {
            connector_id: {
                "apiId": f"{API_ID_PREFIX}{connector_id}",
                "operations": {
                    operation_id: {
                        "count": count,
                        "observedParameters": dict(
                            sorted(connector_parameter_counts[connector_id][operation_id].items())
                        ),
                    }
                    for operation_id, count in sorted(counter.items())
                },
            }
            for connector_id, counter in sorted(connector_counts.items())
        },
    }


def walk_action_map(
    action_map: dict[str, Any],
    counts: Counter[str],
    parameter_counts: dict[str, Counter[str]],
) -> None:
    for action in action_map.values():
        if not isinstance(action, dict):
            continue
        inputs = action.get("inputs", {})
        host = inputs.get("host", {}) if isinstance(inputs, dict) else {}
        api_id = host.get("apiId") if isinstance(host, dict) else None
        operation_id = host.get("operationId") if isinstance(host, dict) else None
        if isinstance(api_id, str) and isinstance(operation_id, str):
            connector_id = api_id.rsplit("/", 1)[-1]
            key = f"{connector_id}::{operation_id}"
            counts[key] += 1
            parameters = inputs.get("parameters", {}) if isinstance(inputs, dict) else {}
            if isinstance(parameters, dict):
                parameter_counts[key].update(str(parameter_key) for parameter_key in parameters.keys())

        for nested_key in ("actions", "else"):
            nested = action.get(nested_key)
            if isinstance(nested, dict):
                nested_actions = nested.get("actions") if nested_key == "else" else nested
                if isinstance(nested_actions, dict):
                    walk_action_map(nested_actions, counts, parameter_counts)

        cases = action.get("cases", {})
        if isinstance(cases, dict):
            for case in cases.values():
                case_actions = case.get("actions", {}) if isinstance(case, dict) else {}
                if isinstance(case_actions, dict):
                    walk_action_map(case_actions, counts, parameter_counts)


def parse_connector_markdown(
    markdown: str,
    connector_id: str,
    fallback_display_name: str,
    source_url: str,
) -> dict[str, Any]:
    lines = markdown.splitlines()
    frontmatter = parse_frontmatter(lines)
    title = frontmatter.get("title", fallback_display_name)
    display_name = re.sub(r"\s+-\s+Connectors\s+\|\s+Microsoft Learn$", "", title).strip()

    operations: dict[str, Any] = {}
    for section in operation_sections(lines):
        operation = parse_operation_section(section)
        if not operation.get("operationId"):
            continue
        operations[operation["operationId"]] = operation

    return {
        "connectorId": connector_id,
        "displayName": display_name or fallback_display_name,
        "sourceUrl": source_url,
        "sourceUpdatedAt": frontmatter.get("updated_at"),
        "sourceGitCommit": frontmatter.get("git_commit_id"),
        "sourcePath": frontmatter.get("source_path"),
        "operations": dict(sorted(operations.items())),
        "missingUsedOperations": {},
    }


def parse_frontmatter(lines: list[str]) -> dict[str, str]:
    if not lines or lines[0].strip() != "---":
        return {}
    data: dict[str, str] = {}
    for line in lines[1:]:
        if line.strip() == "---":
            break
        if ":" not in line or line.startswith((" ", "-")):
            continue
        key, value = line.split(":", 1)
        data[key.strip()] = value.strip().strip("'\"")
    return data


def operation_sections(lines: list[str]) -> list[OperationSection]:
    sections: list[OperationSection] = []
    current_kind: str | None = None
    i = 0
    while i < len(lines):
        line = lines[i]
        if line == "## Actions":
            current_kind = "action"
            i += 1
            continue
        if line == "## Triggers":
            current_kind = "trigger"
            i += 1
            continue
        if line.startswith("## "):
            current_kind = None
            i += 1
            continue
        if current_kind and line.startswith("### "):
            display_name = line[4:].strip()
            start = i + 1
            i = start
            while i < len(lines) and not lines[i].startswith("### ") and not lines[i].startswith("## "):
                i += 1
            sections.append(OperationSection(current_kind, display_name, lines[start:i]))
            continue
        i += 1
    return sections


def parse_operation_section(section: OperationSection) -> dict[str, Any]:
    operation_id = None
    for i, line in enumerate(section.lines):
        if line.strip() == "- Operation ID:":
            for candidate in section.lines[i + 1 : i + 5]:
                match = re.match(r"\s*-\s+(.+?)\s*$", candidate)
                if match:
                    operation_id = clean_markdown(match.group(1))
                    break
            break

    description = ""
    for line in section.lines:
        stripped = line.strip()
        if not stripped or stripped.startswith("- Operation ID:"):
            continue
        if stripped.startswith("#### "):
            break
        if stripped.startswith("|"):
            continue
        description = clean_markdown(stripped)
        break

    return {
        "operationId": operation_id,
        "kind": section.kind,
        "displayName": clean_markdown(section.display_name),
        "deprecated": "[DEPRECATED]" in section.display_name or "deprecated" in description.lower(),
        "description": description,
        "parameters": parse_parameters(section.lines),
        "returns": parse_returns(section.lines),
    }


def parse_parameters(lines: list[str]) -> list[dict[str, Any]]:
    start = find_line(lines, "#### Parameters")
    if start is None:
        return []

    table_lines: list[str] = []
    for line in lines[start + 1 :]:
        if line.startswith("#### ") or line.startswith("### ") or line.startswith("## "):
            break
        if line.startswith("|"):
            table_lines.append(line)
        elif table_lines and line.strip():
            break

    rows = parse_markdown_table(table_lines)
    params: list[dict[str, Any]] = []
    for row in rows:
        params.append(
            {
                "name": row.get("Name", ""),
                "key": row.get("Key", ""),
                "required": row.get("Required", "").lower() == "true",
                "type": row.get("Type", ""),
                "description": row.get("Description", ""),
            }
        )
    return params


def parse_returns(lines: list[str]) -> dict[str, Any]:
    start = find_line(lines, "#### Returns")
    if start is None:
        return {"raw": ""}

    collected: list[str] = []
    for line in lines[start + 1 :]:
        if line.startswith("#### ") or line.startswith("### ") or line.startswith("## "):
            break
        if line.strip():
            collected.append(clean_markdown(line.strip()))
    return {"raw": "\n".join(collected).strip()}


def parse_markdown_table(lines: list[str]) -> list[dict[str, str]]:
    if len(lines) < 3:
        return []
    headers = [clean_markdown(cell) for cell in split_table_row(lines[0])]
    rows: list[dict[str, str]] = []
    for line in lines[2:]:
        cells = [clean_markdown(cell) for cell in split_table_row(line)]
        if len(cells) != len(headers):
            continue
        rows.append(dict(zip(headers, cells)))
    return rows


def split_table_row(line: str) -> list[str]:
    return [cell.strip() for cell in line.strip().strip("|").split("|")]


def clean_markdown(value: str) -> str:
    value = value.replace("\\_", "_")
    value = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", value)
    value = re.sub(r"</?[^>]+>", "", value)
    value = value.replace("~~", "")
    return value.strip()


def find_line(lines: list[str], needle: str) -> int | None:
    for i, line in enumerate(lines):
        if line.strip() == needle:
            return i
    return None


def write_json(path: Path, data: Any) -> None:
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


if __name__ == "__main__":
    raise SystemExit(main())
