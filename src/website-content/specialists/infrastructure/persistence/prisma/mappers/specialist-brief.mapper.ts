import { Prisma } from '@prisma/client';
import { SpecialistBriefDimensionItemsDto } from '~/specialists/application/dto/specialist-brief/specialist-brief-dimension-items.dto';
import { PrismaReadRepository } from '../read.repository';

type Props = Prisma.SpecialistGetPayload<
  typeof PrismaReadRepository.specialistBrief
>;

export class SpecialistBriefMapper {
  static mapToDto(data: Props): SpecialistBriefDimensionItemsDto {
    const mappedData = {
      items: data.dimensionItems.map(
        (dimension) => dimension.dimensionItem.title,
      ),
    };

    return mappedData;
  }
}
