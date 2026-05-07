from __future__ import annotations

import json
import subprocess
import sys
from collections import Counter
from pathlib import Path

from vibeflow.aliases import generate_aliases
from vibeflow.context import write_context
from vibeflow.index import build_index
from vibeflow.linting import lint_indexes
from vibeflow.package import discover_export
from vibeflow.rewrite import rewrite_export
from vibeflow.utils import load_json


ROOT = Path(__file__).resolve().parents[1]
EXAMPLE1 = ROOT / "examples" / "example1"
EXAMPLE2 = ROOT / "examples" / "example2"


def test_discovers_power_automate_exports() -> None:
    package = discover_export(EXAMPLE1)

    assert package.root == EXAMPLE1.resolve()
    assert len(package.flows) == 1
    assert package.flows[0].definition_path.name == "definition.json"
    assert package.flows[0].connections_map()
    assert package.flows[0].apis_map()


def test_index_extracts_actions_variables_expressions_and_constants() -> None:
    flow = discover_export(EXAMPLE1).flows[0]
    index = build_index(flow)

    assert len(index.actions) > 100
    assert index.action_type_counts["If"] >= 10
    assert index.variables
    assert index.expressions
    assert index.form_field_counts
    assert index.constants
    assert index.metadata_ids


def test_aliases_include_editable_sections() -> None:
    indexes = [build_index(flow) for flow in discover_export(EXAMPLE2).flows]
    aliases = generate_aliases(indexes)
    flow_aliases = aliases["flows"][indexes[0].flow.flow_id]

    assert aliases["schema"] == "vibeflow.aliases.v1"
    assert flow_aliases["actions"]
    assert flow_aliases["variables"]
    assert flow_aliases["connectors"]
    assert flow_aliases["formFields"]
    assert flow_aliases["constants"]


def test_lint_detects_known_sample_risks() -> None:
    indexes = [build_index(flow) for flow in discover_export(EXAMPLE1).flows]
    result = lint_indexes(indexes)
    rules = {issue["rule"] for flow in result["flows"] for issue in flow["issues"]}

    assert "PA100" in rules
    assert "PA101" in rules
    assert "PA200" in rules
    assert "PA300" in rules
    assert "PA400" in rules
    assert "PA402" in rules
    assert "PA403" in rules
    assert "PA500" in rules


def test_context_writes_ai_files(tmp_path: Path) -> None:
    indexes = [build_index(flow) for flow in discover_export(EXAMPLE1).flows]
    result = write_context(indexes, tmp_path)

    for filename in result["files"]:
        assert (tmp_path / filename).exists()
    aliases = load_json(tmp_path / "aliases.json")
    assert aliases["schema"] == "vibeflow.aliases.v1"


def test_rewrite_copies_export_and_validates_without_touching_original(tmp_path: Path) -> None:
    source_definition = next(EXAMPLE1.glob("Microsoft.Flow/flows/*/definition.json"))
    before = source_definition.read_text(encoding="utf-8")
    context_dir = tmp_path / "context"
    write_context([build_index(flow) for flow in discover_export(EXAMPLE1).flows], context_dir)

    out_dir = tmp_path / "rewrite"
    report = rewrite_export(EXAMPLE1, context_dir / "aliases.json", out_dir)

    assert source_definition.read_text(encoding="utf-8") == before
    rewritten_definition = next(out_dir.glob("Microsoft.Flow/flows/*/definition.json"))
    data = json.loads(rewritten_definition.read_text(encoding="utf-8"))
    actions = data["properties"]["definition"]["actions"]
    assert any(name.startswith("Initialize_Config") for name in actions)
    assert not any(flow["validationErrors"] for flow in report["flows"])
    assert (out_dir / "vibeflow-rewrite-report.json").exists()
    assert "operationMetadataId" not in rewritten_definition.read_text(encoding="utf-8")

    rewritten_index = build_index(discover_export(out_dir).flows[0])
    lower_counts = Counter(node.name.lower() for node in rewritten_index.actions)
    assert not {name: count for name, count in lower_counts.items() if count > 1}


def test_rewrite_is_stable_for_same_input_and_aliases(tmp_path: Path) -> None:
    context_dir = tmp_path / "context"
    write_context([build_index(flow) for flow in discover_export(EXAMPLE2).flows], context_dir)

    out_a = tmp_path / "rewrite-a"
    out_b = tmp_path / "rewrite-b"
    rewrite_export(EXAMPLE2, context_dir / "aliases.json", out_a)
    rewrite_export(EXAMPLE2, context_dir / "aliases.json", out_b)

    def definition_text(path: Path) -> str:
        return next(path.glob("Microsoft.Flow/flows/*/definition.json")).read_text(encoding="utf-8")

    assert definition_text(out_a) == definition_text(out_b)


def test_cli_smoke_commands(tmp_path: Path) -> None:
    inspect = subprocess.run(
        [sys.executable, "-m", "vibeflow", "inspect", str(EXAMPLE1), "--json"],
        cwd=ROOT,
        text=True,
        capture_output=True,
        check=True,
    )
    assert json.loads(inspect.stdout)["flowCount"] == 1

    context_dir = tmp_path / "context"
    subprocess.run(
        [sys.executable, "-m", "vibeflow", "context", str(EXAMPLE1), "--out", str(context_dir)],
        cwd=ROOT,
        text=True,
        capture_output=True,
        check=True,
    )

    lint = subprocess.run(
        [sys.executable, "-m", "vibeflow", "lint", str(EXAMPLE1), "--json"],
        cwd=ROOT,
        text=True,
        capture_output=True,
        check=True,
    )
    assert json.loads(lint.stdout)["issueCount"] > 0

    rewrite_dir = tmp_path / "rewrite"
    subprocess.run(
        [
            sys.executable,
            "-m",
            "vibeflow",
            "rewrite",
            str(EXAMPLE1),
            "--aliases",
            str(context_dir / "aliases.json"),
            "--out",
            str(rewrite_dir),
        ],
        cwd=ROOT,
        text=True,
        capture_output=True,
        check=True,
    )
    assert (rewrite_dir / "vibeflow-rewrite-report.json").exists()
