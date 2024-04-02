import { Prisma } from '@prisma/client';
import { SpecialistMainDto } from '../../../../application/dto/specialist-main.dto';
import { PrismaReadRepository } from '../read.repository';

type Parameters = Prisma.SpecialistGetPayload<
  typeof PrismaReadRepository.specialistMain
>;

export class SpecialistMainMapper {
  static mapToDto({
    firstName,
    lastName,
    dimensionItems,
    phones,
    websites,
    emails,
  }: Parameters): SpecialistMainDto {
    return {
      fullName: `${lastName} ${firstName}`,
      specialties: dimensionItems
        .map((specialty) => specialty.dimensionItem.title)
        .join(', '),
      phones,
      emails,
      websites,
    };
  }
}
