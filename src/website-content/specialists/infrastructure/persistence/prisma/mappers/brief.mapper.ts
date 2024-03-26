import { Prisma } from '@prisma/client';
import { BriefDimensionItemsDto } from '~/specialists/application/dto/brief/brief-dimension-items.dto';
import { PrismaReadRepository } from '../read.repository';

type Props = Prisma.SpecialistGetPayload<typeof PrismaReadRepository.brief>;

export class BriefMapper {
  static mapToDto(data: Props): BriefDimensionItemsDto {
    const mappedData = {
      items: data.dimensionItems.map(
        (dimension) => dimension.dimensionItem.title,
      ),
    };

    return mappedData;
  }
}
