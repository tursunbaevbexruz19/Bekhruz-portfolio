const { chromium } = require("@playwright/test");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

  await page.goto("http://127.0.0.1:4173/", { waitUntil: "domcontentloaded" });
  await page.locator('[data-project-open="alivida"]').first().click();
  await page.locator("#project-gallery-dialog").waitFor({ state: "visible" });

  const mobileState = await page.evaluate(() => ({
    dialogOpen: document.getElementById("project-gallery-dialog").open,
    bodyWidth: document.body.scrollWidth,
    viewportWidth: document.documentElement.clientWidth,
    imageLoaded: document.getElementById("project-gallery-image").complete
  }));

  assert(mobileState.dialogOpen, "Mobile gallery did not open.");
  assert(mobileState.bodyWidth === mobileState.viewportWidth, "Mobile layout has horizontal page overflow.");
  assert(mobileState.imageLoaded, "Mobile cover image did not load.");

  await page.locator("#project-gallery-next").click();
  assert(await page.locator("#project-gallery-position").textContent() === "02 / 14", "Mobile next control did not advance.");

  await page.locator("#project-gallery-close").click();
  assert(!(await page.locator("#project-gallery-dialog").evaluate(element => element.open)), "Mobile close control did not close the gallery.");

  await browser.close();
})();
