import { Injectable } from '@nestjs/common';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { Repository } from '../../../application/repository';

@Injectable()
export class PrismaRepository implements Repository {
  constructor(private readonly prismaService: PrismaService) {}
}
