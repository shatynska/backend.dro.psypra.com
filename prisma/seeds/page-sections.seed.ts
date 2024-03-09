export async function seedPageSections(prisma) {
  const homeQuestions = await prisma.pageSection.upsert({
    where: { alias: { page: 'home', section: 'questions' } },
    update: {},
    create: {
      id: '3b9108e8-ae80-4cbe-9947-5e0789b6fe21',
      page: 'home',
      section: 'questions',
      primaryHeading: 'Критерії пошуку',
      secondaryHeading: 'Багато питань?',
      href: '/#questions',
    },
  });

  const homeSpecialties = await prisma.pageSection.upsert({
    where: { alias: { page: 'home', section: 'specialties' } },
    update: {},
    create: {
      page: 'home',
      section: 'specialties',
      primaryHeading: 'Спеціальності',
      secondaryHeading: 'Хто є хто?',
      href: '/specialties',
    },
  });

  const homeSpecialists = await prisma.pageSection.upsert({
    where: { alias: { page: 'home', section: 'specialists' } },
    update: {},
    create: {
      id: '438a0a03-a20c-4d0a-9540-4de8fc119441',
      page: 'home',
      section: 'specialists',
      primaryHeading: 'Фахівці',
      secondaryHeading: 'До кого звернутися?',
      href: '/specialists',
    },
  });

  const homeForms = await prisma.pageSection.upsert({
    where: { alias: { page: 'home', section: 'forms' } },
    update: {},
    create: {
      page: 'home',
      section: 'forms',
      primaryHeading: 'Форми роботи',
      secondaryHeading: 'Які форми роботи?',
      href: '/forms',
    },
  });

  const homeAges = await prisma.pageSection.upsert({
    where: { alias: { page: 'home', section: 'ages' } },
    update: {},
    create: {
      page: 'home',
      section: 'ages',
      primaryHeading: 'Вікові групи',
      secondaryHeading: 'З ким працюють?',
      href: '/ages',
    },
  });

  const homeThemes = await prisma.pageSection.upsert({
    where: { alias: { page: 'home', section: 'themes' } },
    update: {},
    create: {
      page: 'home',
      section: 'themes',
      primaryHeading: 'Основні запити',
      secondaryHeading: 'З якими темами?',
      href: '/themes',
    },
  });

  const homeTerms = await prisma.pageSection.upsert({
    where: { alias: { page: 'home', section: 'terms' } },
    update: {},
    create: {
      page: 'home',
      section: 'terms',
      primaryHeading: 'Тривалість',
      secondaryHeading: 'Як довго триватиме?',
      href: '/terms',
    },
  });

  const homeApproaches = await prisma.pageSection.upsert({
    where: { alias: { page: 'home', section: 'approaches' } },
    update: {},
    create: {
      page: 'home',
      section: 'approaches',
      primaryHeading: 'Напрями терапії',
      secondaryHeading: 'Які методи роботи?',
      href: '/approaches',
    },
  });

  const homeRates = await prisma.pageSection.upsert({
    where: { alias: { page: 'home', section: 'rates' } },
    update: {},
    create: {
      page: 'home',
      section: 'rates',
      primaryHeading: 'Орієнтовні ціни',
      secondaryHeading: 'Скільки коштує?',
      href: '/#rates',
    },
  });

  const homeLocations = await prisma.pageSection.upsert({
    where: { alias: { page: 'home', section: 'locations' } },
    update: {},
    create: {
      page: 'home',
      section: 'locations',
      primaryHeading: 'Адреси прийому',
      secondaryHeading: 'Де проводиться?',
      href: '/#locations',
    },
  });

  const homeSchedules = await prisma.pageSection.upsert({
    where: { alias: { page: 'home', section: 'schedules' } },
    update: {},
    create: {
      page: 'home',
      section: 'schedules',
      primaryHeading: 'Графіки роботи',
      secondaryHeading: 'Коли приймають?',
      href: '/#schedules',
    },
  });

  const homeContacts = await prisma.pageSection.upsert({
    where: { alias: { page: 'home', section: 'contacts' } },
    update: {},
    create: {
      page: 'home',
      section: 'contacts',
      primaryHeading: 'Контакти',
      secondaryHeading: 'Як зв\u0027язатися?',
      href: '/#contacts',
    },
  });

  const dimensionMain = await prisma.pageSection.upsert({
    where: { alias: { page: 'dimension', section: 'main' } },
    update: {},
    create: {
      page: 'dimension',
      section: 'main',
      parentId: '3b9108e8-ae80-4cbe-9947-5e0789b6fe21',
    },
  });

  const dimensionPosts = await prisma.pageSection.upsert({
    where: { alias: { page: 'dimension', section: 'posts' } },
    update: {},
    create: {
      page: 'dimension',
      section: 'posts',
      primaryHeading: 'Публікації',
      secondaryHeading: 'Детальніше?',
      href: '/posts',
    },
  });

  const dimensionSpecialists = await prisma.pageSection.upsert({
    where: { alias: { page: 'dimension', section: 'specialists' } },
    update: {},
    create: {
      page: 'dimension',
      section: 'specialists',
      primaryHeading: 'Фахівці',
      secondaryHeading: 'До кого звернутися?',
      href: '/specialists',
    },
  });

  const specialistsMain = await prisma.pageSection.upsert({
    where: { alias: { page: 'specialists', section: 'main' } },
    update: {},
    create: {
      id: '82d41777-571a-4d33-ad5a-869e0f9f7d3b',
      page: 'specialists',
      section: 'main',
      primaryHeading: 'Фахівці',
      secondaryHeading: 'До кого звернутися?',
      parentId: '3b9108e8-ae80-4cbe-9947-5e0789b6fe21',
    },
  });

  const specialistMain = await prisma.pageSection.upsert({
    where: { alias: { page: 'specialist', section: 'main' } },
    update: {},
    create: {
      page: 'specialist',
      section: 'main',
      parentId: '82d41777-571a-4d33-ad5a-869e0f9f7d3b',
    },
  });

  const specialistBrief = await prisma.pageSection.upsert({
    where: { alias: { page: 'specialist', section: 'brief' } },
    update: {},
    create: {
      page: 'specialist',
      section: 'brief',
      primaryHeading: 'Короткий огляд',
      secondaryHeading: 'Досьє',
    },
  });

  const specialistExperience = await prisma.pageSection.upsert({
    where: { alias: { page: 'specialist', section: 'experience' } },
    update: {},
    create: {
      page: 'specialist',
      section: 'experience',
      primaryHeading: 'Професійний шлях',
      secondaryHeading: 'Який досвід?',
    },
  });

  const specialistThemes = await prisma.pageSection.upsert({
    where: { alias: { page: 'specialist', section: 'themes' } },
    update: {},
    create: {
      page: 'specialist',
      section: 'themes',
      primaryHeading: 'Основні запити',
      secondaryHeading: 'З якими темами?',
    },
  });

  const specialistApproach = await prisma.pageSection.upsert({
    where: { alias: { page: 'specialist', section: 'approach' } },
    update: {},
    create: {
      page: 'specialist',
      section: 'approach',
      primaryHeading: 'Мій підхід',
      secondaryHeading: 'Як я працюю?',
    },
  });

  const specialistSchedule = await prisma.pageSection.upsert({
    where: { alias: { page: 'specialist', section: 'schedule' } },
    update: {},
    create: {
      page: 'specialist',
      section: 'schedule',
      primaryHeading: 'Графік роботи',
      secondaryHeading: 'Коли приймаю?',
    },
  });

  const specialistPersonality = await prisma.pageSection.upsert({
    where: { alias: { page: 'specialist', section: 'personality' } },
    update: {},
    create: {
      page: 'specialist',
      section: 'personality',
      primaryHeading: 'Про себе',
      secondaryHeading: 'Трохи особистого?',
    },
  });

  const specialistPosts = await prisma.pageSection.upsert({
    where: { alias: { page: 'specialist', section: 'posts' } },
    update: {},
    create: {
      page: 'specialist',
      section: 'posts',
      primaryHeading: 'Мої публікації',
      secondaryHeading: 'Детальніше?',
    },
  });

  const specialistContacts = await prisma.pageSection.upsert({
    where: { alias: { page: 'specialist', section: 'contacts' } },
    update: {},
    create: {
      page: 'specialist',
      section: 'contacts',
      primaryHeading: 'Контактна форма',
      secondaryHeading: 'Ще питання?',
    },
  });

  console.log({
    homeQuestions,
    homeSpecialties,
    homeSpecialists,
    homeForms,
    homeAges,
    homeThemes,
    homeTerms,
    homeApproaches,
    homeRates,
    homeLocations,
    homeSchedules,
    homeContacts,
    dimensionMain,
    dimensionPosts,
    dimensionSpecialists,
    specialistsMain,
    specialistMain,
    specialistBrief,
    specialistExperience,
    specialistThemes,
    specialistApproach,
    specialistSchedule,
    specialistPersonality,
    specialistPosts,
    specialistContacts,
  });
}
