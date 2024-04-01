import { HomeQuestionsDto } from './dto/home-questions.dto';
import { SectionHeaderWithHrefDto } from './dto/section-header-with-href.dto';
import { SectionHeaderDto } from './dto/section-header.dto';

export const READ_REPOSITORY_TOKEN = Symbol('PageSectionsReadRepositoryToken');

export interface ReadRepository {
  getHomeQuestions(): Promise<HomeQuestionsDto>;

  getSectionHeader(sectionAlias: string): Promise<SectionHeaderDto | null>;

  getSectionHeaderWithHref(
    sectionAlias: string,
  ): Promise<SectionHeaderWithHrefDto | null>;
}
