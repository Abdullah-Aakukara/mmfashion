/**
 * Google Apps Script for MM Fashion Surat Catalog.
 * 
 * Paste this script into your Google Sheet (Extensions > Apps Script).
 * It adds a custom "Website" menu with an "Update website now" button.
 * Clicking it sends a POST request to your Cloudflare Pages Deploy Hook,
 * triggering a new static build with the latest fabric inventory.
 * 
 * Enforces a 10-minute cooldown between build triggers using PropertiesService.
 */

// Replace this with your actual Cloudflare Deploy Hook URL
// (Cloudflare Dashboard > Workers & Pages > mmfashion > Settings > Builds & deployments > Deploy hooks)
const CLOUDFLARE_DEPLOY_HOOK_URL = "https://api.cloudflare.com/client/v4/workers/builds/deploy_hooks/34304faa-abd7-49fc-b790-8d76fc2ab864";

// Cooldown period: 10 minutes in milliseconds
const COOLDOWN_MS = 10 * 60 * 1000;
const LAST_DEPLOY_PROP = "MM_FASHION_LAST_DEPLOY_TIMESTAMP";

/**
 * Creates custom menu when spreadsheet opens.
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("Website")
    .addItem("Update website now", "triggerWebsiteBuild")
    .addItem("Check build status / cooldown", "checkBuildCooldown")
    .addToUi();
}

/**
 * Triggers Cloudflare Pages static site build with 10-minute cooldown check.
 */
function triggerWebsiteBuild() {
  const ui = SpreadsheetApp.getUi();
  const scriptProps = PropertiesService.getScriptProperties();
  const now = new Date().getTime();
  const lastDeploy = parseInt(scriptProps.getProperty(LAST_DEPLOY_PROP) || "0", 10);

  // Check cooldown
  const timeSinceLast = now - lastDeploy;
  if (timeSinceLast < COOLDOWN_MS) {
    const remainingSeconds = Math.ceil((COOLDOWN_MS - timeSinceLast) / 1000);
    const remainingMinutes = Math.ceil(remainingSeconds / 60);
    ui.alert(
      "Deploy Cooldown Active",
      "A site rebuild was triggered recently.\n\nPlease wait " +
        remainingMinutes +
        " minute(s) (" +
        remainingSeconds +
        " seconds) before requesting another build.\n\nThis prevents excessive build queues.",
      ui.ButtonSet.OK
    );
    return;
  }

  // Clean URL in case someone accidentally prepends a duplicate prefix
  let targetUrl = (CLOUDFLARE_DEPLOY_HOOK_URL || "").trim();
  if (targetUrl.includes("https://", 8)) {
    targetUrl = targetUrl.substring(targetUrl.lastIndexOf("https://"));
  }

  // Validate placeholder
  if (
    !targetUrl ||
    targetUrl.includes("REPLACE_WITH_YOUR_DEPLOY_HOOK_ID")
  ) {
    ui.alert(
      "Deploy Hook Not Configured",
      "Please open Extensions > Apps Script and set CLOUDFLARE_DEPLOY_HOOK_URL with your actual Cloudflare Deploy Hook URL.",
      ui.ButtonSet.OK
    );
    return;
  }

  // Send POST request to Cloudflare Deploy Hook
  try {
    const options = {
      method: "post",
      muteHttpExceptions: true,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = UrlFetchApp.fetch(targetUrl, options);
    const responseCode = response.getResponseCode();

    if (responseCode >= 200 && responseCode < 300) {
      // Record successful trigger timestamp
      scriptProps.setProperty(LAST_DEPLOY_PROP, now.toString());

      ui.alert(
        "Website Update Triggered!",
        "Cloudflare Pages has started building the latest catalog with your updated Google Sheet inventory.\n\nChanges will be live worldwide in approximately 1 to 2 minutes.",
        ui.ButtonSet.OK
      );
    } else {
      ui.alert(
        "Deployment Failed",
        "Cloudflare returned HTTP code " +
          responseCode +
          ".\n\nResponse:\n" +
          response.getContentText(),
        ui.ButtonSet.OK
      );
    }
  } catch (error) {
    ui.alert(
      "Connection Error",
      "Could not reach Cloudflare Pages:\n" + error.toString(),
      ui.ButtonSet.OK
    );
  }
}

/**
 * Helper to inspect the current cooldown status without triggering a build.
 */
function checkBuildCooldown() {
  const ui = SpreadsheetApp.getUi();
  const scriptProps = PropertiesService.getScriptProperties();
  const now = new Date().getTime();
  const lastDeploy = parseInt(scriptProps.getProperty(LAST_DEPLOY_PROP) || "0", 10);

  const timeSinceLast = now - lastDeploy;
  if (timeSinceLast < COOLDOWN_MS) {
    const remainingSeconds = Math.ceil((COOLDOWN_MS - timeSinceLast) / 1000);
    const remainingMinutes = Math.ceil(remainingSeconds / 60);
    ui.alert(
      "Build Status",
      "Last build was triggered " +
        Math.round(timeSinceLast / 1000) +
        " seconds ago.\n\nCooldown remaining: " +
        remainingMinutes +
        " minute(s).",
      ui.ButtonSet.OK
    );
  } else {
    ui.alert(
      "Build Status",
      "Ready! You can click 'Update website now' anytime to deploy your latest inventory changes.",
      ui.ButtonSet.OK
    );
  }
}

