import { ApiProperty } from '@nestjs/swagger';
import {
  HeaderHeadingsResponseDto,
  headerHeadingsResponseDtoStubs,
} from './header-headings.response.dto';

export class HeaderResponseDto {
  @ApiProperty({
    example: headerHeadingsResponseDtoStubs[0],
  })
  headings: HeaderHeadingsResponseDto;
}

export const headerResponseDtoStubs: HeaderResponseDto[] = [
  {
    headings: headerHeadingsResponseDtoStubs[0],
  },
  {
    headings: headerHeadingsResponseDtoStubs[1],
  },
];
