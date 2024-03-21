import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { GetSpecialistParametersDto } from '~/specialists/application/dto/get-specialist-parameters.dto';
import { MainDto } from '../../../application/dto/main.dto';
import { ReadRepository } from '../../../application/read.repository';
import { MainMapper } from './mappers/main.mapper';

@Injectable()
export class PrismaReadRepository implements ReadRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getMain({
    alias,
  }: GetSpecialistParametersDto): Promise<MainDto | null> {
    const specialist = await this.prismaService.specialist.findUnique({
      where: {
        alias: alias,
      },
      select: PrismaReadRepository.mainSelect,
    });

    if (!specialist) {
      return null;
    }

    return MainMapper.mapToDto(specialist);
  }

  static mainSelect = Prisma.validator<Prisma.SpecialistSelect>()({
    firstName: true,
    lastName: true,
    dimensionItems: {
      where: {
        dimension: {
          alias: 'specialties',
        },
      },
      select: {
        dimensionItem: {
          select: {
            title: true,
          },
        },
      },
    },
    phones: true,
    emails: true,
    websites: true,
  });

  static main = Prisma.validator<Prisma.SpecialistDefaultArgs>()({
    select: PrismaReadRepository.mainSelect,
  });
}
