import fs from "fs";
import path from "path";
import YAML from "yaml";

export function getSiteContent() {
  const filePath = path.join(process.cwd(), "content", "site.yaml");
  const file = fs.readFileSync(filePath, "utf8");
  return YAML.parse(file);
}