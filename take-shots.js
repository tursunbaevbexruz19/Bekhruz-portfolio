const { chromium } = require('@playwright/test');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ ignoreHTTPSErrors: true });
  const shots = [
    { url: 'https://lemon-tour.uz', file: 'screenshots/lemontour-full.jpg' },
    { url: 'https://autohelp.uz', file: 'screenshots/autohelp-full.jpg' },
    { url: 'https://edugrants.uz', file: 'screenshots/edugrants-full.jpg' },
    { url: 'https://target-international-school.vercel.app', file: 'screenshots/targetschool-full.jpg' },
    { url: 'https://japan-skill-center.vercel.app', file: 'screenshots/japanskillcenter-full.jpg' },
    { url: 'https://alividaorganic.uz', file: 'screenshots/alivida-full.jpg' },
    { url: 'https://abihayat.uz', file: 'screenshots/abihayat-full.jpg' }
  ];

  for (const s of shots) {
    try {
      console.log('Processing:', s.url);
      const page = await context.newPage();
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto(s.url, { waitUntil: 'networkidle', timeout: 45000 });
      
      // Scroll down completely to trigger lazy loading and animations
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          let distance = 300;
          let timer = setInterval(() => {
            let scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;
            if (totalHeight >= scrollHeight - window.innerHeight) {
              clearInterval(timer);
              resolve();
            }
          }, 100);
        });
      });

      // Wait a moment for images to load, then scroll back to top
      await page.waitForTimeout(3000);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(1000);
      
      // Capture FULL PAGE
      await page.screenshot({ path: s.file, fullPage: true, type: 'jpeg', quality: 85 });
      console.log('OK:', s.file);
      await page.close();
    } catch (e) {
      console.log('FAIL:', s.file, '-', e.message.split('\n')[0]);
    }
  }

  await browser.close();
  console.log('Done capturing full-page screenshots.');
})();
