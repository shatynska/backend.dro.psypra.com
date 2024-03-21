import { Prisma } from '@prisma/client';
import { MainDto } from '../../../../application/dto/main.dto';
import { PrismaReadRepository } from '../read.repository';

export class MainMapper {
  static mapToDto(
    params: Prisma.SpecialistGetPayload<typeof PrismaReadRepository.main>,
  ): MainDto {
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
