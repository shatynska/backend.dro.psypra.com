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

  console.log({
    shatynska,
  });
}
