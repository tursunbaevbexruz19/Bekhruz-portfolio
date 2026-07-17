const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const projects = [
  'targetschool',
  'japanskillcenter'
];

for (const p of projects) {
  const startStr = `<div class="viewport-image-wrapper" data-carousel="${p}">`;
  const startIdx = html.indexOf(startStr);
  if (startIdx === -1) {
    console.log(`Could not find ${p}`);
    continue;
  }

  const blockEndStr = `              </div>\n            </div>\n            <div class="bento-info">`;
  const blockEndIdx = html.indexOf(blockEndStr, startIdx);
  
  if (blockEndIdx !== -1) {
    const chunk = html.substring(startIdx, blockEndIdx + 14); // up to the end of `              </div>`

    const replacement = `<div class="hover-scroll-window">
                <img src="screenshots/${p}-full.jpg" alt="${p} Full Page" class="hover-scroll-img" loading="lazy" decoding="async">
              </div>`;
              
    html = html.replace(chunk, replacement);
  }
}

fs.writeFileSync('index.html', html);
console.log('Fixed remaining projects');
