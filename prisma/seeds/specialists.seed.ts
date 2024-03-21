export async function seedSpecialists(prisma) {
  const shatynska = await prisma.specialist.upsert({
    where: { alias: 'shatynska' },
    update: {},
    create: {
      alias: 'shatynska',
      firstName: 'Олена',
      lastName: 'Шатинська',
      phones: ['+380980074869'],
      emails: ['shatynskaa@gmail.com'],
      websites: ['https://shatynska.in.ua'],
      dimensionItems: {
        create: [
          {
            dimensionAlias: 'specialties',
            dimensionItemAlias: 'psychologist',
          },
          {
            dimensionAlias: 'specialties',
            dimensionItemAlias: 'psychotherapist',
          },
        ],
      },
    },
    include: {
      dimensionItems: true,
    },
  });

  const sozanska = await prisma.specialist.upsert({
    where: { alias: 'sozanska' },
    update: {},
    create: {
      alias: 'sozanska',
      firstName: 'Созанська',
      lastName: 'Ірина',
      dimensionItems: {
        create: [
          {
            dimensionAlias: 'specialties',
            dimensionItemAlias: 'psychotherapist',
          },
        ],
      },
    },
    include: {
      dimensionItems: true,
    },
  });

  const berchuk = await prisma.specialist.upsert({
    where: { alias: 'berchuk' },
    update: {},
    create: {
      alias: 'berchuk',
      firstName: 'Берчук',
      lastName: 'Володимир',
      dimensionItems: {
        create: [
          {
            dimensionAlias: 'specialties',
            dimensionItemAlias: 'psychologist',
          },
          {
            dimensionAlias: 'specialties',
            dimensionItemAlias: 'psychotherapist',
          },
        ],
      },
    },
    include: {
      dimensionItems: true,
    },
  });

  const bilas = await prisma.specialist.upsert({
    where: { alias: 'bilas' },
    update: {},
    create: {
      alias: 'bilas',
      firstName: 'Білас',
      lastName: 'Юлія',
      dimensionItems: {
        create: [
          {
            dimensionAlias: 'specialties',
            dimensionItemAlias: 'psychologist',
          },
        ],
      },
    },
    include: {
      dimensionItems: true,
    },
  });

  const hambarova = await prisma.specialist.upsert({
    where: { alias: 'hambarova' },
    update: {},
    create: {
      alias: 'hambarova',
      firstName: 'Гамбарова',
      lastName: 'Еляна',
      dimensionItems: {
        create: [
          {
            dimensionAlias: 'specialties',
            dimensionItemAlias: 'psychologist',
          },
        ],
      },
    },
    include: {
      dimensionItems: true,
    },
  });

  const drobchak = await prisma.specialist.upsert({
    where: { alias: 'drobchak' },
    update: {},
    create: {
      alias: 'drobchak',
      firstName: 'Дробчак',
      lastName: 'Ольга',
      dimensionItems: {
        create: [
          {
            dimensionAlias: 'specialties',
            dimensionItemAlias: 'psychologist',
          },
          {
            dimensionAlias: 'specialties',
            dimensionItemAlias: 'psychotherapist',
          },
        ],
      },
    },
    include: {
      dimensionItems: true,
    },
  });

  const kotsiuba = await prisma.specialist.upsert({
    where: { alias: 'kotsiuba' },
    update: {},
    create: {
      alias: 'kotsiuba',
      firstName: 'Коцюба',
      lastName: 'Галина',
      dimensionItems: {
        create: [
          {
            dimensionAlias: 'specialties',
            dimensionItemAlias: 'psychologist',
          },
        ],
      },
    },
    include: {
      dimensionItems: true,
    },
  });

  const lekh = await prisma.specialist.upsert({
    where: { alias: 'lekh' },
    update: {},
    create: {
      alias: 'lekh',
      firstName: 'Лех',
      lastName: 'Наталя',
      dimensionItems: {
        create: [
          {
            dimensionAlias: 'specialties',
            dimensionItemAlias: 'psychiatrist',
          },
          {
            dimensionAlias: 'specialties',
            dimensionItemAlias: 'psychotherapist',
          },
        ],
      },
    },
    include: {
      dimensionItems: true,
    },
  });

  const nekrasova = await prisma.specialist.upsert({
    where: { alias: 'nekrasova' },
    update: {},
    create: {
      alias: 'nekrasova',
      firstName: 'Некрасова',
      lastName: 'Валентина',
      dimensionItems: {
        create: [
          {
            dimensionAlias: 'specialties',
            dimensionItemAlias: 'psychologist',
          },
          {
            dimensionAlias: 'specialties',
            dimensionItemAlias: 'psychotherapist',
          },
        ],
      },
    },
    include: {
      dimensionItems: true,
    },
  });

  const parashchak = await prisma.specialist.upsert({
    where: { alias: 'parashchak' },
    update: {},
    create: {
      alias: 'parashchak',
      firstName: 'Паращак',
      lastName: 'Надія',
      dimensionItems: {
        create: [
          {
            dimensionAlias: 'specialties',
            dimensionItemAlias: 'psychiatrist',
          },
        ],
      },
    },
    include: {
      dimensionItems: true,
    },
  });

  const petryshyn = await prisma.specialist.upsert({
    where: { alias: 'petryshyn' },
    update: {},
    create: {
      alias: 'petryshyn',
      firstName: 'Петришин',
      lastName: 'Ольга',
      dimensionItems: {
        create: [
          {
            dimensionAlias: 'specialties',
            dimensionItemAlias: 'psychotherapist',
          },
        ],
      },
    },
    include: {
      dimensionItems: true,
    },
  });

  const tatarevych = await prisma.specialist.upsert({
    where: { alias: 'tatarevych' },
    update: {},
    create: {
      alias: 'tatarevych',
      firstName: 'Татаревич',
      lastName: 'Галина',
      dimensionItems: {
        create: [
          {
            dimensionAlias: 'specialties',
            dimensionItemAlias: 'psychologist',
          },
        ],
      },
    },
    include: {
      dimensionItems: true,
    },
  });

  const franchuk = await prisma.specialist.upsert({
    where: { alias: 'franchuk' },
    update: {},
    create: {
      alias: 'franchuk',
      firstName: 'Франчук',
      lastName: 'Тетяна',
      dimensionItems: {
        create: [
          {
            dimensionAlias: 'specialties',
            dimensionItemAlias: 'psychiatrist',
          },
        ],
      },
    },
    include: {
      dimensionItems: true,
    },
  });

  const chaplia = await prisma.specialist.upsert({
    where: { alias: 'chaplia' },
    update: {},
    create: {
      alias: 'chaplia',
      firstName: 'Чапля',
      lastName: 'Уляна',
      dimensionItems: {
        create: [
          {
            dimensionAlias: 'specialties',
            dimensionItemAlias: 'psychologist',
          },
        ],
      },
    },
    include: {
      dimensionItems: true,
    },
  });

  console.log({
    shatynska,
    sozanska,
    berchuk,
    bilas,
    hambarova,
    drobchak,
    kotsiuba,
    lekh,
    nekrasova,
    parashchak,
    petryshyn,
    tatarevych,
    franchuk,
    chaplia,
  });
}
