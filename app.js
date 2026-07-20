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
    lemon_home_link: "Bosh sahifa",
    lemon_tours_link: "Turlar katalogi",
    desc_autohelp_short: "24/7 avto yordam platformasi va dispatcher boti.",
    desc_edugrants_short: "Xalqaro grantlar qidiruv portali.",
    desc_target_short: "Xususiy maktab portali va xarita integratsiyasi.",
    desc_japan_short: "Tokutei Ginou tili markazi portali.",
    desc_alivida_short: "Organik mahsulotlar uchun konversiyali lending sahifalar.",
    view_case: "Loyihani ko‘rish",
    case_study: "Loyiha galereyasi",
    visit_live: "Saytni ochish",
    close_gallery: "Galereyani yopish",
    gallery_navigation: "Loyiha sahnalari",
    previous_view: "Oldingi",
    next_view: "Keyingi",
    gallery_error: "Tasvirni yuklab bo‘lmadi.",
    retry_image: "Qayta urinish",
    gallery_hint: "Sahifalarni klaviatura, tugmalar yoki surish orqali almashtiring.",
    gallery_view_singular: "sahna",
    gallery_view_plural: "ta sahna",

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
    lemon_home_link: "Главная страница",
    lemon_tours_link: "Каталог туров",
    desc_autohelp_short: "Платформа автопомощи 24/7 и диспетчерский бот.",
    desc_edugrants_short: "Портал поиска международных грантов.",
    desc_target_short: "Портал частной школы и интеграция карт.",
    desc_japan_short: "Портал языкового центра Tokutei Ginou.",
    desc_alivida_short: "Конверсионные лендинги для органических продуктов.",
    view_case: "Смотреть проект",
    case_study: "Галерея проекта",
    visit_live: "Открыть сайт",
    close_gallery: "Закрыть галерею",
    gallery_navigation: "Экраны проекта",
    previous_view: "Назад",
    next_view: "Далее",
    gallery_error: "Не удалось загрузить изображение.",
    retry_image: "Повторить",
    gallery_hint: "Переключайте экраны клавишами, кнопками или свайпом.",
    gallery_view_singular: "экран",
    gallery_view_plural: "экранов",

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

  document.querySelectorAll("[data-i18n-aria-label]").forEach(element => {
    const key = element.getAttribute("data-i18n-aria-label");
    if (translations[lang] && translations[lang][key]) {
      element.setAttribute("aria-label", translations[lang][key]);
    }
  });

  syncProjectGalleryLanguage();
}

// -------------------------------------------------------------
// Project Case Study Gallery
// -------------------------------------------------------------
let galleryDialog = null;
let galleryProject = null;
let galleryFrames = [];
let galleryFrameIndex = 0;
let galleryRestoreFocus = null;
let galleryTouchStartX = null;

function localizedValue(value) {
  return value?.[currentLang] || value?.uz || "";
}

function getProjectFrames(project) {
  const capturedFrames = project.captureGroups.flatMap(group => group.views.map(view => ({
    src: `screenshots/projects/${project.id}/${view.slug}.jpg`,
    orientation: view.orientation || "landscape",
    label: view.label
  })));

  const manualFrames = (project.galleryViews || []).map(view => ({
    src: view.src,
    orientation: view.orientation || "landscape",
    label: view.label
  }));

  return [...capturedFrames, ...manualFrames];
}

function formatGalleryTotal(total) {
  if (currentLang === "ru") return `${total} ${translations.ru.gallery_view_plural}`;
  return total === 1
    ? `${total} ${translations.uz.gallery_view_singular}`
    : `${total} ${translations.uz.gallery_view_plural}`;
}

function renderGalleryThumbnails() {
  const thumbnailList = document.getElementById("project-gallery-thumbnails");
  if (!thumbnailList || !galleryProject) return;

  thumbnailList.replaceChildren();

  galleryFrames.forEach((frame, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "project-gallery-thumb";
    button.dataset.galleryIndex = String(index);
    button.setAttribute("aria-label", `${String(index + 1).padStart(2, "0")}. ${localizedValue(frame.label)}`);
    button.setAttribute("aria-current", index === galleryFrameIndex ? "true" : "false");

    const image = document.createElement("img");
    image.src = frame.src;
    image.alt = "";
    image.loading = "lazy";
    image.decoding = "async";

    const copy = document.createElement("span");
    copy.innerHTML = `<small>${String(index + 1).padStart(2, "0")}</small><strong></strong>`;
    copy.querySelector("strong").textContent = localizedValue(frame.label);

    button.append(image, copy);
    button.addEventListener("click", () => setGalleryFrame(index, { focusThumbnail: true }));
    thumbnailList.append(button);
  });
}

function setGalleryLoadingState(isLoading) {
  const media = document.getElementById("project-gallery-media");
  const skeleton = document.getElementById("project-gallery-skeleton");
  if (!media || !skeleton) return;

  media.setAttribute("aria-busy", String(isLoading));
  skeleton.hidden = !isLoading;
}

