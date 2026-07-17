const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

// Strip out old carousel CSS
const startRegex = /\/\* Viewport & Carousel \*\//;
const endRegex = /\/\* Contact Section \*\//;

const startIdx = css.search(startRegex);
const endIdx = css.search(endRegex);

if (startIdx !== -1 && endIdx !== -1) {
  const replacement = `/* Hover Scroll Mac Window */
.hover-scroll-window {
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
  background: #f8fafc;
}

/* We must ensure bento-image-wrapper has height to contain it */
.bento-image-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 380px; /* browser header (40px) + window (340px) */
  background: #fff;
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
  /* smoothly scroll to the bottom of the image */
  transform: translateY(calc(-100% + 340px));
  transition: transform 5s cubic-bezier(0.25, 1, 0.5, 1);
}

/* Touch devices native scroll */
@media (max-width: 1024px) {
  .hover-scroll-window {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  /* Hide scrollbar */
  .hover-scroll-window::-webkit-scrollbar {
    display: none;
  }
  .bento-image-wrapper:hover .hover-scroll-img {
    transform: none; /* Disable auto-scroll on touch, rely on native scroll */
  }
}

`;
  css = css.substring(0, startIdx) + replacement + css.substring(endIdx);
  fs.writeFileSync('style.css', css);
  console.log('CSS updated successfully.');
} else {
  console.log('Could not find CSS markers.');
}
