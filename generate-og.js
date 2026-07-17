const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 2 // high resolution for crisp text
  });
  const page = await context.newPage();
  
  await page.goto('file:///' + __dirname + '/index.html');
  
  // Wait for the hero section to animate in
  await page.waitForTimeout(2000);
  
  // Scroll slightly down to frame it perfectly if needed
  // await page.evaluate(() => window.scrollBy(0, 100));
  
  // Take a full viewport screenshot
  await page.screenshot({ path: 'og-image.jpg' });
  
  await browser.close();
  console.log('OG Image generated successfully.');
})();
