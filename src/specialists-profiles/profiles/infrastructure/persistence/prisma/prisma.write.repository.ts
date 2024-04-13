import { Injectable } from '@nestjs/common';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { WriteRepository } from '../../../application/repositories/write.repository';

@Injectable()
export class PrismaWriteRepository implements WriteRepository {
  constructor(private readonly prismaService: PrismaService) {}
}
