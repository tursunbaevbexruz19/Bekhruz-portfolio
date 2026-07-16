const { chromium } = require('@playwright/test');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ ignoreHTTPSErrors: true });
  const shots = [
    // Lemon Tour
    { url: 'https://lemon-tour.uz', file: 'screenshots/lemon-1-home.jpg', scrollY: 0 },
    { url: 'https://lemon-tour.uz', file: 'screenshots/lemon-2-tours.jpg', scrollY: 700 },
    // AutoHelp
    { url: 'https://autohelp.uz', file: 'screenshots/autohelp-1-home.jpg', scrollY: 0 },
    { url: 'https://autohelp.uz', file: 'screenshots/autohelp-2-services.jpg', scrollY: 600 },
    // EduGrants
    { url: 'https://edugrants.uz', file: 'screenshots/edugrants-1-home.jpg', scrollY: 0 },
    { url: 'https://edugrants.uz', file: 'screenshots/edugrants-2-inner.jpg', scrollY: 700 },
    // Target School
    { url: 'https://target-international-school.vercel.app', file: 'screenshots/target-1-home.jpg', scrollY: 0 },
    { url: 'https://target-international-school.vercel.app', file: 'screenshots/target-2-inner.jpg', scrollY: 750 },
    // Japan Skill Center
    { url: 'https://japan-skill-center.vercel.app', file: 'screenshots/japan-1-home.jpg', scrollY: 0 },
    { url: 'https://japan-skill-center.vercel.app', file: 'screenshots/japan-2-inner.jpg', scrollY: 700 },
    // Alivida
    { url: 'https://alividaorganic.uz', file: 'screenshots/alivida-1-home.jpg', scrollY: 0 },
    { url: 'https://alividaorganic.uz', file: 'screenshots/alivida-2-inner.jpg', scrollY: 700 },
    // Abihayat
    { url: 'https://abihayat.uz', file: 'screenshots/abihayat-1-home.jpg', scrollY: 0 },
    { url: 'https://abihayat.uz', file: 'screenshots/abihayat-2-inner.jpg', scrollY: 600 },
  ];

  for (const s of shots) {
    try {
      const page = await context.newPage();
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto(s.url, { waitUntil: 'networkidle', timeout: 45000 });
      
      // Scroll down to the bottom to trigger lazy loading and animations
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          let distance = 200;
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

      // Wait a moment for images to load, then scroll back to where we want the shot
      await page.waitForTimeout(3000);
      
      if (s.scrollY > 0) {
        await page.evaluate((y) => window.scrollTo(0, y), s.scrollY);
        await page.waitForTimeout(800);
      } else {
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.waitForTimeout(800);
      }
      
      await page.screenshot({ path: s.file, fullPage: true, type: 'jpeg', quality: 80 });
      console.log('OK:', s.file);
      await page.close();
    } catch (e) {
      console.log('FAIL:', s.file, '-', e.message.split('\n')[0]);
    }
  }

  await browser.close();
  console.log('Done.');
})();
