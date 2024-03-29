import { ApiProperty } from '@nestjs/swagger';
import { HeaderWithParentLinkDto } from '~/section-headers/application/dto/header-with-parent-link.dto';
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
    this.header.parentLink = header.parentLink;
  }
}

export const sectionResponseDtoStubs: SectionWithHeaderWithParentLinkResponseDto[] =
  [
    {
      header: headerWithParentLinkResponseDtoStubs[0],
    },
  ];
