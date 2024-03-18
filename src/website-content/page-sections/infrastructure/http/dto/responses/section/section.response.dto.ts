import { ApiProperty } from '@nestjs/swagger';
import { HeaderDto } from '~/page-sections/application/dto/header.dto';
import {
  HeaderResponseDto,
  headerResponseDtoStubs,
} from './header.response.dto';

export class SectionResponseDto {
  @ApiProperty({ example: headerResponseDtoStubs[0] })
  header: HeaderResponseDto;

  constructor(header: HeaderDto) {
    this.header = {
      headings: {
        primary: header.primaryHeading,
        secondary: header.secondaryHeading,
      },
    };
  }
}

export const sectionResponseDtoStubs: SectionResponseDto[] = [
  {
    header: headerResponseDtoStubs[0],
  },
];
