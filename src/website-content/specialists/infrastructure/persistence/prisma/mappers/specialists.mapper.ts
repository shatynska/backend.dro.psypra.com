import { Prisma } from '@prisma/client';
import { SpecialistsDto } from '../../../../application/dto/specialists.dto';
import { PrismaReadRepository } from '../prisma.read.repository';

type Parameters = Prisma.SpecialistGetPayload<
  typeof PrismaReadRepository.specialistEssential
>[];

export class SpecialistsMapper {
  static mapToDto(specialists: Parameters): SpecialistsDto {
    return {
      specialists: specialists.map((specialist) => ({
        fullName: `${specialist.lastName} ${specialist.firstName}`,
        specialties: specialist.dimensionItems
          .map((specialty) => specialty.dimensionItem.title)
          .join(', '),
        alias: specialist.alias,
        href: `/specialists/${specialist.alias}`,
      })),
    };
  }
}
