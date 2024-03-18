import { ApiProperty } from '@nestjs/swagger';
import { HeaderDto } from '~/page-sections/application/dto/header.dto';
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
    this.headings = {
      primary: header.primaryHeading,
      secondary: header.secondaryHeading,
    };
    this.href = header.secondaryHeading;
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
