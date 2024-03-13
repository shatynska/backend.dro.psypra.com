import { PageSection } from '@prisma/client';
import { HomeQuestionsPageSectionContentItemDto } from '~/page-sections/application/dto/home-questions-page-section-content-item.dto copy';

type Props = Pick<PageSection, 'secondaryHeading' | 'href'>[];

export class HomeQuestionsPageSectionContentItemsMapper {
  static mapToDto(data: Props): HomeQuestionsPageSectionContentItemDto[] {
    const mappedData = data.map((item) => ({
      title: item.secondaryHeading,
      href: item.href,
    }));

    return mappedData;
  }
}
