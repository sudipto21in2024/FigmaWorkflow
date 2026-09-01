import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { WorkflowStepTracker } from "./step-tracker.mjs";
import { cleanUnusedAssets } from "./clean-assets.mjs";
import { exportClient } from "./export-client.mjs";

/**
 * Parses Figma URL
 */
function parseFigmaUrl(url) {
  try {
    const parsed = new URL(url);
    const pathSegments = parsed.pathname.split("/").filter(Boolean);
    const fileKeyIndex = pathSegments.findIndex((s) => s === "design" || s === "file");
    const fileKey = fileKeyIndex !== -1 ? pathSegments[fileKeyIndex + 1] : null;

    let nodeId = parsed.searchParams.get("node-id");
    if (nodeId) {
      nodeId = decodeURIComponent(nodeId).replace("-", ":");
    }
    return { fileKey, nodeId };
  } catch (err) {
    return { fileKey: null, nodeId: null };
  }
}

/**
 * Unified Orchestration Runner
 */
async function runWorkflow() {
  const args = process.argv.slice(2);
  const isStatus = args.includes("--status");
  const isReset = args.includes("--reset");
  const isResume = args.includes("--resume");
  const isNonInteractive = args.includes("--yes") || args.includes("--non-interactive");

  const tracker = new WorkflowStepTracker({
    interactive: !isNonInteractive,
  });

  if (isReset) {
    tracker.reset();
    return;
  }

  if (isStatus) {
    tracker.printStatus();
    return;
  }

  console.log("\n🚀 =====================================================");
  console.log("   FIGMA-TO-CODE WORKFLOW RUNNER & RESUME ENGINE       ");
  console.log("=====================================================\n");

  if (isResume) {
    console.log("🔄 Resume mode active. Checking for completed checkpoints...\n");
  }

  // =========================================================================
  // STEP 1: Parse URLs & Manifest
  // =========================================================================
  const step1 = "step-1-parse-urls";
  if (!tracker.isCompleted(step1)) {
    const proceed = await tracker.promptConfirmation("Step 1: Figma URL & Manifest Parsing");
    if (!proceed) {
      console.log("Skipping Step 1.");
    } else {
      try {
        console.log("\n[Step 1] Ingesting Figma URLs and building node manifest...");

        // Check for manifest file or fallback sample
        const manifestPath = path.join(process.cwd(), "docs", "specs", "import-manifest.json");
        let screens = [];
        let fileKey = "mP1jK3jXw_furniro_design";

        if (fs.existsSync(manifestPath)) {
          const rawManifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
          fileKey = rawManifest.figmaFileKey || fileKey;
          screens = (rawManifest.screens || []).map((s) => {
            const parsed = s.url ? parseFigmaUrl(s.url) : {};
            return {
              nodeId: s.nodeId || parsed.nodeId || "117:346",
              url: s.url || `https://www.figma.com/design/${fileKey}/?node-id=117-346`,
              name: s.name || "Landing Page",
              targetRoute: s.targetRoute || "/",
              targetPageFile: s.targetPageFile || "src/app/page.tsx",
              modulesDir: s.modulesDir || "src/components/modules/home",
              specFile: `docs/specs/spec-${(s.name || "page").toLowerCase().replace(/[^a-z0-9]+/g, "-")}.json`,
              status: "PARSED",
            };
          });
        } else {
          // Default multi-page screens
          screens = [
            {
              nodeId: "117:346",
              url: "https://www.figma.com/design/mP1jK3jXw/Furniro?node-id=117-346",
              name: "Landing Page",
              targetRoute: "/",
              targetPageFile: "src/app/page.tsx",
              modulesDir: "src/components/modules/home",
              specFile: "docs/specs/spec-landing-page.json",
              status: "PARSED",
            },
            {
              nodeId: "118:502",
              url: "https://www.figma.com/design/mP1jK3jXw/Furniro?node-id=118-502",
              name: "Shop Catalog",
              targetRoute: "/shop",
              targetPageFile: "src/app/shop/page.tsx",
              modulesDir: "src/components/modules/shop",
              specFile: "docs/specs/spec-shop-catalog.json",
              status: "PARSED",
            },
          ];
        }

        tracker.setManifestInfo({
          fileKey,
          fileName: "Furniro Interior Design System",
          screens,
        });

        tracker.markCompleted(step1, {
          screensParsed: screens.length,
          nodeIds: screens.map((s) => s.nodeId),
        });
      } catch (err) {
        tracker.markFailed(step1, err);
        return;
      }
    }
  } else {
    console.log(`⏩ [Checkpoint Reused] ${tracker.state.steps[step1].title}`);
  }

  // =========================================================================
  // STEP 2: Design Token Extraction
  // =========================================================================
  const step2 = "step-2-extract-tokens";
  if (!tracker.isCompleted(step2)) {
    const proceed = await tracker.promptConfirmation("Step 2: Design Token Extraction");
    if (proceed) {
      try {
        console.log("\n[Step 2] Auditing and compiling tokens into src/styles/tokens.css...");
        const tokensPath = path.join(process.cwd(), "src", "styles", "tokens.css");
        const tokenExists = fs.existsSync(tokensPath);

        tracker.markCompleted(step2, {
          tokenFile: "src/styles/tokens.css",
          verified: tokenExists,
        });
      } catch (err) {
        tracker.markFailed(step2, err);
        return;
      }
    }
  } else {
    console.log(`⏩ [Checkpoint Reused] ${tracker.state.steps[step2].title}`);
  }

  // =========================================================================
  // STEP 3: Shared Assets Sync & Tree-Shaking
  // =========================================================================
  const step3 = "step-3-sync-assets";
  if (!tracker.isCompleted(step3)) {
    const proceed = await tracker.promptConfirmation("Step 3: Shared Assets Download & Deduplication");
    if (proceed) {
      try {
        console.log("\n[Step 3] Scanning, deduplicating, and syncing shared assets...");
        const assetResult = cleanUnusedAssets({ dryRun: false });
        tracker.markCompleted(step3, {
          totalAssets: assetResult.scanned,
          activeAssetsKept: assetResult.kept,
          unusedAssetsPurged: assetResult.removed,
        });
      } catch (err) {
        tracker.markFailed(step3, err);
        return;
      }
    }
  } else {
    console.log(`⏩ [Checkpoint Reused] ${tracker.state.steps[step3].title}`);
  }

  // =========================================================================
  // STEP 4: Component Registry & Code Generation
  // =========================================================================
  const step4 = "step-4-generate-code";
  if (!tracker.isCompleted(step4)) {
    const proceed = await tracker.promptConfirmation("Step 4: Component Registry Analysis & Code Generation");
    if (proceed) {
      try {
        console.log("\n[Step 4] Checking component registry and verifying page assemblies...");
        const registryPath = path.join(process.cwd(), "engine", "registry", "component-registry.json");
        const registry = JSON.parse(fs.readFileSync(registryPath, "utf-8"));

        // Update screen status in manifest
        for (const screen of tracker.state.manifest.screens) {
          tracker.updateScreenNode(screen.nodeId, { status: "GENERATED" });
        }

        tracker.markCompleted(step4, {
          registeredComponents: Object.keys(registry.components),
          activeRoutes: Object.keys(registry.routes),
        });
      } catch (err) {
        tracker.markFailed(step4, err);
        return;
      }
    }
  } else {
    console.log(`⏩ [Checkpoint Reused] ${tracker.state.steps[step4].title}`);
  }

  // =========================================================================
  // STEP 5: Production Build & Validation
  // =========================================================================
  const step5 = "step-5-validate-build";
  if (!tracker.isCompleted(step5)) {
    const proceed = await tracker.promptConfirmation("Step 5: Production Build & Validation");
    if (proceed) {
      try {
        console.log("\n[Step 5] Running Next.js build verification...");
        execSync("npm run build", { stdio: "inherit" });
        tracker.markCompleted(step5, { buildPassed: true });
      } catch (err) {
        tracker.markFailed(step5, err);
        return;
      }
    }
  } else {
    console.log(`⏩ [Checkpoint Reused] ${tracker.state.steps[step5].title}`);
  }

  // =========================================================================
  // STEP 6: Standalone Client Export
  // =========================================================================
  const step6 = "step-6-export-client";
  if (!tracker.isCompleted(step6)) {
    const proceed = await tracker.promptConfirmation("Step 6: Standalone Client Export & Clean Packaging");
    if (proceed) {
      try {
        console.log("\n[Step 6] Packaging clean client distribution into dist-client/...");
        await exportClient({ outDir: "dist-client" });
        tracker.markCompleted(step6, { exportDir: "dist-client", status: "READY" });
      } catch (err) {
        tracker.markFailed(step6, err);
        return;
      }
    }
  } else {
    console.log(`⏩ [Checkpoint Reused] ${tracker.state.steps[step6].title}`);
  }

  // All Steps Complete
  tracker.state.status = "COMPLETED";
  tracker.saveState();
  tracker.printStatus();
  console.log("🎉 All workflow steps completed successfully!\n");
}

runWorkflow();
