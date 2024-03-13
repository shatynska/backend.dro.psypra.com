import { GetPageSectionParametersDto } from './dto/get-page-section-parameters.dto';
import { PageSectionHeaderDto } from './dto/page-section-header.dto';

export const PAGE_SECTIONS_READ_REPOSITORY_TOKEN = Symbol(
  'SectionsReadRepositoryToken',
);

export interface PageSectionsReadRepository {
  getPageSectionHeader({
    page,
    section,
  }: GetPageSectionParametersDto): Promise<PageSectionHeaderDto | null>;

  getPageSectionHeaderWithParentLink({
    page,
    section,
  }: GetPageSectionParametersDto): Promise<PageSectionHeaderDto | null>;
}
