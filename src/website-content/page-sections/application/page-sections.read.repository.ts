import { PageSectionDto } from './dto/page-section.dto';

export const PAGE_SECTIONS_READ_REPOSITORY_TOKEN = Symbol(
  'SectionsReadRepositoryToken',
);

export interface PageSectionsReadRepository {
  getPageSectionByAlias({
    page,
    section,
  }: {
    page: string;
    section: string;
  }): Promise<PageSectionDto | null>;
}
