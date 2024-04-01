export async function seedPageSections(prisma) {
  const questions = await prisma.pageSection.upsert({
    where: { alias: 'questions' },
    update: {},
    create: {
      alias: 'questions',
      primaryHeading: 'Критерії пошуку',
      secondaryHeading: 'Багато питань?',
      href: '/#questions',
    },
  });

  const specialties = await prisma.pageSection.upsert({
    where: { alias: 'specialties' },
    update: {},
    create: {
      alias: 'specialties',
      primaryHeading: 'Спеціальності',
      secondaryHeading: 'Хто є хто?',
      href: '/specialties',
    },
  });

  const specialists = await prisma.pageSection.upsert({
    where: { alias: 'specialists' },
    update: {},
    create: {
      alias: 'specialists',
      primaryHeading: 'Фахівці',
      secondaryHeading: 'До кого звернутися?',
      href: '/specialists',
    },
  });

  const forms = await prisma.pageSection.upsert({
    where: { alias: 'forms' },
    update: {},
    create: {
      alias: 'forms',
      primaryHeading: 'Форми роботи',
      secondaryHeading: 'Які форми роботи?',
      href: '/forms',
    },
  });

  const ages = await prisma.pageSection.upsert({
    where: { alias: 'ages' },
    update: {},
    create: {
      alias: 'ages',
      primaryHeading: 'Вікові групи',
      secondaryHeading: 'З ким працюють?',
      href: '/ages',
    },
  });

  const themes = await prisma.pageSection.upsert({
    where: { alias: 'themes' },
    update: {},
    create: {
      alias: 'themes',
      primaryHeading: 'Основні запити',
      secondaryHeading: 'З якими темами?',
      href: '/themes',
    },
  });

  const terms = await prisma.pageSection.upsert({
    where: { alias: 'terms' },
    update: {},
    create: {
      alias: 'terms',
      primaryHeading: 'Тривалість',
      secondaryHeading: 'Як довго триватиме?',
      href: '/terms',
    },
  });

  const approaches = await prisma.pageSection.upsert({
    where: { alias: 'approaches' },
    update: {},
    create: {
      alias: 'approaches',
      primaryHeading: 'Напрями терапії',
      secondaryHeading: 'Які методи роботи?',
      href: '/approaches',
    },
  });

  const rates = await prisma.pageSection.upsert({
    where: { alias: 'rates' },
    update: {},
    create: {
      alias: 'rates',
      primaryHeading: 'Орієнтовні ціни',
      secondaryHeading: 'Скільки коштує?',
      href: '/#rates',
    },
  });

  const locations = await prisma.pageSection.upsert({
    where: { alias: 'locations' },
    update: {},
    create: {
      alias: 'locations',
      primaryHeading: 'Адреси прийому',
      secondaryHeading: 'Де проводиться?',
      href: '/#locations',
    },
  });

  const schedules = await prisma.pageSection.upsert({
    where: { alias: 'schedules' },
    update: {},
    create: {
      alias: 'schedules',
      primaryHeading: 'Графіки роботи',
      secondaryHeading: 'Коли приймають?',
      href: '/#schedules',
    },
  });

  const contacts = await prisma.pageSection.upsert({
    where: { alias: 'contacts' },
    update: {},
    create: {
      alias: 'contacts',
      primaryHeading: 'Контакти',
      secondaryHeading: 'Як зв\u0027язатися?',
      href: '/#contacts',
    },
  });

  const brief = await prisma.pageSection.upsert({
    where: { alias: 'brief' },
    update: {},
    create: {
      alias: 'brief',
      primaryHeading: 'Короткий огляд',
      secondaryHeading: 'Досьє',
    },
  });

  const experience = await prisma.pageSection.upsert({
    where: { alias: 'experience' },
    update: {},
    create: {
      alias: 'experience',
      primaryHeading: 'Професійний шлях',
      secondaryHeading: 'Який досвід?',
    },
  });

  const approach = await prisma.pageSection.upsert({
    where: { alias: 'approach' },
    update: {},
    create: {
      alias: 'approach',
      primaryHeading: 'Мій підхід',
      secondaryHeading: 'Як я працюю?',
    },
  });

  const schedule = await prisma.pageSection.upsert({
    where: { alias: 'schedule' },
    update: {},
    create: {
      alias: 'schedule',
      primaryHeading: 'Графік роботи',
      secondaryHeading: 'Коли приймаю?',
    },
  });

  const personality = await prisma.pageSection.upsert({
    where: { alias: 'personality' },
    update: {},
    create: {
      alias: 'personality',
      primaryHeading: 'Про себе',
      secondaryHeading: 'Трохи особистого?',
    },
  });

  const contact = await prisma.pageSection.upsert({
    where: { alias: 'contact' },
    update: {},
    create: {
      alias: 'contact',
      primaryHeading: 'Контактна форма',
      secondaryHeading: 'Ще питання?',
    },
  });

  const posts = await prisma.pageSection.upsert({
    where: { alias: 'posts' },
    update: {},
    create: {
      alias: 'posts',
      primaryHeading: 'Публікації',
      secondaryHeading: 'Детальніше?',
      href: '/posts',
    },
  });

  const dimension = await prisma.pageSection.upsert({
    where: { alias: 'dimensionItem' },
    update: {},
    create: {
      alias: 'dimensionItem',
      primaryHeading: 'dimensionItem',
      secondaryHeading: 'Що це таке?',
      href: '/posts',
    },
  });

  console.log({
    questions,
    specialties,
    specialists,
    forms,
    ages,
    themes,
    terms,
    approaches,
    rates,
    locations,
    schedules,
    contacts,
    brief,
    experience,
    approach,
    schedule,
    personality,
    contact,
    posts,
    dimension,
  });
}
