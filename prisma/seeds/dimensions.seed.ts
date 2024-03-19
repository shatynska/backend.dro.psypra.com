export async function seedDimensions(prisma) {
  const specialties = await prisma.dimension.upsert({
    where: { alias: 'specialties' },
    update: {},
    create: {
      alias: 'specialties',
      title: 'Спеціальності',
    },
  });

  const forms = await prisma.dimension.upsert({
    where: { alias: 'forms' },
    update: {},
    create: {
      alias: 'forms',
      title: 'Форми роботи',
    },
  });

  const ages = await prisma.dimension.upsert({
    where: { alias: 'ages' },
    update: {},
    create: {
      alias: 'ages',
      title: 'Вікові групи',
    },
  });

  const themes = await prisma.dimension.upsert({
    where: { alias: 'themes' },
    update: {},
    create: {
      alias: 'themes',
      title: 'Основні запити',
    },
  });

  const terms = await prisma.dimension.upsert({
    where: { alias: 'terms' },
    update: {},
    create: {
      alias: 'terms',
      title: 'Тривалість',
    },
  });

  const approaches = await prisma.dimension.upsert({
    where: { alias: 'approaches' },
    update: {},
    create: {
      alias: 'approaches',
      title: 'Напрями терапії',
    },
  });

  const rates = await prisma.dimension.upsert({
    where: { alias: 'rates' },
    update: {},
    create: {
      alias: 'rates',
      title: 'Орієнтовні ціни',
    },
  });

  const locations = await prisma.dimension.upsert({
    where: { alias: 'locations' },
    update: {},
    create: {
      alias: 'locations',
      title: 'Адреси прийому',
    },
  });

  const schedules = await prisma.dimension.upsert({
    where: { alias: 'schedules' },
    update: {},
    create: {
      alias: 'schedules',
      title: 'Графіки роботи',
    },
  });

  console.log({
    specialties,
    forms,
    ages,
    themes,
    terms,
    approaches,
    rates,
    locations,
    schedules,
  });
}
