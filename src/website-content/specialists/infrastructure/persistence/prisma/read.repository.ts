import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { SpecialistBriefDimensionItemsDto } from '~/specialists/application/dto/specialist-brief/specialist-brief-dimension-items.dto';
import { SpecialistMainDto } from '../../../application/dto/specialist-main.dto';
import { ReadRepository } from '../../../application/read.repository';
import { SpecialistBriefMapper } from './mappers/specialist-brief.mapper';
import { SpecialistMainMapper } from './mappers/specialist-main.mapper';

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

  async getSpecialistBriefDimensionItems(
    specialistAlias: string,
    dimensionAlias: string,
  ): Promise<SpecialistBriefDimensionItemsDto | null> {
    const specialist = await this.prismaService.specialist.findUnique({
      where: {
        alias: specialistAlias,
      },
      select: {
        dimensionItems: {
          where: {
            dimension: {
              alias: dimensionAlias,
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
      },
    });

    if (!specialist) {
      return null;
    }

    return SpecialistBriefMapper.mapToDto(specialist);
  }

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

  static getSpecialistBriefSelect = (dimensionAlias: string) => {
    return Prisma.validator<Prisma.SpecialistSelect>()({
      dimensionItems: {
        where: {
          dimension: {
            alias: dimensionAlias,
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
  };

  static specialistBrief = Prisma.validator<Prisma.SpecialistDefaultArgs>()({
    select: PrismaReadRepository.getSpecialistBriefSelect('specialist'),
  });
}
