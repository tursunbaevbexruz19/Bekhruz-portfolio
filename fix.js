const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace the opening a tags
html = html.replace(/<a href="(.*?)" target="_blank" class="bento-image-wrapper">/g, 
  '<div onclick="window.open(\'$1\', \'_blank\')" class="bento-image-wrapper">');

// Replace the closing a tags.
html = html.replace(/<\/div>\s*<\/a>\s*<div class="bento-info">/g, 
  '</div>\n            </div>\n            <div class="bento-info">');

fs.writeFileSync('index.html', html);
console.log('HTML rewritten');
