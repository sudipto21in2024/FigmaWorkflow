// scripts/audit-tokens.mjs
import fs from "node:fs";
import path from "node:path";
import { printHeader, printStep, printErrorBanner, printSummaryCard, badges, colors } from "./reporter.mjs";

const TARGET_DIRS = ["src/app", "src/components", "src/modules"];
const EXTENSIONS = [".tsx", ".jsx", ".ts", ".js"];

const VIOLATIONS = [
  {
    name: "Arbitrary Color Bracket",
    regex: /(?:className|class)=["'][^"']*\b[a-zA-Z0-9_-]+-\[#(?:[0-9a-fA-F]{3,8})\][^"']*["']/g,
    message: "Arbitrary hex brackets (e.g. `bg-[#...]`) are forbidden. Map to tokens.css.",
  },
  {
    name: "Arbitrary Pixel Bracket",
    regex: /(?:className|class)=["'][^"']*\b[a-zA-Z0-9_-]+-\[\d+(?:\.\d+)?(?:px|rem)\][^"']*["']/g,
    message: "Arbitrary measurement brackets (e.g. `w-[320px]`, `p-[14px]`) are forbidden. Use Tailwind scales.",
  },
  {
    name: "Inline Style Attribute",
    regex: /style=\{\{[^}]*\}\}/g,
    message: "Inline `style={{ ... }}` objects are forbidden. Use semantic Tailwind utility classes.",
  },
  {
    name: "Dangerous Absolute Positioning",
    regex: /className=["'][^"']*\b(absolute|fixed)\b[^"']*(top-|left-|bottom-|right-)[^"']*["']/g,
    message: "Avoid raw absolute positioning for structural layout. Use Flexbox or CSS Grid.",
  },
  {
    name: "Flex Child Missing min-w-0",
    regex: /className=["'][^"']*\bflex-1\b(?![^"']*\bmin-w-0\b)[^"']*["']/g,
    message: "Flex children with `flex-1` containing text should include `min-w-0` to avoid text overflow blowout.",
  },
];

let totalFilesScanned = 0;
const recordedViolations = [];

function scanFile(filePath) {
  totalFilesScanned++;
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");

  VIOLATIONS.forEach(({ name, regex, message }) => {
    lines.forEach((line, lineIdx) => {
      if (line.includes("// token-ignore")) return;
      const matches = line.match(regex);
      if (matches) {
        matches.forEach((match) => {
          recordedViolations.push({
            file: path.relative(process.cwd(), filePath).replace(/\\/g, "/"),
            line: lineIdx + 1,
            rule: name,
            codeSnippet: match.trim(),
            fix: message,
          });
        });
      }
    });
  });
}

function traverseDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== "node_modules" && entry.name !== ".next") {
        traverseDirectory(fullPath);
      }
    } else if (EXTENSIONS.includes(path.extname(entry.name))) {
      scanFile(fullPath);
    }
  }
}

function run() {
  printHeader("Design Token & Styling Guardrail Audit", "Scanning React/Tailwind codebase for styling compliance");

  printStep(1, 2, "Scanning Target Directories", TARGET_DIRS.join(", "));
  TARGET_DIRS.forEach(traverseDirectory);

  printStep(2, 2, "Evaluating Codebase Violations", `Audited ${totalFilesScanned} files against ${VIOLATIONS.length} rules`);

  if (recordedViolations.length > 0) {
    console.error(`\n${colors.red}${colors.bold}🚨 VIOLATIONS DETECTED (${recordedViolations.length}):${colors.reset}\n`);

    recordedViolations.forEach((v, idx) => {
      console.error(`  ${colors.red}${colors.bold}#${idx + 1} [${v.rule}]${colors.reset} in ${colors.cyan}${v.file}:${v.line}${colors.reset}`);
      console.error(`     ↳ Snippet: ${colors.yellow}${v.codeSnippet}${colors.reset}`);
      console.error(`     ↳ Fix:     ${colors.dim}${v.fix}${colors.reset}\n`);
    });

    printSummaryCard("TOKEN AUDIT FAILED", [
      ["Files Scanned", totalFilesScanned],
      ["Rules Evaluated", VIOLATIONS.length],
      ["Violations Found", recordedViolations.length],
      ["Status", `${colors.red}FAIL (Exit 1)${colors.reset}`],
    ]);

    process.exit(1);
  } else {
    printSummaryCard("TOKEN AUDIT PASSED", [
      ["Files Scanned", totalFilesScanned],
      ["Rules Evaluated", VIOLATIONS.length],
      ["Violations Found", "0"],
      ["Status", `${colors.green}100% Compliant (Exit 0)${colors.reset}`],
    ]);

    process.exit(0);
  }
}

run();
