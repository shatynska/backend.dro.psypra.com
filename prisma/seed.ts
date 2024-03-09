import { PrismaClient } from '@prisma/client';
import { seedCashBooks } from './seeds/cash-books.seed';
import { seedPageSections } from './seeds/page-sections.seed';
import { seedUsers } from './seeds/users.seed';
const prisma = new PrismaClient();

async function main(prisma) {
  seedUsers(prisma);
  seedCashBooks(prisma);
  seedPageSections(prisma);
}

main(prisma)
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
