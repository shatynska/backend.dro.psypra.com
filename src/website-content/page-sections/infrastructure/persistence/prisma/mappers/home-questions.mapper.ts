import { PageSection } from '@prisma/client';
import { HomeQuestionsDto } from '~/page-sections/application/dto/home-questions.dto';

type Props = Pick<PageSection, 'secondaryHeading' | 'href'>[];

export class HomeQuestionsMapper {
  static mapToDto(data: Props): HomeQuestionsDto {
    const mappedData = {
      items: data.map((item) => ({
        title: item.secondaryHeading,
        href: item.href,
      })),
    };

    return mappedData;
  }
}
