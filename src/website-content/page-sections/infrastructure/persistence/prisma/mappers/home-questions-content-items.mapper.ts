import { PageSection } from '@prisma/client';
import { HomeQuestionsContentItemDto } from '~/page-sections/application/dto/home-questions/home-questions-content-item.dto';

type Props = Pick<PageSection, 'secondaryHeading' | 'href'>[];

export class HomeQuestionsContentItemsMapper {
  static mapToDto(data: Props): HomeQuestionsContentItemDto[] {
    const mappedData = data.map((item) => ({
      title: item.secondaryHeading,
      href: item.href,
    }));

    return mappedData;
  }
}
