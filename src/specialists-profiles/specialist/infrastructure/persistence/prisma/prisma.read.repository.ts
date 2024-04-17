import { Injectable } from '@nestjs/common';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { ReadRepository } from '../../../application/repositories/read.repository';

@Injectable()
export class PrismaReadRepository implements ReadRepository {
  constructor(private readonly prismaService: PrismaService) {}
}
