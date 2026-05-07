from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
from typing import Any

from .utils import load_json


@dataclass(frozen=True)
class FlowFile:
    export_root: Path
    flow_id: str
    flow_dir: Path
    definition_path: Path
    connections_map_path: Path | None
    apis_map_path: Path | None
    package_manifest_path: Path | None

    @property
    def relative_definition_path(self) -> str:
        return self.definition_path.relative_to(self.export_root).as_posix()

    def load_wrapper(self) -> dict[str, Any]:
        data = load_json(self.definition_path)
        if not isinstance(data, dict):
            raise ValueError(f"{self.definition_path} is not a JSON object")
        return data

    def workflow_definition(self) -> dict[str, Any]:
        wrapper = self.load_wrapper()
        definition = wrapper.get("properties", {}).get("definition")
        if not isinstance(definition, dict):
            raise ValueError(f"{self.definition_path} does not contain properties.definition")
        return definition

    def connection_references(self) -> dict[str, Any]:
        wrapper = self.load_wrapper()
        refs = wrapper.get("properties", {}).get("connectionReferences")
        return refs if isinstance(refs, dict) else {}

    def connections_map(self) -> dict[str, Any]:
        if not self.connections_map_path or not self.connections_map_path.exists():
            return {}
        data = load_json(self.connections_map_path)
        return data if isinstance(data, dict) else {}

    def apis_map(self) -> dict[str, Any]:
        if not self.apis_map_path or not self.apis_map_path.exists():
            return {}
        data = load_json(self.apis_map_path)
        return data if isinstance(data, dict) else {}

    def display_name(self) -> str:
        wrapper = self.load_wrapper()
        display = wrapper.get("properties", {}).get("displayName")
        if isinstance(display, str) and display:
            return display
        if self.package_manifest_path and self.package_manifest_path.exists():
            manifest = load_json(self.package_manifest_path)
            resource = manifest.get("resources", {}).get(self.flow_id, {})
            display = resource.get("details", {}).get("displayName")
            if isinstance(display, str) and display:
                return display
        return self.flow_id


@dataclass(frozen=True)
class ExportPackage:
    root: Path
    flows: list[FlowFile]


def discover_export(path: str | Path) -> ExportPackage:
    candidate = Path(path).expanduser().resolve()
    if not candidate.exists():
        raise FileNotFoundError(candidate)

    if candidate.is_file():
        if candidate.name != "definition.json":
            raise ValueError(f"Expected a Power Automate export directory or definition.json: {candidate}")
        flow_dirs = [candidate.parent]
        root = _find_export_root(candidate.parent)
    elif (candidate / "definition.json").exists():
        flow_dirs = [candidate]
        root = _find_export_root(candidate)
    else:
        root = candidate
        flow_dirs = sorted((root / "Microsoft.Flow" / "flows").glob("*/"))
        flow_dirs = [flow_dir for flow_dir in flow_dirs if (flow_dir / "definition.json").exists()]

    if not flow_dirs:
        raise ValueError(f"No Power Automate flow definition.json files found under {candidate}")

    package_manifest = root / "manifest.json"
    if not package_manifest.exists():
        package_manifest = None

    flows = [
        FlowFile(
            export_root=root,
            flow_id=flow_dir.name,
            flow_dir=flow_dir,
            definition_path=flow_dir / "definition.json",
            connections_map_path=_optional(flow_dir / "connectionsMap.json"),
            apis_map_path=_optional(flow_dir / "apisMap.json"),
            package_manifest_path=package_manifest,
        )
        for flow_dir in flow_dirs
    ]
    return ExportPackage(root=root, flows=flows)


def _optional(path: Path) -> Path | None:
    return path if path.exists() else None


def _find_export_root(flow_dir: Path) -> Path:
    for parent in [flow_dir, *flow_dir.parents]:
        if (parent / "manifest.json").exists() and (parent / "Microsoft.Flow").exists():
            return parent
    # Fall back to the conventional parent of Microsoft.Flow/flows/<flow-id>.
    if len(flow_dir.parents) >= 3 and flow_dir.parent.name == "flows":
        return flow_dir.parents[2]
    return flow_dir
