import { ApiProperty } from '@nestjs/swagger';
import { HeaderDto } from '~/section-headers/application/dto/header.dto';
import {
  HeaderHeadingsResponseDto,
  headerHeadingsResponseDtoStubs,
} from './header-headings.response.dto';

export class HeaderWithHrefResponseDto {
  @ApiProperty({
    example: headerHeadingsResponseDtoStubs[0],
  })
  headings: HeaderHeadingsResponseDto;

  @ApiProperty({ example: '/#questions' })
  href: string;

  constructor(header: HeaderDto) {
    Object.assign(this, header);
  }
}

export const headerWithHrefResponseDtoStubs: HeaderWithHrefResponseDto[] = [
  {
    headings: headerHeadingsResponseDtoStubs[0],
    href: '/#questions',
  },
  {
    headings: headerHeadingsResponseDtoStubs[1],
    href: '/specialties',
  },
  {
    headings: headerHeadingsResponseDtoStubs[2],
    href: '/specialists',
  },
];
