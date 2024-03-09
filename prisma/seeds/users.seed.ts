export async function seedUsers(prisma) {
  const shatynska = await prisma.user.upsert({
    where: { userName: 'shatynska' },
    update: {},
    create: {
      userName: 'shatynska',
      password: '$2b$10$MaX1qOHgkACgJraaMlxcnu/0UiBT0bsoBVh/hF9VHrk7kojeMREU6',
      roles: ['ADMIN', 'USER'],
    },
  });
  const sozanska = await prisma.user.upsert({
    where: { userName: 'sozanska' },
    update: {},
    create: {
      userName: 'sozanska',
      password: '$2b$10$MaX1qOHgkACgJraaMlxcnu/0UiBT0bsoBVh/hF9VHrk7kojeMREU6',
      roles: ['ADMIN', 'USER'],
    },
  });
  const berchuk = await prisma.user.upsert({
    where: { userName: 'berchuk' },
    update: {},
    create: {
      userName: 'berchuk',
      password: '$2b$10$MaX1qOHgkACgJraaMlxcnu/0UiBT0bsoBVh/hF9VHrk7kojeMREU6',
      roles: ['USER'],
    },
  });
  const bilas = await prisma.user.upsert({
    where: { userName: 'bilas' },
    update: {},
    create: {
      userName: 'bilas',
      password: '$2b$10$MaX1qOHgkACgJraaMlxcnu/0UiBT0bsoBVh/hF9VHrk7kojeMREU6',
      roles: ['USER'],
    },
  });
  const hambarova = await prisma.user.upsert({
    where: { userName: 'hambarova' },
    update: {},
    create: {
      userName: 'hambarova',
      password: '$2b$10$MaX1qOHgkACgJraaMlxcnu/0UiBT0bsoBVh/hF9VHrk7kojeMREU6',
      roles: ['USER'],
    },
  });
  const drobchak = await prisma.user.upsert({
    where: { userName: 'drobchak' },
    update: {},
    create: {
      userName: 'drobchak',
      password: '$2b$10$MaX1qOHgkACgJraaMlxcnu/0UiBT0bsoBVh/hF9VHrk7kojeMREU6',
      roles: ['USER'],
    },
  });
  const kotsiuba = await prisma.user.upsert({
    where: { userName: 'kotsiuba' },
    update: {},
    create: {
      userName: 'kotsiuba',
      password: '$2b$10$MaX1qOHgkACgJraaMlxcnu/0UiBT0bsoBVh/hF9VHrk7kojeMREU6',
      roles: ['USER'],
    },
  });
  const lekh = await prisma.user.upsert({
    where: { userName: 'lekh' },
    update: {},
    create: {
      userName: 'lekh',
      password: '$2b$10$MaX1qOHgkACgJraaMlxcnu/0UiBT0bsoBVh/hF9VHrk7kojeMREU6',
      roles: ['USER'],
    },
  });
  const nekrasova = await prisma.user.upsert({
    where: { userName: 'nekrasova' },
    update: {},
    create: {
      userName: 'nekrasova',
      password: '$2b$10$MaX1qOHgkACgJraaMlxcnu/0UiBT0bsoBVh/hF9VHrk7kojeMREU6',
      roles: ['USER'],
    },
  });
  const parashchak = await prisma.user.upsert({
    where: { userName: 'parashchak' },
    update: {},
    create: {
      userName: 'parashchak',
      password: '$2b$10$MaX1qOHgkACgJraaMlxcnu/0UiBT0bsoBVh/hF9VHrk7kojeMREU6',
      roles: ['USER'],
    },
  });
  const petryshyn = await prisma.user.upsert({
    where: { userName: 'petryshyn' },
    update: {},
    create: {
      userName: 'petryshyn',
      password: '$2b$10$MaX1qOHgkACgJraaMlxcnu/0UiBT0bsoBVh/hF9VHrk7kojeMREU6',
      roles: ['USER'],
    },
  });
  const tatarevych = await prisma.user.upsert({
    where: { userName: 'tatarevych' },
    update: {},
    create: {
      userName: 'tatarevych',
      password: '$2b$10$MaX1qOHgkACgJraaMlxcnu/0UiBT0bsoBVh/hF9VHrk7kojeMREU6',
      roles: ['USER'],
    },
  });
  const franchuk = await prisma.user.upsert({
    where: { userName: 'franchuk' },
    update: {},
    create: {
      userName: 'franchuk',
      password: '$2b$10$MaX1qOHgkACgJraaMlxcnu/0UiBT0bsoBVh/hF9VHrk7kojeMREU6',
      roles: ['USER'],
    },
  });
  const chaplia = await prisma.user.upsert({
    where: { userName: 'chaplia' },
    update: {},
    create: {
      userName: 'chaplia',
      password: '$2b$10$MaX1qOHgkACgJraaMlxcnu/0UiBT0bsoBVh/hF9VHrk7kojeMREU6',
      roles: ['USER'],
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
