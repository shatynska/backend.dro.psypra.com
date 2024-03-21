import { ApiProperty } from '@nestjs/swagger';
import { HeaderWithParentLinkDto } from '~/page-sections/application/dto/section/header-with-parent-link.dto';
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

  constructor(header: HeaderWithParentLinkDto) {
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
