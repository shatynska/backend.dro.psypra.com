import { ApiProperty } from '@nestjs/swagger';
import { HomeDimensionDto } from '~/page-sections/application/dto/home-dimension/home-dimension.dto';
import { headerWithHrefResponseDtoStubs } from '../section/header-with-href.response.dto';
import { SectionResponseDto } from '../section/section.response.dto';
import {
  HomeDimensionContentResponseDto,
  homeDimensionContentResponseDtoStubs,
} from './home-dimension-content.response.dto';

export class HomeDimensionResponseDto extends SectionResponseDto {
  @ApiProperty({ example: homeDimensionContentResponseDtoStubs[1] })
  content: HomeDimensionContentResponseDto;

  constructor(section: HomeDimensionDto) {
    super(section.header);
    this.content = section.content;
  }
}

export const homeDimensionResponseDtoStubs: HomeDimensionResponseDto[] = [
  {
    header: headerWithHrefResponseDtoStubs[1],
    content: homeDimensionContentResponseDtoStubs[1],
  },
];
