import { PrismaClient } from '@prisma/client';
import { seedCashBooks } from './seeds/cash-books.seed';
import { seedDimensionItems } from './seeds/dimension-items.seed';
import { seedDimensions } from './seeds/dimensions.seed';
import { seedPageSections } from './seeds/page-sections.seed';
import { seedSpecialists } from './seeds/specialists.seed';
import { seedUsers } from './seeds/users.seed';
const prisma = new PrismaClient();

async function main(prisma) {
  seedUsers(prisma);
  seedCashBooks(prisma);
  seedDimensions(prisma);
  seedDimensionItems(prisma);
  seedSpecialists(prisma);
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
