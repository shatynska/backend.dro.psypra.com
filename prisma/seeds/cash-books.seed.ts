export async function seedCashBooks(prisma) {
  const cashBook = await prisma.cashBook.upsert({
    where: { id: 'c0287617-9f36-489e-ba72-d462777987e9' },
    update: {},
    create: {
      id: 'c0287617-9f36-489e-ba72-d462777987e9',
      title: '2024',
      cashBalance: 635000,
    },
  });

  console.log({
    cashBook,
  });
}
