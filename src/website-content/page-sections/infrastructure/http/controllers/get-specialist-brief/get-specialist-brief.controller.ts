import { ApiErrorDecorator, Public } from '@common/decorators';
import {
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { SpecialistBriefDto } from '~/page-sections/application/dto/specialist-brief/specialist-brief.dto';
import { SectionNotFoundError } from '~/page-sections/application/errors/section-not-found.error';
import { GetSpecialistBriefQuery } from '~/page-sections/application/queries/get-specialist-brief/get-specialist-brief.query';
import { Result } from '~/shared/core/result';
import { SpecialistBriefResponseDto } from '../../dto/specialist-brief/specialist-brief.response.dto';

@Controller('pages')
@Public()
@ApiTags('pages')
export class GetSpecialistBriefController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiResponse({
    status: 200,
    type: SpecialistBriefResponseDto,
  })
  @ApiErrorDecorator(HttpStatus.NOT_FOUND, SectionNotFoundError.defaultMessage)
  @Get('specialists/:specialist/brief')
  async execute(
    @Param('specialist') specialist: string,
  ): Promise<SpecialistBriefResponseDto> {
    const section: Result<SectionNotFoundError, SpecialistBriefDto> =
      await this.queryBus.execute(
        new GetSpecialistBriefQuery({ specialistAlias: specialist }),
      );

    if (section.isFailure()) {
      throw new NotFoundException(section.value.message);
    }

    return new SpecialistBriefResponseDto(section.value);
  }
}
