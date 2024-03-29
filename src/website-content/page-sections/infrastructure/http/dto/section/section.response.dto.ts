import { ApiProperty } from '@nestjs/swagger';
import { HeaderDto } from '~/section-headers/application/dto/header.dto';
import {
  HeaderResponseDto,
  headerResponseDtoStubs,
} from './header.response.dto';

export class SectionResponseDto {
  @ApiProperty({ example: headerResponseDtoStubs[0] })
  header: HeaderResponseDto;

  constructor(header: HeaderDto) {
    this.header = header;
  }
}

export const sectionResponseDtoStubs: SectionResponseDto[] = [
  {
    header: headerResponseDtoStubs[0],
  },
];
