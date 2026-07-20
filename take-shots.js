const { chromium } = require("@playwright/test");
const fs = require("fs");
const path = require("path");
const projects = require("./projects.js");

const VIEWPORT = { width: 1440, height: 900 };
const OUTPUT_ROOT = path.join(__dirname, "screenshots", "projects");
const requestedProject = process.env.SCREENSHOT_PROJECT;

function selectedProjects() {
  if (!requestedProject) return projects;

  const selected = projects.filter((project) => project.id.includes(requestedProject));
  if (selected.length === 0) {
    throw new Error(`No screenshot project matches SCREENSHOT_PROJECT=${requestedProject}`);
  }
  return selected;
}

async function waitForAssets(page) {
  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;

    const pendingImages = [...document.images]
      .filter((image) => !image.complete)
      .map((image) => new Promise((resolve) => {
        const done = () => resolve();
        image.addEventListener("load", done, { once: true });
        image.addEventListener("error", done, { once: true });
        setTimeout(done, 5000);
      }));

    await Promise.all(pendingImages);
  });
}

async function warmPage(page) {
  await page.evaluate(async () => {
    const root = document.scrollingElement || document.documentElement;
    let previousHeight = 0;
    let stablePasses = 0;

    for (let pass = 0; pass < 90 && stablePasses < 3; pass += 1) {
      const height = root.scrollHeight;
      window.scrollTo({ top: Math.min(root.scrollTop + 480, height), behavior: "instant" });
      await new Promise((resolve) => setTimeout(resolve, 140));

      if (root.scrollTop + window.innerHeight >= height - 8) {
        stablePasses = height === previousHeight ? stablePasses + 1 : 0;
        previousHeight = height;
      }
    }

    window.scrollTo({ top: 0, behavior: "instant" });
  });

  await page.waitForTimeout(1800);
  await waitForAssets(page);

  await page.addStyleTag({ content: `
    html { scroll-behavior: auto !important; }
    *, *::before, *::after {
      caret-color: transparent !important;
      animation-delay: 0s !important;
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  ` });
}

async function positionView(page, view) {
  const position = await page.evaluate(({ selector, scrollY }) => {
    const target = selector ? document.querySelector(selector) : null;
    const requestedTop = target
      ? target.getBoundingClientRect().top + window.scrollY - 24
      : Number(scrollY || 0);
    const maxTop = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const top = Math.max(0, Math.min(requestedTop, maxTop));
    window.scrollTo({ top, behavior: "instant" });
    return { found: !selector || Boolean(target), top: Math.round(top) };
  }, view);

  await page.waitForTimeout(650);
  return position;
}

async function captureProject(context, project) {
  const projectDirectory = path.join(OUTPUT_ROOT, project.id);
  fs.mkdirSync(projectDirectory, { recursive: true });
  let firstPage = true;

  for (const group of project.captureGroups) {
    const page = await context.newPage();

    try {
      console.log(`[${project.id}] loading ${group.url}`);
      await page.goto(group.url, { waitUntil: "domcontentloaded", timeout: 60000 });
      await page.waitForTimeout(firstPage ? project.initialWaitMs : 5000);
      await warmPage(page);

      const blockedByAutomationGuard = await page.evaluate(() => {
        const pageText = document.body?.innerText || "";
        return /access denied|automated scraping|automated access/i.test(pageText.slice(0, 2000));
      });

      if (blockedByAutomationGuard) {
        const missingCapture = group.views.find((view) => (
          !fs.existsSync(path.join(projectDirectory, `${view.slug}.jpg`))
        ));

        if (missingCapture) {
          throw new Error(
            `Automation guard blocked ${group.url}; missing preserved capture ${missingCapture.slug}.jpg`
          );
        }

        console.warn(
          `[${project.id}] automation guard blocked ${group.url}; preserved existing verified captures`
        );
        continue;
      }

      for (const view of group.views) {
        const position = await positionView(page, view);
        const outputPath = path.join(projectDirectory, `${view.slug}.jpg`);

        if (!position.found) {
          console.warn(`[${project.id}] selector missing for ${view.slug}; captured fallback position`);
        }

        await page.screenshot({
          path: outputPath,
          type: "jpeg",
          quality: 88,
          fullPage: false
        });

        console.log(`[${project.id}] ${view.slug}.jpg @ ${position.top}px`);
      }
    } catch (error) {
      console.error(`[${project.id}] failed ${group.url}: ${error.message.split("\n")[0]}`);
    } finally {
      firstPage = false;
      await page.close();
    }
  }
}

(async () => {
  fs.mkdirSync(OUTPUT_ROOT, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext({
    ignoreHTTPSErrors: true,
    viewport: VIEWPORT,
    deviceScaleFactor: 1,
    colorScheme: "light"
  });

  for (const project of selectedProjects()) {
    await captureProject(context, project);
  }

  await browser.close();
  console.log("Project gallery capture complete.");
})();
