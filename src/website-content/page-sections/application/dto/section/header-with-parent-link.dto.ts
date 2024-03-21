import { HeaderWithHrefDto } from './header-with-href.dto';
import { HeaderDto } from './header.dto';

export class HeaderWithParentLinkDto extends HeaderDto {
  parentLink: HeaderWithHrefDto;
}
