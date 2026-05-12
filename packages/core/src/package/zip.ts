import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

import JSZip from "jszip";

import type { BuiltPackage } from "./build.js";

export interface WriteZipOptions {
  /** Output path for the .zip file. Parent directories are created if missing. */
  outPath: string;
  /** JSON indentation. Defaults to none (compact) to match Power Automate exports. */
  indent?: number;
}

/**
 * Write a BuiltPackage out as a Power Automate-compatible zip file.
 * Returns the absolute output path.
 */
export async function writeExportZip(
  pkg: BuiltPackage,
  options: WriteZipOptions,
): Promise<string> {
  const zip = new JSZip();
  const indent = options.indent ?? 0;
  for (const file of pkg.files) {
    if (file.body !== undefined && file.json !== undefined) {
      throw new Error(`writeExportZip: ${file.path} must set only one of json or body`);
    }
    if (file.body !== undefined) {
      zip.file(file.path, file.body);
    } else if (file.json !== undefined) {
      zip.file(file.path, JSON.stringify(file.json, null, indent));
    } else {
      throw new Error(`writeExportZip: ${file.path} must set json or body`);
    }
  }
  const buffer = await zip.generateAsync({ type: "nodebuffer", compression: "DEFLATE" });
  await mkdir(dirname(options.outPath), { recursive: true });
  await writeFile(options.outPath, buffer);
  return options.outPath;
}

/**
 * Write a BuiltPackage to a directory tree (for debugging or inspecting before
 * zipping). Each file is written verbatim.
 */
export async function writeExportTree(
  pkg: BuiltPackage,
  outDir: string,
  indent: number = 0,
): Promise<string> {
  for (const file of pkg.files) {
    if (file.body !== undefined && file.json !== undefined) {
      throw new Error(`writeExportTree: ${file.path} must set only one of json or body`);
    }
    const dest = `${outDir.replace(/\/$/, "")}/${file.path}`;
    await mkdir(dirname(dest), { recursive: true });
    const content =
      file.body !== undefined
        ? file.body
        : file.json !== undefined
          ? JSON.stringify(file.json, null, indent)
          : (() => {
              throw new Error(`writeExportTree: ${file.path} must set json or body`);
            })();
    await writeFile(dest, content);
  }
  return outDir;
}
