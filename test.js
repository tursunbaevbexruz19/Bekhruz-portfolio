const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.type(), msg.text()));
  page.on('pageerror', error => console.log('BROWSER ERROR:', error));
  
  await page.goto('file:///' + __dirname + '/index.html');
  console.log('Page loaded');
  
  await page.waitForTimeout(1000);
  
  console.log('Hovering to reveal nav...');
  await page.hover('.bento-image-wrapper');
  
  await page.waitForTimeout(500);
  
  console.log('Clicking next button on lemontour...');
  const nextBtn = await page.$$('.cnav-btn');
  await nextBtn[1].click(); // index 1 is next button of first carousel
  
  await page.waitForTimeout(1000);
  
  console.log('Clicking next again...');
  await nextBtn[1].click();
  
  await page.waitForTimeout(1000);
  
  console.log('Done.');
  await browser.close();
})();
