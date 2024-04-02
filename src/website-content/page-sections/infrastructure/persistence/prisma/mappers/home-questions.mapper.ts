import { PageSection } from '@prisma/client';
import { HomeQuestionsDto } from '~/page-sections/application/dto/home-questions.dto';

type Parameters = Pick<PageSection, 'secondaryHeading' | 'href'>[];

export class HomeQuestionsMapper {
  static mapToDto(questions: Parameters): HomeQuestionsDto {
    return {
      items: questions.map((item) => ({
        title: item.secondaryHeading,
        href: item.href,
      })),
    };
  }
}
