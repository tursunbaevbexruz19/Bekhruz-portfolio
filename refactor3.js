const fs = require('fs');
const { JSDOM } = require('jsdom');

let html = fs.readFileSync('index.html', 'utf8');
const dom = new JSDOM(html);
const document = dom.window.document;

// The projects and their screenshot names
const projectMap = {
  'lemontour': 'lemontour-full.jpg',
  'autohelp': 'autohelp-full.jpg',
  'edugrants': 'edugrants-full.jpg',
  'target': 'targetschool-full.jpg',
  'japanskill': 'japanskillcenter-full.jpg',
  'alivida': 'alivida-full.jpg',
  'abihayat': 'abihayat-full.jpg'
};

// Find all elements with data-carousel
const wrappers = document.querySelectorAll('.viewport-image-wrapper');
wrappers.forEach(wrapper => {
  const id = wrapper.getAttribute('data-carousel');
  const imgName = projectMap[id] || (id + '-full.jpg');
  
  wrapper.className = 'hover-scroll-window';
  wrapper.removeAttribute('data-carousel');
  
  wrapper.innerHTML = `<img src="screenshots/${imgName}" alt="${id} Full Page" class="hover-scroll-img" loading="lazy" decoding="async">`;
});

// Also fix any lingering hero images that might be using -slide-1.jpg
const heroImgs = document.querySelectorAll('img[src*="-slide-1.jpg"]');
heroImgs.forEach(img => {
  img.src = img.src.replace('-slide-1.jpg', '-full.jpg');
});

fs.writeFileSync('index.html', dom.serialize());
console.log('HTML successfully transformed using JSDOM!');
