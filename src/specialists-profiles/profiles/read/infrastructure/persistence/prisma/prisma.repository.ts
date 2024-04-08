import { Injectable } from '@nestjs/common';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';

@Injectable()
export class PrismaRepository {
  constructor(private readonly prismaService: PrismaService) {}
}
