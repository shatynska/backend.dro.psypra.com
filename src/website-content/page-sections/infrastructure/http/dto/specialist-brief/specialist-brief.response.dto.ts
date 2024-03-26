import { ApiProperty } from '@nestjs/swagger';
import { SpecialistBriefDto } from '~/page-sections/application/dto/specialist-brief/specialist-brief.dto';
import { headerResponseDtoStubs } from '../section/header.response.dto';
import { SectionResponseDto } from '../section/section.response.dto';
import {
  SpecialistBriefContentResponseDto,
  specialistBriefContentResponseDtoStubs,
} from './specialist-brief-content.response.dto';

export class SpecialistBriefResponseDto extends SectionResponseDto {
  @ApiProperty({ example: specialistBriefContentResponseDtoStubs[0] })
  content: SpecialistBriefContentResponseDto;

  constructor(section: SpecialistBriefDto) {
    super(section.header);
    this.content = section.content;
  }
}

export const specialistBriefResponseDtoStubs: SpecialistBriefResponseDto[] = [
  {
    header: headerResponseDtoStubs[0],
    content: specialistBriefContentResponseDtoStubs[0],
  },
];
