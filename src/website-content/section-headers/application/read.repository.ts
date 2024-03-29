import { HeaderWithParentLinkDto } from './dto/header-with-parent-link.dto';
import { HeaderDto } from './dto/header.dto';

export const READ_REPOSITORY_TOKEN = Symbol(
  'SectionHeadersReadRepositoryToken',
);

export interface ReadRepository {
  getHeader(pageAlias: string, sectionAlias: string): Promise<HeaderDto | null>;

  getHeaderWithParentLink(
    pageAlias: string,
    sectionAlias: string,
  ): Promise<HeaderWithParentLinkDto | null>;
}
