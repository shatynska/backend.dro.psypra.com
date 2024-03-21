import { HomeQuestionsContentItemDto } from './dto/home-questions/home-questions-content-item.dto';
import { GetSectionParametersDto } from './dto/section/get-section.parameters.dto';
import { HeaderWithHrefDto } from './dto/section/header-with-href.dto';
import { HeaderWithParentLinkDto } from './dto/section/header-with-parent-link.dto';

export const READ_REPOSITORY_TOKEN = Symbol('PageSectionsReadRepositoryToken');

export interface ReadRepository {
  getHeader(
    parameters: GetSectionParametersDto,
  ): Promise<HeaderWithHrefDto | null>;

  getHeaderWithParentLink(
    parameters: GetSectionParametersDto,
  ): Promise<HeaderWithParentLinkDto | null>;

  getHomeQuestionsContentItems(): Promise<HomeQuestionsContentItemDto[]>;
}
