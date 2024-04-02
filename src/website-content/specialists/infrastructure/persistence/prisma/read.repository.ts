import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { SpecialistsDto } from '~/specialists/application/dto/specialists.dto';
import { SpecialistMainDto } from '../../../application/dto/specialist-main.dto';
import { ReadRepository } from '../../../application/read.repository';
import { SpecialistMainMapper } from './mappers/specialist-main.mapper';
import { SpecialistsMapper } from './mappers/specialists.mapper';

@Injectable()
export class PrismaReadRepository implements ReadRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getSpecialistMain(alias: string): Promise<SpecialistMainDto | null> {
    const specialist = await this.prismaService.specialist.findUnique({
      where: {
        alias: alias,
      },
      select: PrismaReadRepository.specialistMainSelect,
    });

    if (!specialist) {
      return null;
    }

    return SpecialistMainMapper.mapToDto(specialist);
  }

  async getSpecialists(): Promise<SpecialistsDto> {
    const specialists = await this.prismaService.specialist.findMany({
      select: PrismaReadRepository.specialistEssentialSelect,
      orderBy: {
        lastName: 'asc',
      },
    });

    return SpecialistsMapper.mapToDto(specialists);
  }

  static specialistEssentialSelect =
    Prisma.validator<Prisma.SpecialistSelect>()({
      alias: true,
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
    });

  static specialistEssential = Prisma.validator<Prisma.SpecialistDefaultArgs>()(
    {
      select: PrismaReadRepository.specialistEssentialSelect,
    },
  );

  static specialistMainSelect = Prisma.validator<Prisma.SpecialistSelect>()({
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

  static specialistMain = Prisma.validator<Prisma.SpecialistDefaultArgs>()({
    select: PrismaReadRepository.specialistMainSelect,
  });
}
