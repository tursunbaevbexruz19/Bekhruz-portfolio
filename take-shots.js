const { chromium } = require('@playwright/test');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ ignoreHTTPSErrors: true });
  const shots = [
    // Lemon Tour
    { url: 'https://lemon-tour.uz', file: 'screenshots/lemontour-slide-1.jpg', scrollY: 0 },
    { url: 'https://lemon-tour.uz', file: 'screenshots/lemontour-slide-2.jpg', scrollY: 1000 },
    { url: 'https://lemon-tour.uz', file: 'screenshots/lemontour-slide-3.jpg', scrollY: 2500 },

    // AutoHelp
    { url: 'https://autohelp.uz', file: 'screenshots/autohelp-slide-1.jpg', scrollY: 0 },
    { url: 'https://autohelp.uz', file: 'screenshots/autohelp-slide-2.jpg', scrollY: 800 },
    { url: 'https://autohelp.uz', file: 'screenshots/autohelp-slide-3.jpg', scrollY: 1600 },

    // EduGrants
    { url: 'https://edugrants.uz', file: 'screenshots/edugrants-slide-1.jpg', scrollY: 0 },
    { url: 'https://edugrants.uz', file: 'screenshots/edugrants-slide-2.jpg', scrollY: 800 },
    { url: 'https://edugrants.uz', file: 'screenshots/edugrants-slide-3.jpg', scrollY: 1600 },

    // Target School
    { url: 'https://target-international-school.vercel.app', file: 'screenshots/targetschool-slide-1.jpg', scrollY: 0 },
    { url: 'https://target-international-school.vercel.app', file: 'screenshots/targetschool-slide-2.jpg', scrollY: 800 },
    { url: 'https://target-international-school.vercel.app', file: 'screenshots/targetschool-slide-3.jpg', scrollY: 1600 },

    // Japan Skill Center
    { url: 'https://japan-skill-center.vercel.app', file: 'screenshots/japanskillcenter-slide-1.jpg', scrollY: 0 },
    { url: 'https://japan-skill-center.vercel.app', file: 'screenshots/japanskillcenter-slide-2.jpg', scrollY: 1000 },
    { url: 'https://japan-skill-center.vercel.app', file: 'screenshots/japanskillcenter-slide-3.jpg', scrollY: 2000 },
    { url: 'https://japan-skill-center.vercel.app', file: 'screenshots/japanskillcenter-slide-4.jpg', scrollY: 3000 }, // Salary calculator section

    // Alivida
    { url: 'https://alividaorganic.uz', file: 'screenshots/alivida-slide-1.jpg', scrollY: 0 },
    { url: 'https://alividaorganic.uz', file: 'screenshots/alivida-slide-2.jpg', scrollY: 800 },
    { url: 'https://alividaorganic.uz', file: 'screenshots/alivida-slide-3.jpg', scrollY: 1600 },

    // Abihayat
    { url: 'https://abihayat.uz', file: 'screenshots/abihayat-slide-1.jpg', scrollY: 0 },
    { url: 'https://abihayat.uz', file: 'screenshots/abihayat-slide-2.jpg', scrollY: 800 },
    { url: 'https://abihayat.uz', file: 'screenshots/abihayat-slide-3.jpg', scrollY: 1600 },
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
      
      await page.screenshot({ path: s.file, type: 'jpeg', quality: 80 });
      console.log('OK:', s.file);
      await page.close();
    } catch (e) {
      console.log('FAIL:', s.file, '-', e.message.split('\n')[0]);
    }
  }

  await browser.close();
  console.log('Done.');
})();
