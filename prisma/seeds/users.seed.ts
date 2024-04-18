export async function seedUsers(prisma) {
  const shatynska = await prisma.user.upsert({
    where: { userName: 'shatynska' },
    update: {},
    create: {
      userName: 'shatynska',
      email: 'shatynska@gmail.com',
      password: '$2b$10$.Hxj5gYRn5L4DSIp/Uu.Yu.lzJEzj8MkNBBeSkR91rgTozgirFkym',
      roles: ['ADMIN', 'USER'],
    },
  });
  const sozanska = await prisma.user.upsert({
    where: { userName: 'sozanska' },
    update: {},
    create: {
      userName: 'sozanska',
      email: 'ira.sozanska@gmail.com',
      password: '$2b$10$.Hxj5gYRn5L4DSIp/Uu.Yu.lzJEzj8MkNBBeSkR91rgTozgirFkym',
      roles: ['ADMIN', 'USER'],
    },
  });
  const berchuk = await prisma.user.upsert({
    where: { userName: 'berchuk' },
    update: {},
    create: {
      userName: 'berchuk',
      email: 'volodymyr.berchuk@gmail.com',
      password: '$2b$10$.Hxj5gYRn5L4DSIp/Uu.Yu.lzJEzj8MkNBBeSkR91rgTozgirFkym',
      roles: ['USER'],
    },
  });
  const bilas = await prisma.user.upsert({
    where: { userName: 'bilas' },
    update: {},
    create: {
      userName: 'bilas',
      email: 'petrechko13@gmail.com',
      password: '$2b$10$.Hxj5gYRn5L4DSIp/Uu.Yu.lzJEzj8MkNBBeSkR91rgTozgirFkym',
      roles: ['USER'],
    },
  });
  const hambarova = await prisma.user.upsert({
    where: { userName: 'hambarova' },
    update: {},
    create: {
      userName: 'hambarova',
      password: '$2b$10$.Hxj5gYRn5L4DSIp/Uu.Yu.lzJEzj8MkNBBeSkR91rgTozgirFkym',
      roles: ['USER'],
    },
  });
  const drobchak = await prisma.user.upsert({
    where: { userName: 'drobchak' },
    update: {},
    create: {
      userName: 'drobchak',
      email: 'olgadrrobchak@gmail.com',
      password: '$2b$10$.Hxj5gYRn5L4DSIp/Uu.Yu.lzJEzj8MkNBBeSkR91rgTozgirFkym',
      roles: ['USER'],
    },
  });
  const kotsiuba = await prisma.user.upsert({
    where: { userName: 'kotsiuba' },
    update: {},
    create: {
      userName: 'kotsiuba',
      email: 'galinakotsyuba839@gmail.com',
      password: '$2b$10$.Hxj5gYRn5L4DSIp/Uu.Yu.lzJEzj8MkNBBeSkR91rgTozgirFkym',
      roles: ['USER'],
    },
  });
  const lekh = await prisma.user.upsert({
    where: { userName: 'lekh' },
    update: {},
    create: {
      userName: 'lekh',
      email: 'Nlech1903@ukr.net',
      password: '$2b$10$.Hxj5gYRn5L4DSIp/Uu.Yu.lzJEzj8MkNBBeSkR91rgTozgirFkym',
      roles: ['USER'],
    },
  });
  const nekrasova = await prisma.user.upsert({
    where: { userName: 'nekrasova' },
    update: {},
    create: {
      userName: 'nekrasova',
      email: 'vali4ka.nekrasova@gmail.com',
      password: '$2b$10$.Hxj5gYRn5L4DSIp/Uu.Yu.lzJEzj8MkNBBeSkR91rgTozgirFkym',
      roles: ['USER'],
    },
  });
  const parashchak = await prisma.user.upsert({
    where: { userName: 'parashchak' },
    update: {},
    create: {
      userName: 'parashchak',
      password: '$2b$10$.Hxj5gYRn5L4DSIp/Uu.Yu.lzJEzj8MkNBBeSkR91rgTozgirFkym',
      roles: ['USER'],
    },
  });
  const petryshyn = await prisma.user.upsert({
    where: { userName: 'petryshyn' },
    update: {},
    create: {
      userName: 'petryshyn',
      email: 'Petryshyn.olinka17@gmail.com',
      password: '$2b$10$.Hxj5gYRn5L4DSIp/Uu.Yu.lzJEzj8MkNBBeSkR91rgTozgirFkym',
      roles: ['USER'],
    },
  });
  const tatarevych = await prisma.user.upsert({
    where: { userName: 'tatarevych' },
    update: {},
    create: {
      userName: 'tatarevych',
      password: '$2b$10$.Hxj5gYRn5L4DSIp/Uu.Yu.lzJEzj8MkNBBeSkR91rgTozgirFkym',
      roles: ['USER'],
    },
  });
  const franchuk = await prisma.user.upsert({
    where: { userName: 'franchuk' },
    update: {},
    create: {
      userName: 'franchuk',
      email: 'franchuk.dok@gmail.com',
      password: '$2b$10$.Hxj5gYRn5L4DSIp/Uu.Yu.lzJEzj8MkNBBeSkR91rgTozgirFkym',
      roles: ['USER'],
    },
  });
  const chaplia = await prisma.user.upsert({
    where: { userName: 'chaplia' },
    update: {},
    create: {
      userName: 'chaplia',
      password: '$2b$10$.Hxj5gYRn5L4DSIp/Uu.Yu.lzJEzj8MkNBBeSkR91rgTozgirFkym',
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
