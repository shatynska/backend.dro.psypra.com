import { Injectable } from '@nestjs/common';
import { CoreDto } from 'src/specialists-profiles/core/application/dto/core.dto';
import { SpecialistAliasDto } from '~/shared/application/dto/specialist-alias.dto';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { ReadRepository } from '../../../application/repositories/read.repository';

@Injectable()
export class PrismaReadRepository implements ReadRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async getCore({ alias }: SpecialistAliasDto): Promise<CoreDto | null> {
    const data = await this.prismaService.specialist.findUnique({
      where: {
        alias: alias,
      },
      select: {
        isPublic: true,
        firstName: true,
        lastName: true,
      },
    });

    return data;
  }
}
