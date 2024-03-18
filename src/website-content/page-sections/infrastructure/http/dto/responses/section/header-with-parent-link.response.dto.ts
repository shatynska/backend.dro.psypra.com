import { ApiProperty } from '@nestjs/swagger';
import {
  HeaderHeadingsResponseDto,
  headerHeadingsResponseDtoStubs,
} from './header-headings.response.dto';
import {
  HeaderWithHrefResponseDto,
  headerWithHrefResponseDtoStubs,
} from './header-with-href.response.dto';

export class HeaderWithParentLinkResponseDto {
  @ApiProperty({ example: headerHeadingsResponseDtoStubs[1] })
  headings: HeaderHeadingsResponseDto;

  @ApiProperty({
    example: headerWithHrefResponseDtoStubs[0],
  })
  parentLink: HeaderWithHrefResponseDto;
}

export const headerWithParentLinkResponseDtoStubs: HeaderWithParentLinkResponseDto[] =
  [
    {
      headings: headerHeadingsResponseDtoStubs[1],
      parentLink: headerWithHrefResponseDtoStubs[0],
    },
  ];
