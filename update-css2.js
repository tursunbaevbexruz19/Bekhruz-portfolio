const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const startStr = '/* Premium Slider Animation Container */';
const endStr = '.bento-info {';

const startIdx = css.indexOf(startStr);
const endIdx = css.indexOf(endStr);

if (startIdx !== -1 && endIdx !== -1) {
  const replacement = `/* Hover Scroll Mac Window */
.hover-scroll-window {
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
  background: var(--bg-card);
}

.bento-image-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 380px; /* browser header (40px) + window (340px) */
  background: var(--bg-card);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid rgba(0,0,0,0.06);
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.bento-image-wrapper:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.08);
}

.hover-scroll-img {
  width: 100%;
  height: auto;
  display: block;
  transform: translateY(0);
  transition: transform 1.5s cubic-bezier(0.25, 1, 0.5, 1);
  will-change: transform;
}

.bento-image-wrapper:hover .hover-scroll-img {
  transform: translateY(calc(-100% + 340px));
  transition: transform 5s cubic-bezier(0.25, 1, 0.5, 1);
}

@media (max-width: 1024px) {
  .hover-scroll-window {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  .hover-scroll-window::-webkit-scrollbar {
    display: none;
  }
  .bento-image-wrapper:hover .hover-scroll-img {
    transform: none; 
  }
}

`;
  css = css.substring(0, startIdx) + replacement + css.substring(endIdx);
  fs.writeFileSync('style.css', css);
  console.log('CSS replaced');
}
