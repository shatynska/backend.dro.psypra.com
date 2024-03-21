import { ApiProperty } from '@nestjs/swagger';
import { HeaderWithHrefDto } from '~/page-sections/application/dto/section/header-with-href.dto';
import {
  HeaderWithHrefResponseDto,
  headerWithHrefResponseDtoStubs,
} from './header-with-href.response.dto';
import { SectionResponseDto } from './section.response.dto';

export class SectionWithHeaderWithHrefResponseDto extends SectionResponseDto {
  @ApiProperty({
    type: HeaderWithHrefResponseDto,
    example: headerWithHrefResponseDtoStubs[0],
  })
  header: HeaderWithHrefResponseDto;

  constructor(header: HeaderWithHrefDto) {
    super(header);
    this.header.href = header.href;
  }
}

export const sectionResponseDtoStubs: SectionWithHeaderWithHrefResponseDto[] = [
  {
    header: headerWithHrefResponseDtoStubs[0],
  },
];
