// -------------------------------------------------------------
// Bekhruz Tursunboev Portfolio JavaScript Logic
// Bilingual Translations, Calculator, and Carousel Controls
// -------------------------------------------------------------

// 1. Translation Dictionary (Uzbek & Russian)
const translations = {
  uz: {
    hero_logo: "Bekhruz Tursunboev",
    hero_sub: "Portfolio",
    hero_title: "Biznes jarayonlarini raqamlashtirish, qo'l mehnatini qisqartirish va sotuv konversiyasini oshirish muhandisi.",
    status_available: "Available For Work",
    sec_work_title: "Tanlangan loyihalar",
    contact_title: "Bog'lanish",
    
    // Project Tags
    tag_tourism: "Turizm",
    tag_api: "API Integratsiya",
    tag_kassabot: "KassaBot",
    tag_service: "Xizmat ko'rsatish",
    tag_fsm: "Dispatcher bot",
    tag_education: "Ta'lim",
    tag_social: "Ijtimoiy",
    tag_corp: "Korporativ",
    tag_job: "Ishga joylashish",
    tag_portal: "Portal",
    tag_sale: "Sotuvlar",
    tag_health: "Salomatlik",
    
    // Project Specific Descriptions
    desc_lemon: "Turizm biznesini to'liq avtomatlashtirish platformasi. SAMO XML B2B agregatori va sayohatlar sotuv tizimi. Integratsiyalangan ichki CRM, Germaniya proksi serveri va moliyaviy oqimlarni boshqaruvchi 'KassaBot' Telegram tizimi.",
    desc_autohelp: "Samarqandda 24/7 mobil avto yordam platformasi va dispatcher Telegram boti. Akkumulyator, evakuator va vulkanizatsiya buyurtmalarini operatorlar va ustalar o'rtasida taqsimlash tizimi.",
    desc_edugrants: "Xalqaro grantlar va bepul ta'lim stipendiyalarini qidirish portali. 20,000+ faol talaba auditoriyasi va aqlli qidiruv tizimi.",
    desc_target: "Toshkentdagi Target xususiy maktabining 3 tildagi rasmiy portali. Biznes va IT yo'nalishi, SAT/IELTS tayyorlov ko'rsatkichlari va kampuslar xaritasi integratsiyasi.",
    desc_japan: "TDShU huzuridagi yapon tili va Tokutei Ginou markazi portali. Yapon kompaniyalari bilan to'g'ridan-to'g'ri shartnomalar, oylik maosh interaktiv kalkulyatori va video-darslar.",
    desc_alivida: "Turkiyada ishlab chiqarilgan organik mahsulotlar savdosi uchun yuqori konversiyali lending sahifalar. Interaktiv taqqoslash slayderi va buyurtmalarni Telegram botga yuborish.",

    // Short descriptions for B2B Bento Grid
    desc_lemon_short: "Turizm biznesi uchun B2B agregator va CRM.",
    desc_autohelp_short: "24/7 avto yordam platformasi va dispatcher boti.",
    desc_edugrants_short: "Xalqaro grantlar qidiruv portali.",
    desc_target_short: "Xususiy maktab portali va xarita integratsiyasi.",
    desc_japan_short: "Tokutei Ginou tili markazi portali.",
    desc_alivida_short: "Organik mahsulotlar uchun konversiyali lending sahifalar.",

    // Salary calculator widget labels (unused in new design but kept for safety)
    lbl_work_hours: "Oylik ish vaqti (Soat)",
    lbl_hourly_rate: "Soatbay tarif (JPY)",
    lbl_japan_salary: "Yaponiyadagi oylik",
    lbl_uzb_equivalent: "O'zbekistondagi ekvivalent",
    
    // Pricing Packages
    sec_pricing_label: "XIZMATLAR",
    sec_pricing_title: "Hamkorlik Paketlari",
    pkg_badge_popular: "Eng talabgir",
    pkg_1_title: "Sotuv Platformasi",
    pkg_1_desc: "Mijozlarni jalb qilish va sotuvlarni oshirish uchun ilk qadam.",
    pkg_1_f1: "Konversiyali Landing sahifa",
    pkg_1_f2: "Mijozlar Telegram boti",
    pkg_1_f3: "Asosiy SEO va analitika",
    pkg_2_title: "Biznesni Avtomatlashtirish",
    pkg_2_desc: "Sotuv bo'limi va ishchi xodimlarni boshqarish tizimi.",
    pkg_2_f1: "Ichki CRM va Buyurtmalar paneli",
    pkg_2_f2: "Payme/Click to'lov integratsiyasi",
    pkg_2_f3: "Xodimlar uchun Dispatcher boti",
    pkg_3_title: "Korporativ Yechimlar",
    pkg_3_desc: "Yirik korxonalar uchun maxsus ishlab chiqilgan murakkab tizimlar.",
    pkg_3_price: "Kelishilgan",
    pkg_3_f1: "B2B XML API Integratsiyalar",
    pkg_3_f2: "Maxsus mikroservis arxitekturasi",
    pkg_3_f3: "Moliya oqimlari tizimi",
    
    // Credentials
    cred_1_title: "Yillik tajriba",
    cred_1_desc: "2021-yildan beri professional kod yozaman.",
    cred_2_title: "Muvaffaqiyatli loyihalar",
    cred_2_desc: "Turizm, ta'lim, sotuv va yordam ko'rsatish sohalarida.",
    cred_3_title: "Hamkorlik",
    cred_3_desc: "Tizimni bevosita muhandis bilan qurasiz, qo'shimcha to'lovlarsiz."
  },
  ru: {
    hero_logo: "Бекхруз Турсунбоев",
    hero_sub: "Портфолио",
    hero_title: "Инженер по автоматизации бизнес-процессов, сокращению ручного труда и повышению конверсии продаж.",
    status_available: "Открыт для предложений",
    sec_work_title: "Избранные работы",
    contact_title: "Контакты",
    
    // Project Tags
    tag_tourism: "Туризм",
    tag_api: "Интеграция API",
    tag_kassabot: "KassaBot",
    tag_service: "Услуги",
    tag_fsm: "Диспетчерский бот",
    tag_education: "Образование",
    tag_social: "Социальный",
    tag_corp: "Корпоративный",
    tag_job: "Трудоустройство",
    tag_portal: "Портал",
    tag_sale: "Продажи",
    tag_health: "Здоровье",
    
    // Project Specific Descriptions
    desc_lemon: "Платформа полной автоматизации туристического бизнеса. Агрегатор туров B2B SAMO XML и система продаж. Интегрированная внутренняя CRM, немецкий прокси-сервер и Telegram-система управления финансовыми потоками 'KassaBot'.",
    desc_autohelp: "Платформа автопомощи 24/7 в Самарканде и диспетчерский Telegram-бот. Распределение заказов на эвакуатор, аккумулятор и вулканизацию между мастерами.",
    desc_edugrants: "Платформа поиска международных грантов и стипендий. Аудитория более 20,000 активных студентов и умный поиск.",
    desc_target: "Официальный 3-язычный портал частной школы Target в Ташкенте. Направления IT и Бизнеса, показатели SAT/IELTS и карты филиалов.",
    desc_japan: "Портал центра японского языка и Tokutei Ginou при ТГОВ. Прямые контракты, интерактивный калькулятор зарплат и видеоуроки.",
    desc_alivida: "Высококонверсионные лендинги для продажи органических продуктов из Турции. Слайдер сравнения и отправка заказов в Telegram.",

    // Short descriptions for B2B Bento Grid
    desc_lemon_short: "B2B агрегатор и CRM для туристического бизнеса.",
    desc_autohelp_short: "Платформа автопомощи 24/7 и диспетчерский бот.",
    desc_edugrants_short: "Портал поиска международных грантов.",
    desc_target_short: "Портал частной школы и интеграция карт.",
    desc_japan_short: "Портал языкового центра Tokutei Ginou.",
    desc_alivida_short: "Конверсионные лендинги для органических продуктов.",

    // Salary calculator labels
    lbl_work_hours: "Рабочее время (Часы)",
    lbl_hourly_rate: "Почасовая ставка (JPY)",
    lbl_japan_salary: "Зарплата в Японии",
    lbl_uzb_equivalent: "Эквивалент в Узбекистане",
    
    // Pricing Packages
    sec_pricing_label: "УСЛУГИ",
    sec_pricing_title: "Пакеты сотрудничества",
    pkg_badge_popular: "Популярный",
    pkg_1_title: "Платформа Продаж",
    pkg_1_desc: "Первый шаг к привлечению клиентов и увеличению продаж.",
    pkg_1_f1: "Конверсионный Landing Page",
    pkg_1_f2: "Клиентский Telegram бот",
    pkg_1_f3: "Базовое SEO и аналитика",
    pkg_2_title: "Автоматизация Бизнеса",
    pkg_2_desc: "Система управления отделом продаж и персоналом.",
    pkg_2_f1: "Внутренняя CRM и панель заказов",
    pkg_2_f2: "Интеграция оплат Payme/Click",
    pkg_2_f3: "Диспетчерский бот для сотрудников",
    pkg_3_title: "Корпоративные Решения",
    pkg_3_desc: "Сложные системы, разработанные специально для крупных предприятий.",
    pkg_3_price: "Договорная",
    pkg_3_f1: "Интеграция B2B XML API",
    pkg_3_f2: "Кастомная микросервисная архитектура",
    pkg_3_f3: "Система управления финансами",
    
    // Credentials
    cred_1_title: "Лет опыта",
    cred_1_desc: "Профессионально пишу код с 2021 года.",
    cred_2_title: "Успешных проектов",
    cred_2_desc: "В сфере туризма, образования, продаж и техподдержки.",
    cred_3_title: "Прямое сотрудничество",
    cred_3_desc: "Вы работаете напрямую с инженером, без лишних переплат."
  }
};

