import { ApiProperty } from '@nestjs/swagger';
import { HeaderDto } from '~/page-sections/application/dto/section/header.dto';
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

  constructor(header: HeaderDto) {
    super(header);
    this.header.href = header.href;
  }
}

export const sectionResponseDtoStubs: SectionWithHeaderWithHrefResponseDto[] = [
  {
    header: headerWithHrefResponseDtoStubs[0],
  },
];
