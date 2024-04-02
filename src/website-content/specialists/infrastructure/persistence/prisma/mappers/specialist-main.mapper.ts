import { Prisma } from '@prisma/client';
import { SpecialistMainDto } from '../../../../application/dto/specialist-main.dto';
import { PrismaReadRepository } from '../read.repository';

type Props = Prisma.SpecialistGetPayload<
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
  }: Props): SpecialistMainDto {
    return {
      fullName: `${lastName} ${firstName}`,
      specialties: dimensionItems
        .map((specialty) => specialty.dimensionItem.title)
        .join(', '),
      phones: phones,
      emails: emails,
      websites: websites,
    };
  }
}
