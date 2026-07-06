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

    // Salary calculator widget labels (unused in new design but kept for safety)
    lbl_work_hours: "Oylik ish vaqti (Soat)",
    lbl_hourly_rate: "Soatbay tarif (JPY)",
    lbl_japan_salary: "Yaponiyadagi oylik",
    lbl_uzb_equivalent: "O'zbekistondagi ekvivalent",
    
    // Pricing Calculator
    sec_pricing_label: "NARXLAR",
    sec_pricing_title: "Taxminiy qiymati",
    calc_subtitle: "Modullar tarkibi",
    calc_total_title: "Boshlang'ich qiymat",
    opt_1_name: "Biznes veb-sayti / Landing sahifasi (+ $100+)",
    opt_1_desc: "Sotuvlar uchun moslashtirilgan sayt.",
    opt_2_name: "Mijozlar Telegram boti (+ $300+)",
    opt_2_desc: "Buyurtmalarni qabul qilish kanali.",
    opt_3_name: "Ichki CRM / Buyurtmalar paneli (+ $1,500)",
    opt_3_desc: "Mijozlar va buyurtmalar ma'lumotlar bazasi.",
    opt_4_name: "B2B va to'lov tizimlari integratsiyasi (+ $1,000)",
    opt_4_desc: "Payme/Click yoki operatorlar XML API.",
    calc_notice: "* Narxlar boshlang'ich hisoblanadi va kelishilgan topshiriq (TZ) asosida o'zgarishi mumkin.",
    
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

    // Salary calculator labels
    lbl_work_hours: "Рабочее время (Часы)",
    lbl_hourly_rate: "Почасовая ставка (JPY)",
    lbl_japan_salary: "Зарплата в Японии",
    lbl_uzb_equivalent: "Эквивалент в Узбекистане",
    
    // Pricing Calculator
    sec_pricing_label: "ЦЕНЫ",
    sec_pricing_title: "Примерный расчет стоимости",
    calc_subtitle: "Состав модулей",
    calc_total_title: "Начальная стоимость",
    opt_1_name: "Бизнес-сайт / Лендинг (+ $100+)",
    opt_1_desc: "Быстрый адаптивный сайт, оптимизированный под продажи.",
    opt_2_name: "Телеграм-бот для клиентов (+ $300+)",
    opt_2_desc: "Канал приема заявок от клиентов.",
    opt_3_name: "Внутренняя CRM / Панель заказов (+ $1,500)",
    opt_3_desc: "Панель управления заказами и базами данных.",
    opt_4_name: "Интеграция с B2B и платежами (+ $1,000)",
    opt_4_desc: "Платежи Payme/Click или XML API.",
    calc_notice: "* Указанные цены ориентировочные и могут меняться в зависимости от согласованного тех. задания (ТЗ).",
    
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

  // Re-run pricing calculator to update text values
  calculateTotal();
}

// -------------------------------------------------------------
// Screenshot Carousel Controller
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

function carouselGo(id, index) {
  carouselInit(id);
  const el = document.querySelector(`[data-carousel="${id}"]`);
  if (!el) return;

  const slides = el.querySelectorAll('.carousel-slide');
  const dots = el.querySelectorAll('.cdot');
  const state = carouselState[id];

  slides[state.current].classList.remove('active');
  if (dots[state.current]) dots[state.current].classList.remove('active');

  state.current = (index + state.total) % state.total;

  slides[state.current].classList.add('active');
  if (dots[state.current]) dots[state.current].classList.add('active');
}

function carouselNext(id) {
  carouselInit(id);
  carouselGo(id, carouselState[id].current + 1);
}

function carouselPrev(id) {
  carouselInit(id);
  carouselGo(id, carouselState[id].current - 1);
}

// Expose carousel controls globally (called from HTML onclick)
window.carouselGo = carouselGo;
window.carouselNext = carouselNext;
window.carouselPrev = carouselPrev;

// -------------------------------------------------------------
// Pricing Calculator Logic
// -------------------------------------------------------------
const basePrice = 0;
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
    const carousels = document.querySelectorAll('.screenshot-carousel');
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
  document.querySelectorAll('.screenshot-carousel').forEach(el => {
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
});
