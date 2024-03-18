import { ApiProperty } from '@nestjs/swagger';
import { HeaderDto } from '~/page-sections/application/dto/header.dto';
import {
  HeaderWithParentLinkResponseDto,
  headerWithParentLinkResponseDtoStubs,
} from './header-with-parent-link.response.dto';
import { SectionResponseDto } from './section.response.dto';

export class SectionWithHeaderWithParentLinkResponseDto extends SectionResponseDto {
  @ApiProperty({
    type: HeaderWithParentLinkResponseDto,
    example: headerWithParentLinkResponseDtoStubs[0],
  })
  header: HeaderWithParentLinkResponseDto;

  constructor(header: HeaderDto) {
    super(header);
    this.header.parentLink = {
      headings: {
        primary: header.parentLink.primaryHeading,
        secondary: header.parentLink.secondaryHeading,
      },
      href: header.parentLink.href,
    };
  }
}

export const sectionResponseDtoStubs: SectionWithHeaderWithParentLinkResponseDto[] =
  [
    {
      header: headerWithParentLinkResponseDtoStubs[0],
    },
  ];
