import { ApiProperty } from '@nestjs/swagger';
import { SpecialistMainDto } from '~/page-sections/application/dto/specialist-main/specialist-main.dto';
import { headerWithParentLinkResponseDtoStubs } from '../section/header-with-parent-link.response.dto';
import { SectionWithHeaderWithParentLinkResponseDto } from '../section/section-with-header-with-parent-link.response.dto';
import {
  SpecialistMainContentResponseDto,
  specialistMainContentResponseDtoStubs,
} from './specialist-main-content.response.dto';

export class SpecialistMainResponseDto extends SectionWithHeaderWithParentLinkResponseDto {
  @ApiProperty({ example: specialistMainContentResponseDtoStubs[0] })
  content: SpecialistMainContentResponseDto;

  constructor(section: SpecialistMainDto) {
    super(section.header);
    this.content = section.content;
  }
}

export const specialistMainResponseDtoStubs: SpecialistMainResponseDto[] = [
  {
    header: headerWithParentLinkResponseDtoStubs[0],
    content: specialistMainContentResponseDtoStubs[0],
  },
];
