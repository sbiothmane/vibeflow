from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any, Callable, Iterable


EMAIL_RE = re.compile(r"\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b", re.IGNORECASE)
URL_RE = re.compile(r"https?://[^\s\"'<>]+", re.IGNORECASE)
GUID_RE = re.compile(
    r"\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b",
    re.IGNORECASE,
)
FORM_FIELD_RE = re.compile(r"body/(r[a-f0-9]{32})", re.IGNORECASE)
FUNCTION_RE = re.compile(r"\b([A-Za-z][A-Za-z0-9_]*)\s*\(")
ACTION_REF_RE = re.compile(
    r"\b(actions|outputs|body|result|items|iterationIndexes|formDataValue|"
    r"formDataMultiValues|multipartBody)\(\s*(['\"])([^'\"]+)\2"
)
VARIABLE_REF_RE = re.compile(r"\bvariables\(\s*(['\"])([^'\"]+)\1\s*\)")


def load_json(path: Path) -> Any:
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def write_json(path: Path, data: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as handle:
        json.dump(data, handle, indent=2, ensure_ascii=False)
        handle.write("\n")


def read_text(path: Path) -> str:
    with path.open("r", encoding="utf-8") as handle:
        return handle.read()


def write_text(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as handle:
        handle.write(text)


def walk_json(value: Any, path: tuple[str, ...] = ()) -> Iterable[tuple[tuple[str, ...], Any]]:
    yield path, value
    if isinstance(value, dict):
        for key, child in value.items():
            yield from walk_json(child, path + (str(key),))
    elif isinstance(value, list):
        for index, child in enumerate(value):
            yield from walk_json(child, path + (str(index),))


def transform_json(value: Any, fn: Callable[[tuple[str, ...], Any], Any], path: tuple[str, ...] = ()) -> Any:
    if isinstance(value, dict):
        value = {key: transform_json(child, fn, path + (str(key),)) for key, child in value.items()}
    elif isinstance(value, list):
        value = [transform_json(child, fn, path + (str(index),)) for index, child in enumerate(value)]
    return fn(path, value)


def slugify_name(name: str, fallback: str = "item") -> str:
    clean = name.strip()
    replacements = {
        "Intialize": "Initialize",
        "Intialise": "Initialize",
        "Varaiable": "Variable",
        "Attachement": "Attachment",
        "Attachements": "Attachments",
        "E-mail": "Email",
    }
    for old, new in replacements.items():
        clean = clean.replace(old, new)
    clean = re.sub(r"[\[\]{}()]+", "", clean)
    clean = re.sub(r"[^A-Za-z0-9_]+", "_", clean)
    clean = re.sub(r"_+", "_", clean).strip("_")
    if not clean:
        clean = fallback
    if not re.match(r"^[A-Za-z_]", clean):
        clean = f"{fallback}_{clean}"
    return clean


def unique_name(base: str, taken: set[str]) -> str:
    candidate = base
    counter = 2
    while candidate in taken:
        candidate = f"{base}_{counter}"
        counter += 1
    taken.add(candidate)
    return candidate


def path_string(path: Iterable[str]) -> str:
    return "/".join(path)


def short_value(value: str, limit: int = 120) -> str:
    one_line = re.sub(r"\s+", " ", value).strip()
    if len(one_line) <= limit:
        return one_line
    return one_line[: limit - 1] + "..."


def looks_like_form_id(value: str, key_path: tuple[str, ...]) -> bool:
    if key_path and key_path[-1] == "form_id":
        return True
    return len(value) > 45 and bool(re.fullmatch(r"[A-Za-z0-9_\-]+", value))


def is_noisy_metadata_path(path: tuple[str, ...]) -> bool:
    return "metadata" in path or (path and path[-1] == "operationMetadataId")
