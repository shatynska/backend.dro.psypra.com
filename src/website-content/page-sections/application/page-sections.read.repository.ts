import { GetPageSectionByAliasParametersDto } from './dto/get-page-section-by-alias-parameters.dto';
import { PageSectionHeaderDto } from './dto/page-section-header.dto';

export const PAGE_SECTIONS_READ_REPOSITORY_TOKEN = Symbol(
  'SectionsReadRepositoryToken',
);

export interface PageSectionsReadRepository {
  getPageSectionHeaderByAlias({
    page,
    section,
  }: GetPageSectionByAliasParametersDto): Promise<PageSectionHeaderDto | null>;
}
