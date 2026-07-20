(function exposeProjectGalleries(root, factory) {
  const projects = factory();
  root.PROJECT_GALLERIES = projects;

  if (typeof module === "object" && module.exports) {
    module.exports = projects;
  }
})(typeof globalThis !== "undefined" ? globalThis : window, function createProjectGalleries() {
  const label = (uz, ru) => ({ uz, ru });

  return [
    {
      id: "lemon-tour",
      title: "LemonTour",
      domain: "lemon-tour.uz",
      liveUrl: "https://www.lemon-tour.uz/",
      initialWaitMs: 60000,
      captureGroups: [
        {
          url: "https://www.lemon-tour.uz/",
          views: [
            { slug: "cover", scrollY: 0, label: label("Bosh sahifa", "Главная") },
            { slug: "tour-finder", scrollY: 780, label: label("Turni topish", "Подбор тура") },
            { slug: "services", scrollY: 1320, label: label("Xizmatlar", "Услуги") },
            { slug: "offers", scrollY: 2200, label: label("Maxsus takliflar", "Спецпредложения") },
            { slug: "advantages", scrollY: 2700, label: label("Afzalliklar", "Преимущества") },
            { slug: "process", scrollY: 3460, label: label("Ish jarayoni", "Как мы работаем") },
            { slug: "news", scrollY: 3980, label: label("Yangiliklar", "Новости") },
            { slug: "reviews", scrollY: 4780, label: label("Mijozlar fikri", "Отзывы") },
            { slug: "faq", scrollY: 5600, label: label("Ko‘p so‘raladigan savollar", "Частые вопросы") },
            { slug: "cta", scrollY: 6200, label: label("Bog‘lanish", "Связаться") }
          ]
        },
        { url: "https://www.lemon-tour.uz/tours", views: [{ slug: "tours", scrollY: 0, label: label("Turlar katalogi", "Каталог туров") }] },
        { url: "https://www.lemon-tour.uz/about", views: [{ slug: "about", scrollY: 0, label: label("Kompaniya haqida", "О компании") }] },
        { url: "https://www.lemon-tour.uz/contact", views: [{ slug: "contact", scrollY: 0, label: label("Aloqa sahifasi", "Контакты") }] }
      ]
    },
    {
      id: "autohelp",
      title: "AutoHelp",
      domain: "autohelp.uz",
      liveUrl: "https://autohelp.uz/",
      initialWaitMs: 10000,
      captureGroups: [
        {
          url: "https://autohelp.uz/",
          views: [
            { slug: "cover", scrollY: 0, label: label("Bosh sahifa", "Главная") },
            { slug: "how", selector: "#how", label: label("Qanday ishlaydi", "Как это работает") },
            { slug: "services", selector: "#services", label: label("Xizmatlar", "Услуги") },
            { slug: "why", selector: "#why", label: label("Afzalliklar", "Преимущества") },
            { slug: "reviews", selector: "#reviews", label: label("Mijozlar fikri", "Отзывы") },
            { slug: "faq", selector: "#faq", label: label("Savol-javob", "Вопросы и ответы") },
            { slug: "cta", scrollY: 5050, label: label("Tez yordam chaqirish", "Вызвать помощь") }
          ]
        },
        { url: "https://autohelp.uz/xizmatlar/tez-yordam", views: [{ slug: "emergency-service", scrollY: 0, label: label("Tez yordam xizmati", "Экстренная помощь") }] },
        { url: "https://autohelp.uz/xizmatlar/vulkanizatsiya", views: [{ slug: "tire-service", scrollY: 0, label: label("Vulkanizatsiya", "Шиномонтаж") }] }
      ],
      galleryViews: [
        {
          src: "screenshots/projects/autohelp/telegram-bot.png",
          orientation: "portrait",
          label: label("Telegram yordam boti", "Telegram-бот помощи")
        }
      ]
    },
    {
      id: "edugrants",
      title: "EduGrants",
      domain: "edugrants.uz",
      liveUrl: "https://edugrants.uz/",
      initialWaitMs: 10000,
      captureGroups: [
        {
          url: "https://edugrants.uz/",
          views: [
            { slug: "cover", scrollY: 0, label: label("Bosh sahifa", "Главная") },
            { slug: "about", selector: "#about", label: label("Platforma haqida", "О платформе") },
            { slug: "features", selector: "#features", label: label("Imkoniyatlar", "Возможности") },
            { slug: "featured-grants", selector: "#scholarships", label: label("Tanlangan grantlar", "Избранные гранты") },
            { slug: "cta", scrollY: 3980, label: label("Ariza topshirishni boshlash", "Начать подачу") }
          ]
        },
        { url: "https://edugrants.uz/scholarships", views: [{ slug: "scholarships", scrollY: 0, label: label("Grantlar katalogi", "Каталог грантов") }] },
        { url: "https://edugrants.uz/podcasts", views: [{ slug: "podcasts", scrollY: 0, label: label("Podkastlar", "Подкасты") }] },
        { url: "https://edugrants.uz/scholarships/ocean-awareness-contest-2026", views: [{ slug: "grant-detail", scrollY: 0, label: label("Grant tafsilotlari", "Страница гранта") }] }
      ]
    },
    {
      id: "targetschool",
      title: "TargetSchool",
      domain: "target-school.uz",
      liveUrl: "https://target-international-school.vercel.app/",
      initialWaitMs: 8000,
      captureGroups: [
        {
          url: "https://target-international-school.vercel.app/",
          views: [
            { slug: "cover", scrollY: 0, label: label("Bosh sahifa", "Главная") },
            { slug: "welcome", scrollY: 980, label: label("Maktab haqida", "О школе") },
            { slug: "programs", scrollY: 1570, label: label("Ta’lim dasturlari", "Учебные программы") },
            { slug: "advantages", scrollY: 2050, label: label("Afzalliklar", "Преимущества") },
            { slug: "campuses", scrollY: 2780, label: label("Kampuslar", "Кампусы") },
            { slug: "admission", scrollY: 3500, label: label("Qabul", "Поступление") }
          ]
        },
        { url: "https://target-international-school.vercel.app/about.html", views: [{ slug: "about-page", scrollY: 0, label: label("Biz haqimizda", "О нас") }] },
        { url: "https://target-international-school.vercel.app/student-life.html", views: [{ slug: "student-life", scrollY: 0, label: label("O‘quvchilar hayoti", "Жизнь учеников") }] },
        { url: "https://target-international-school.vercel.app/academics.html", views: [{ slug: "academics", scrollY: 0, label: label("Akademik yo‘nalishlar", "Академические направления") }] },
        { url: "https://target-international-school.vercel.app/results.html", views: [{ slug: "results", scrollY: 0, label: label("Natijalar", "Результаты") }] },
        { url: "https://target-international-school.vercel.app/dormitory.html", views: [{ slug: "dormitory", scrollY: 0, label: label("Yotoqxona", "Общежитие") }] },
        { url: "https://target-international-school.vercel.app/contact.html", views: [{ slug: "contact", scrollY: 0, label: label("Aloqa", "Контакты") }] }
      ]
    },
    {
      id: "japanskillcenter",
      title: "JapanSkillCenter",
      domain: "japan-skill-center.uz",
      liveUrl: "https://japan-skill-center.vercel.app/",
      initialWaitMs: 10000,
      captureGroups: [
        {
          url: "https://japan-skill-center.vercel.app/",
          views: [
            { slug: "cover", scrollY: 0, label: label("Bosh sahifa", "Главная") },
            { slug: "about", selector: "#about", label: label("Markaz haqida", "О центре") },
            { slug: "recognition", selector: "#recognition", label: label("E’tirof", "Признание") },
            { slug: "founder", selector: "#founder", label: label("Rahbariyat", "Руководство") },
            { slug: "video-lessons", selector: "#ibrat", label: label("Video darslar", "Видеоуроки") },
            { slug: "sectors", selector: "#sectors", label: label("Tokutei Ginou sohalari", "Сферы Tokutei Ginou") },
            { slug: "requirements", selector: "#requirements", label: label("Talablar", "Требования") },
            { slug: "process", selector: "#process", label: label("Ta’lim jarayoni", "Процесс обучения") },
            { slug: "results", selector: "#results", label: label("Natijalar", "Результаты") },
            { slug: "faq", selector: "#faq", label: label("Savol-javob", "Вопросы и ответы") },
            { slug: "feedback", selector: "#feedback", label: label("Bitiruvchilar fikri", "Отзывы выпускников") },
            { slug: "gallery", selector: "#gallery", label: label("Galereya", "Галерея") },
            { slug: "timeline", selector: "#timeline", label: label("Markaz tarixi", "История центра") },
            { slug: "partners", selector: "#partners", label: label("Hamkorlar", "Партнёры") },
            { slug: "apply", selector: "#apply", label: label("Ro‘yxatdan o‘tish", "Записаться") },
            { slug: "contact", selector: "#contact", label: label("Aloqa", "Контакты") }
          ]
        },
        { url: "https://japan-skill-center.vercel.app/employers.html", views: [{ slug: "employers", scrollY: 0, label: label("Ish beruvchilar uchun", "Для работодателей") }] }
      ]
    },
    {
      id: "alivida",
      title: "Alivida & Abi Hayat",
      domain: "alividaorganic.uz",
      liveUrl: "https://www.alividaorganic.uz/",
      initialWaitMs: 10000,
      captureGroups: [
        {
          url: "https://www.alividaorganic.uz/",
          views: [
            { slug: "cover", scrollY: 0, label: label("Alivida — bosh sahifa", "Alivida — главная") },
            { slug: "products", selector: "#products", label: label("Mahsulotlar", "Продукты") },
            { slug: "about", selector: "#about", label: label("Brend haqida", "О бренде") },
            { slug: "certificates", selector: "#certs", label: label("Sertifikatlar", "Сертификаты") },
            { slug: "process", selector: "#process", label: label("Qanday ishlaydi", "Как это работает") },
            { slug: "reviews", selector: "#reviews", label: label("Mijozlar fikri", "Отзывы") },
            { slug: "faq", selector: "#faq", label: label("Savol-javob", "Вопросы и ответы") },
            { slug: "order", selector: "#order", label: label("Buyurtma berish", "Оформить заказ") }
          ]
        },
        {
          url: "https://www.abihayat.uz/",
          views: [
            { slug: "abihayat-cover", scrollY: 0, label: label("Abi Hayat — bosh sahifa", "Abi Hayat — главная") },
            { slug: "abihayat-problem", selector: "#muammo", label: label("Muammo va yechim", "Проблема и решение") },
            { slug: "abihayat-product", selector: "#mahsulot", label: label("Mahsulot tarkibi", "Состав продукта") },
            { slug: "abihayat-benefits", selector: "#foydalari", label: label("Foydalari", "Преимущества") },
            { slug: "abihayat-certificates", selector: "#sertifikatlar", label: label("Sertifikatlar", "Сертификаты") },
            { slug: "abihayat-reviews", selector: "#sharhlar", label: label("Mijozlar sharhlari", "Отзывы клиентов") }
          ]
        }
      ]
    }
  ];
});
