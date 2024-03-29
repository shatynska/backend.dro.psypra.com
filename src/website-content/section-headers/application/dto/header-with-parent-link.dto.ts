import { HeaderDto } from './header.dto';

export class HeaderWithParentLinkDto extends HeaderDto {
  parentLink: Required<HeaderDto>;
}