function setGalleryFrame(nextIndex, options = {}) {
  if (!galleryProject || galleryFrames.length === 0) return;

  galleryFrameIndex = (nextIndex + galleryFrames.length) % galleryFrames.length;
  const frame = galleryFrames[galleryFrameIndex];
  const image = document.getElementById("project-gallery-image");
  const media = document.getElementById("project-gallery-media");
  const errorState = document.getElementById("project-gallery-error");
  const position = document.getElementById("project-gallery-position");
  const captionIndex = document.getElementById("project-gallery-caption-index");
  const caption = document.getElementById("project-gallery-caption");
  const progress = document.getElementById("project-gallery-progress-bar");
  const formattedIndex = String(galleryFrameIndex + 1).padStart(2, "0");
  const formattedTotal = String(galleryFrames.length).padStart(2, "0");

  setGalleryLoadingState(true);
  errorState.hidden = true;
  image.hidden = false;
  media.dataset.orientation = frame.orientation;
  image.alt = `${galleryProject.title} — ${localizedValue(frame.label)}`;

  image.onload = () => {
    media.dataset.orientation = image.naturalHeight > image.naturalWidth ? "portrait" : "landscape";
    setGalleryLoadingState(false);
  };
  image.onerror = () => {
    setGalleryLoadingState(false);
    image.hidden = true;
    errorState.hidden = false;
  };
  image.src = frame.src;
  if (image.complete && image.naturalWidth > 0) image.onload();

  position.textContent = `${formattedIndex} / ${formattedTotal}`;
  captionIndex.textContent = formattedIndex;
  caption.textContent = localizedValue(frame.label);
  progress.style.transform = `scaleX(${(galleryFrameIndex + 1) / galleryFrames.length})`;

  document.querySelectorAll(".project-gallery-thumb").forEach((thumbnail, index) => {
    const isActive = index === galleryFrameIndex;
    thumbnail.setAttribute("aria-current", isActive ? "true" : "false");
    if (isActive && options.focusThumbnail) {
      thumbnail.focus({ preventScroll: true });
    }
    if (isActive) {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      thumbnail.scrollIntoView({ block: "nearest", inline: "center", behavior: reducedMotion ? "auto" : "smooth" });
    }
  });

  const nextFrame = galleryFrames[(galleryFrameIndex + 1) % galleryFrames.length];
  if (nextFrame) {
    const preload = new Image();
    preload.src = nextFrame.src;
  }
}

function syncProjectGalleryLanguage() {
  if (!galleryProject) return;

  const total = document.getElementById("project-gallery-total");
  if (total) total.textContent = formatGalleryTotal(galleryFrames.length);
  renderGalleryThumbnails();
  setGalleryFrame(galleryFrameIndex);
}

function openProjectGallery(projectId, trigger) {
  const projects = window.PROJECT_GALLERIES || [];
  const project = projects.find(item => item.id === projectId);
  if (!project || !galleryDialog) return;

  galleryProject = project;
  galleryFrames = getProjectFrames(project);
  galleryFrameIndex = 0;
  galleryRestoreFocus = trigger || document.activeElement;

  document.getElementById("project-gallery-title").textContent = project.title;
  document.getElementById("project-gallery-domain").textContent = project.domain;
  document.getElementById("project-gallery-address").textContent = project.domain;
  document.getElementById("project-gallery-total").textContent = formatGalleryTotal(galleryFrames.length);
  document.getElementById("project-gallery-live").href = project.liveUrl;

  renderGalleryThumbnails();
  setGalleryFrame(0);
  document.body.classList.add("modal-open");
  galleryDialog.showModal();
  document.getElementById("project-gallery-close").focus({ preventScroll: true });
}

function closeProjectGallery() {
  if (!galleryDialog?.open) return;
  galleryDialog.close();
}

function initializeProjectGallery() {
  galleryDialog = document.getElementById("project-gallery-dialog");
  if (!galleryDialog || !Array.isArray(window.PROJECT_GALLERIES)) return;

  document.querySelectorAll("[data-project-open]").forEach(trigger => {
    trigger.addEventListener("click", () => openProjectGallery(trigger.dataset.projectOpen, trigger));
  });

  document.getElementById("project-gallery-close").addEventListener("click", closeProjectGallery);
  document.getElementById("project-gallery-prev").addEventListener("click", () => setGalleryFrame(galleryFrameIndex - 1));
  document.getElementById("project-gallery-next").addEventListener("click", () => setGalleryFrame(galleryFrameIndex + 1));
  document.getElementById("project-gallery-retry").addEventListener("click", () => {
    const image = document.getElementById("project-gallery-image");
    const source = galleryFrames[galleryFrameIndex]?.src;
    if (!source) return;
    image.hidden = false;
    image.src = "";
    requestAnimationFrame(() => {
      image.src = source;
    });
  });

  galleryDialog.addEventListener("cancel", event => {
    event.preventDefault();
    closeProjectGallery();
  });

  galleryDialog.addEventListener("click", event => {
    if (event.target === galleryDialog) closeProjectGallery();
  });

  galleryDialog.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
    if (galleryRestoreFocus instanceof HTMLElement) galleryRestoreFocus.focus({ preventScroll: true });
    galleryRestoreFocus = null;
  });

  galleryDialog.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeProjectGallery();
      return;
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setGalleryFrame(galleryFrameIndex - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setGalleryFrame(galleryFrameIndex + 1);
    }
  });

  const media = document.getElementById("project-gallery-media");
  media.addEventListener("pointerdown", event => {
    if (event.pointerType === "touch") galleryTouchStartX = event.clientX;
  });
  media.addEventListener("pointerup", event => {
    if (galleryTouchStartX === null || event.pointerType !== "touch") return;
    const distance = event.clientX - galleryTouchStartX;
    galleryTouchStartX = null;
    if (Math.abs(distance) < 48) return;
    setGalleryFrame(galleryFrameIndex + (distance < 0 ? 1 : -1));
  });
  media.addEventListener("pointercancel", () => {
    galleryTouchStartX = null;
  });
}

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
// Initialization on Load
// -------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initializeProjectGallery();
  changeLanguage("uz");
  calculateTotal();
});
