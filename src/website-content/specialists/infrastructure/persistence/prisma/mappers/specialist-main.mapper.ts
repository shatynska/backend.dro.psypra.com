import { Prisma } from '@prisma/client';
import { SpecialistMainDto } from '../../../../application/dto/specialist-main.dto';
import { PrismaReadRepository } from '../read.repository';

export class SpecialistMainMapper {
  static mapToDto(
    params: Prisma.SpecialistGetPayload<
      typeof PrismaReadRepository.specialistMain
    >,
  ): SpecialistMainDto {
    const mappedData = {
      firstName: params.firstName,
      lastName: params.lastName,
      specialties: params.dimensionItems.map(
        (specialty) => specialty.dimensionItem.title,
      ),
      phones: params.phones,
      emails: params.emails,
      websites: params.websites,
    };

    return mappedData;
  }
}