// Current Active Language
let currentLang = "uz";

// Function to Change Language
function changeLanguage(lang) {
  if (lang !== "uz" && lang !== "ru") return;
  currentLang = lang;

  // Sync document level lang attribute
  document.documentElement.setAttribute("lang", lang);

  // Toggle active class on lang switcher buttons
  const btnUz = document.getElementById("btn-lang-uz");
  const btnRu = document.getElementById("btn-lang-ru");
  if (btnUz) btnUz.classList.toggle("active", lang === "uz");
  if (btnRu) btnRu.classList.toggle("active", lang === "ru");

  // Translate all elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}

// -------------------------------------------------------------
// Screenshot Carousel Controller (High-End Animation)
// -------------------------------------------------------------
const carouselState = {};

function carouselInit(id) {
  if (!carouselState[id]) {
    const el = document.querySelector(`[data-carousel="${id}"]`);
    if (!el) return;
    const slides = el.querySelectorAll('.carousel-slide');
    carouselState[id] = { current: 0, total: slides.length };
  }
}

function carouselGo(id, index, direction = 'next') {
  carouselInit(id);
  const el = document.querySelector(`[data-carousel="${id}"]`);
  if (!el) return;

  const slides = el.querySelectorAll('.carousel-slide');
  const dots = el.querySelectorAll('.cdot');
  const state = carouselState[id];

  // Set direction class on container for CSS clip-path logic
  if (direction === 'prev') {
    el.classList.add('moving-prev');
  } else {
    el.classList.remove('moving-prev');
  }

  // Remove active from current, assign it to a 'leaving' state based on direction
  const oldSlide = slides[state.current];
  oldSlide.classList.remove('active');
  oldSlide.classList.remove('leave-next', 'leave-prev');
  oldSlide.classList.add(direction === 'next' ? 'leave-next' : 'leave-prev');

  if (dots[state.current]) dots[state.current].classList.remove('active');

  state.current = (index + state.total) % state.total;

  const newSlide = slides[state.current];
  // Remove any old leaving classes from the incoming slide
  newSlide.classList.remove('leave-next', 'leave-prev');
  
  // Trigger reflow to ensure CSS transitions apply from base state
  void newSlide.offsetWidth; 

  newSlide.classList.add('active');
  if (dots[state.current]) dots[state.current].classList.add('active');
}

function carouselNext(id) {
  carouselInit(id);
  carouselGo(id, carouselState[id].current + 1, 'next');
}

function carouselPrev(id) {
  carouselInit(id);
  carouselGo(id, carouselState[id].current - 1, 'prev');
}

// Expose globally
window.carouselGo = carouselGo;
window.carouselNext = carouselNext;
window.carouselPrev = carouselPrev;

// -------------------------------------------------------------
// Pricing Calculator Logic
// -------------------------------------------------------------
const basePrice = 1200; // Updated to match B2B base starting price logic
const landingPrice = 100;
const botPrice = 300;
const crmPrice = 1500;
const apiPrice = 1000;
const uzsExchangeRate = 12700; // 1 USD = 12,700 UZS

const calcTriggers = document.querySelectorAll(".calc-trigger");
const priceUsdDisplay = document.getElementById("price-usd-value");
const priceUzsDisplay = document.getElementById("price-uzs-value");

function calculateTotal() {
  if (!priceUsdDisplay || !priceUzsDisplay) return;

  let totalUSD = basePrice;
  
  const landingOpt = document.getElementById("opt-landing");
  const botOpt = document.getElementById("opt-bot");
  const cmsOpt = document.getElementById("opt-cms");
  const apiOpt = document.getElementById("opt-api");

  if (landingOpt && landingOpt.checked) totalUSD += landingPrice;
  if (botOpt && botOpt.checked) totalUSD += botPrice;
  if (cmsOpt && cmsOpt.checked) totalUSD += crmPrice;
  if (apiOpt && apiOpt.checked) totalUSD += apiPrice;
  
  const totalUZS = totalUSD * uzsExchangeRate;
  
  if (totalUSD > 0) {
    priceUsdDisplay.textContent = `$${totalUSD.toLocaleString()}+`;
    priceUzsDisplay.textContent = `~ ${totalUZS.toLocaleString()} UZS+`;
  } else {
    priceUsdDisplay.textContent = `$0`;
    priceUzsDisplay.textContent = `0 UZS`;
  }
}

calcTriggers.forEach(trigger => {
  trigger.addEventListener("change", calculateTotal);
});

// -------------------------------------------------------------
// Global Bindings for HTML Events
// -------------------------------------------------------------
window.changeLanguage = changeLanguage;

// -------------------------------------------------------------
// Keyboard Navigation for Active Carousel
// -------------------------------------------------------------
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;

    // Find the carousel closest to viewport center
    const carousels = document.querySelectorAll('.viewport-image-wrapper[data-carousel]');
    let best = null, bestDist = Infinity;

    carousels.forEach(el => {
      const rect = el.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const dist = Math.abs(centerY - window.innerHeight / 2);
      if (dist < bestDist) { bestDist = dist; best = el; }
    });

    if (!best) return;
    const id = best.getAttribute('data-carousel');
    if (e.key === 'ArrowLeft') carouselPrev(id);
    else carouselNext(id);
  });
}

// -------------------------------------------------------------
// Touch Swipe Support for Carousels
// -------------------------------------------------------------
function initTouchSwipe() {
  document.querySelectorAll('.viewport-image-wrapper[data-carousel]').forEach(el => {
    let startX = 0;
    const id = el.getAttribute('data-carousel');

    el.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    }, { passive: true });

    el.addEventListener('touchend', e => {
      const dx = startX - e.changedTouches[0].clientX;
      if (Math.abs(dx) < 40) return; // ignore tiny swipes
      if (dx > 0) carouselNext(id);
      else carouselPrev(id);
    }, { passive: true });
  });
}

// -------------------------------------------------------------
// Initialization on Load
// -------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  changeLanguage("uz");
  calculateTotal();
  initKeyboardNav();
  initTouchSwipe();
  
  // Prevent carousel clicks from bubbling up to the parent <a> tag and navigating away
  document.querySelectorAll('.cnav-btn, .cdot, .carousel-nav, .carousel-dots').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
  });
});
