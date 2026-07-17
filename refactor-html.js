const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const projects = [
  'lemontour',
  'autohelp',
  'edugrants',
  'target',
  'japanskill',
  'alivida',
  'abihayat'
];

for (const p of projects) {
  const startStr = `<div class="viewport-image-wrapper" data-carousel="${p}">`;
  const startIdx = html.indexOf(startStr);
  if (startIdx === -1) {
    console.log(`Could not find ${p}`);
    continue;
  }

  // Find the end of this block. It ends with:
  //               </div>
  //             </div>
  //             <div class="bento-info">
  const searchEnd = html.indexOf('<div class="bento-info">', startIdx);
  // the closing tag of the viewport-image-wrapper is 2 divs before bento-info.
  // We can just replace from startStr up to the last </div> before bento-info
  
  let endIdx = searchEnd;
  // find the closing </div> of bento-image-wrapper
  endIdx = html.lastIndexOf('</div>', searchEnd - 1);
  // find the closing </div> of viewport-image-wrapper
  endIdx = html.lastIndexOf('</div>', endIdx - 1);
  // Actually, wait. It's much simpler. We know exactly what is inside viewport-image-wrapper.
  // We just find startStr, and we find the next '</div>\n            </div>\n            <div class="bento-info">'
  
  const blockEndStr = `              </div>\n            </div>\n            <div class="bento-info">`;
  const blockEndIdx = html.indexOf(blockEndStr, startIdx);
  
  if (blockEndIdx !== -1) {
    const chunk = html.substring(startIdx, blockEndIdx + 14); // up to the end of `              </div>`
    
    let projName = p;
    if (p === 'target') projName = 'targetschool';
    if (p === 'japanskill') projName = 'japanskillcenter';

    const replacement = `<div class="hover-scroll-window">
                <img src="screenshots/${projName}-full.jpg" alt="${projName} Full Page" class="hover-scroll-img" loading="lazy" decoding="async">
              </div>`;
              
    html = html.replace(chunk, replacement);
  }
}

// Fix hero section images
html = html.replace('screenshots/autohelp-slide-1.jpg', 'screenshots/autohelp-full.jpg');
html = html.replace('screenshots/lemontour-slide-1.jpg', 'screenshots/lemontour-full.jpg');
html = html.replace('screenshots/alivida-slide-1.jpg', 'screenshots/alivida-full.jpg');

fs.writeFileSync('index.html', html);
console.log('HTML Refactored Successfully');
