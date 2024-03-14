import { GetPageSectionParametersDto } from './dto/get-page-section-parameters.dto';
import { HomeQuestionsPageSectionContentItemDto } from './dto/home-questions-page-section-content-item.dto';
import { PageSectionHeaderDto } from './dto/page-section-header.dto';

export const PAGE_SECTIONS_READ_REPOSITORY_TOKEN = Symbol(
  'SectionsReadRepositoryToken',
);

export interface PageSectionsReadRepository {
  getHomeQuestionsPageSectionContentItems(): Promise<
    HomeQuestionsPageSectionContentItemDto[]
  >;

  getPageSectionHeader({
    page,
    section,
  }: GetPageSectionParametersDto): Promise<PageSectionHeaderDto | null>;

  getPageSectionHeaderWithParentLink({
    page,
    section,
  }: GetPageSectionParametersDto): Promise<PageSectionHeaderDto | null>;
}
