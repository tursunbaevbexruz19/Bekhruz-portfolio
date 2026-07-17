const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const newMeta = `  <!-- Open Graph / Premium Telegram Previews -->
  <meta property="og:title" content="Bekhruz Tursunboev | B2B IT Engineer & Automation Architect">
  <meta property="og:description" content="Biznes jarayonlarini raqamlashtirish, qo'l mehnatini qisqartirish va sotuv konversiyasini oshirish bo'yicha maxsus IT muhandisi. 10+ Muvaffaqiyatli B2B loyihalar.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://bekhruz-portfolio.vercel.app/">
  <meta property="og:image" content="https://bekhruz-portfolio.vercel.app/og-image.jpg">

  <!-- Twitter / Large Card Support -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Bekhruz Tursunboev | B2B IT Engineer & Automation Architect">
  <meta name="twitter:description" content="Biznes jarayonlarini raqamlashtirish, qo'l mehnatini qisqartirish va sotuv konversiyasini oshirish bo'yicha maxsus IT muhandisi. 10+ Muvaffaqiyatli B2B loyihalar.">
  <meta name="twitter:image" content="https://bekhruz-portfolio.vercel.app/og-image.jpg">`;

html = html.replace(/  <!-- Open Graph \/ B2B SEO -->[\s\S]*?<meta property=\"og:image\"[^>]*>/, newMeta);

fs.writeFileSync('index.html', html);
console.log('OG updated successfully.');
