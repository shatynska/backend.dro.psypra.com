import { HomeQuestionsPageSectionContentItemResponseDto } from '../infrastructure/http/dto/responses/home-question-page-section/home-questions-page-section-content-item.response.dto';
import { GetPageSectionParametersDto } from './dto/get-page-section-parameters.dto';
import { PageSectionHeaderDto } from './dto/page-section-header.dto';

export const PAGE_SECTIONS_READ_REPOSITORY_TOKEN = Symbol(
  'SectionsReadRepositoryToken',
);

export interface PageSectionsReadRepository {
  getHomeQuestionsPageSectionContentItems(): Promise<
    HomeQuestionsPageSectionContentItemResponseDto[]
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
