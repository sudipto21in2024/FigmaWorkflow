import fs from "fs";
import path from "path";
import { execSync } from "child_process";

/**
 * Standalone Client Exporter & Sanitizer
 * Packages a pure, decoupled Next.js web client into dist-client/ free of engine scripts and Figma ASTs.
 */
export async function exportClient({ outDir = "dist-client", createZip = false } = {}) {
  const rootDir = process.cwd();
  const targetDir = path.isAbsolute(outDir) ? outDir : path.join(rootDir, outDir);

  console.log(`[Export-Engine] Starting client code export to: ${targetDir}`);

  // 1. Clean / create target directory
  if (fs.existsSync(targetDir)) {
    fs.rmSync(targetDir, { recursive: true, force: true });
  }
  fs.mkdirSync(targetDir, { recursive: true });

  // 2. Define files and directories to copy
  const runtimeDirs = ["src", "public"];
  const runtimeFiles = [
    "next.config.ts",
    "tsconfig.json",
    "tailwind.config.ts",
    "postcss.config.js",
    ".gitignore",
  ];

  // Helper recursive copy
  function copyRecursive(src, dest) {
    if (!fs.existsSync(src)) return;
    const stat = fs.statSync(src);
    if (stat.isDirectory()) {
      fs.mkdirSync(dest, { recursive: true });
      for (const child of fs.readdirSync(src)) {
        copyRecursive(path.join(src, child), path.join(dest, child));
      }
    } else {
      let content = fs.readFileSync(src, "utf-8");
      // Sanitize engine comments and data-node-id / data-figma attributes
      if (/\.(tsx|ts|jsx|js|css)$/i.test(src)) {
        content = content
          .replace(/\/\/\s*token-ignore[^\n]*/g, "")
          .replace(/\/\*\s*figma-node-[^*]*\*\//g, "")
          .replace(/\s*data-node-id="[^"]*"/g, "")
          .replace(/\s*data-figma-[a-zA-Z0-9_-]+="[^"]*"/g, "");
      }
      fs.writeFileSync(dest, content);
    }
  }

  // Copy runtime directories
  for (const dir of runtimeDirs) {
    const srcPath = path.join(rootDir, dir);
    const destPath = path.join(targetDir, dir);
    copyRecursive(srcPath, destPath);
    console.log(`[Export-Engine] Copied runtime directory: ${dir}`);
  }

  // Copy runtime configuration files
  for (const file of runtimeFiles) {
    const srcPath = path.join(rootDir, file);
    if (fs.existsSync(srcPath)) {
      const destPath = path.join(targetDir, file);
      fs.copyFileSync(srcPath, destPath);
      console.log(`[Export-Engine] Copied config file: ${file}`);
    }
  }

  // 3. Generate clean, standalone package.json
  const sourcePkgPath = path.join(rootDir, "package.json");
  const sourcePkg = JSON.parse(fs.readFileSync(sourcePkgPath, "utf-8"));

  const cleanPackage = {
    name: "furniro-web-app",
    version: "1.0.0",
    private: true,
    description: "Production Furniro Next.js eCommerce frontend generated from Figma",
    scripts: {
      dev: "next dev",
      build: "next build",
      start: "next start",
      lint: "next lint",
    },
    dependencies: {
      clsx: sourcePkg.dependencies?.clsx || "^2.1.1",
      "lucide-react": sourcePkg.dependencies?.["lucide-react"] || "^1.16.0",
      next: sourcePkg.dependencies?.next || "15.5.25",
      react: sourcePkg.dependencies?.react || "^19.0.0",
      "react-dom": sourcePkg.dependencies?.["react-dom"] || "^19.0.0",
      "tailwind-merge": sourcePkg.dependencies?.["tailwind-merge"] || "^3.5.0",
    },
    devDependencies: {
      "@tailwindcss/postcss": sourcePkg.devDependencies?.["@tailwindcss/postcss"] || "^4.0.0",
      "@types/node": sourcePkg.devDependencies?.["@types/node"] || "^20.0.0",
      "@types/react": sourcePkg.devDependencies?.["@types/react"] || "^19.0.0",
      "@types/react-dom": sourcePkg.devDependencies?.["@types/react-dom"] || "^19.0.0",
      postcss: sourcePkg.devDependencies?.postcss || "^8.4.49",
      tailwindcss: sourcePkg.devDependencies?.tailwindcss || "^4.0.0",
      typescript: sourcePkg.devDependencies?.typescript || "^5.0.0",
    },
  };

  fs.writeFileSync(
    path.join(targetDir, "package.json"),
    JSON.stringify(cleanPackage, null, 2)
  );
  console.log(`[Export-Engine] Generated clean client package.json`);

  // 4. Generate standalone README.md
  const readmeContent = `# Furniro Modern Interior & Furniture App

This is a production-ready Next.js 15 web application generated from the Furniro Figma design system.

## Features
- **App Router Layout**: Persistent responsive Header and Footer across routes.
- **Multi-page Routes**:
  - \`/\` : Home landing page (Hero, Category Range, Our Products, Inspiration, Share Collage)
  - \`/shop\` : Shop catalog page with filter bar, responsive product grid, and pagination
- **Design Tokens**: Standardized CSS variables defined in \`src/styles/tokens.css\`.
- **Reusable Primitives**: Clean Button and ProductCard components.

## Getting Started

1. **Install Dependencies**:
\`\`\`bash
npm install
\`\`\`

2. **Run Local Development Server**:
\`\`\`bash
npm run dev
\`\`\`

3. **Build for Production**:
\`\`\`bash
npm run build
npm start
\`\`\`
`;

  fs.writeFileSync(path.join(targetDir, "README.md"), readmeContent);
  console.log(`[Export-Engine] Generated client README.md`);

  console.log(`\n======================================================`);
  console.log(`✅ Client code successfully exported to: ${outDir}`);
  console.log(`======================================================\n`);
}

// CLI execution
if (process.argv[1] && process.argv[1].endsWith("export-client.mjs")) {
  const args = process.argv.slice(2);
  let outDir = "dist-client";
  const outArg = args.find((a) => a.startsWith("--out="));
  if (outArg) outDir = outArg.split("=")[1];
  const createZip = args.includes("--zip");

  exportClient({ outDir, createZip });
}
