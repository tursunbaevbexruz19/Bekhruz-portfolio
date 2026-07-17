const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  
  let popupOpened = false;
  context.on('page', () => {
    popupOpened = true;
    console.log('A popup/new tab was opened!');
  });
  
  await page.goto('file:///' + __dirname + '/index.html');
  console.log('Page loaded');
  
  await page.waitForTimeout(1000);
  
  console.log('Clicking next button on lemontour...');
  const nextBtn = await page.$$('.cnav-btn');
  await nextBtn[1].click(); 
  
  await page.waitForTimeout(500);
  console.log('Popup opened after button click:', popupOpened);
  
  console.log('Clicking the bento wrapper (image)...');
  await page.locator('.bento-image-wrapper').first().click({ position: { x: 10, y: 10 } });
  
  await page.waitForTimeout(500);
  console.log('Popup opened after wrapper click:', popupOpened);
  
  await browser.close();
})();
