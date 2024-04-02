export async function seedSpecialists(prisma) {
  const shatynska = await prisma.specialist.upsert({
    where: { alias: 'shatynska' },
    update: {},
    create: {
      alias: 'shatynska',
      lastName: 'Шатинська',
      firstName: 'Олена',
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
      lastName: 'Созанська',
      firstName: 'Ірина',
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
      lastName: 'Берчук',
      firstName: 'Володимир',
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
      lastName: 'Білас',
      firstName: 'Юлія',
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
      lastName: 'Гамбарова',
      firstName: 'Еляна',
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
      lastName: 'Дробчак',
      firstName: 'Ольга',
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
      lastName: 'Коцюба',
      firstName: 'Галина',
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
      lastName: 'Лех',
      firstName: 'Наталя',
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
      lastName: 'Некрасова',
      firstName: 'Валентина',
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
      lastName: 'Паращак',
      firstName: 'Надія',
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
      lastName: 'Петришин',
      firstName: 'Ольга',
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
      lastName: 'Татаревич',
      firstName: 'Галина',
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
      lastName: 'Франчук',
      firstName: 'Тетяна',
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
      lastName: 'Чапля',
      firstName: 'Уляна',
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
