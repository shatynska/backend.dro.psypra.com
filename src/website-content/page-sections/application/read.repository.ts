import { HomeQuestionsContentItemDto } from './dto/home-questions/home-questions-content-item.dto';
import { HeaderWithHrefDto } from './dto/section/header-with-href.dto';
import { HeaderWithParentLinkDto } from './dto/section/header-with-parent-link.dto';

export const READ_REPOSITORY_TOKEN = Symbol('PageSectionsReadRepositoryToken');

export interface ReadRepository {
  getHeader(
    pageAlias: string,
    sectionAlias: string,
  ): Promise<HeaderWithHrefDto | null>;

  getHeaderWithParentLink(
    pageAlias: string,
    sectionAlias: string,
  ): Promise<HeaderWithParentLinkDto | null>;

  getHomeQuestionsContentItems(): Promise<HomeQuestionsContentItemDto[]>;
}
