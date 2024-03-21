import { ApiProperty } from '@nestjs/swagger';
import { DimensionMainDto } from '~/page-sections/application/dto/dimension-main/dimension-main.dto';
import { headerWithParentLinkResponseDtoStubs } from '../section/header-with-parent-link.response.dto';
import { SectionWithHeaderWithParentLinkResponseDto } from '../section/section-with-header-with-parent-link.response.dto';
import {
  DimensionMainContentResponseDto,
  dimensionMainContentResponseDtoStubs,
} from './dimension-main-content.response.dto';

export class DimensionMainResponseDto extends SectionWithHeaderWithParentLinkResponseDto {
  @ApiProperty({ example: dimensionMainContentResponseDtoStubs[0] })
  content: DimensionMainContentResponseDto;

  constructor(section: DimensionMainDto) {
    super(section.header);
    this.content = section.content;
  }
}

export const dimensionMainResponseDtoStubs: DimensionMainResponseDto[] = [
  {
    header: headerWithParentLinkResponseDtoStubs[0],
    content: dimensionMainContentResponseDtoStubs[0],
  },
];
