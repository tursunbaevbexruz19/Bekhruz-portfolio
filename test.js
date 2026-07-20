const { chromium } = require("@playwright/test");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const runtimeErrors = [];

  page.on("pageerror", error => runtimeErrors.push(error.message));
  page.on("console", message => {
    if (message.type() === "error") runtimeErrors.push(message.text());
  });

  await page.goto("http://127.0.0.1:4173/", { waitUntil: "domcontentloaded" });
  await page.locator('[data-project-open="lemon-tour"]').first().click();

  const dialog = page.locator("#project-gallery-dialog");
  await dialog.waitFor({ state: "visible" });
  assert(await dialog.evaluate(element => element.open), "Project gallery did not open.");
  assert(await page.locator("#project-gallery-image").evaluate(image => image.complete && image.naturalWidth > 0), "Cover image did not load.");

  await page.locator("#project-gallery-next").click();
  assert(await page.locator("#project-gallery-position").textContent() === "02 / 13", "Next control did not advance the gallery.");

  await dialog.press("Escape");
  assert(!(await dialog.evaluate(element => element.open)), "Escape did not close the gallery.");
  assert(await page.locator('[data-project-open="lemon-tour"]').first().evaluate(element => element === document.activeElement), "Focus did not return to the cover.");
  assert(runtimeErrors.length === 0, `Browser errors: ${runtimeErrors.join(" | ")}`);

  await browser.close();
})();
