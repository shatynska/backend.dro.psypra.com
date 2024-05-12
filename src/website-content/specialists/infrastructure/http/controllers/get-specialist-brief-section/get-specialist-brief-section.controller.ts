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
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result } from '~/shared/core/result';
import { SectionNotFoundError } from '../../../../../page-sections/application/errors/section-not-found.error';
import { GetSpecialistBriefSectionQuery } from '../../../../application/queries/get-specialist-brief-section/get-specialist-brief-section.query';
import { GetSpecialistBriefSectionResult } from '../../../../application/queries/get-specialist-brief-section/get-specialist-brief-section.result';
import { GetSpecialistBriefSectionResponse } from './get-specialist-brief-section.response';

@Controller('pages')
@Public()
@ApiTags('pages')
export class GetSpecialistBriefSectionController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiResponse({
    status: 200,
    type: GetSpecialistBriefSectionResponse,
  })
  @ApiErrorDecorator(HttpStatus.NOT_FOUND, SectionNotFoundError.defaultMessage)
  @Get('specialists/:specialist/brief')
  async handle(@Param('specialist') specialist: string) {
    const query = new GetSpecialistBriefSectionQuery(specialist);

    const data = await this.queryBus.execute<
      GetSpecialistBriefSectionQuery,
      Result<NotFoundError, GetSpecialistBriefSectionResult>
    >(query);

    if (data.isFailure()) {
      throw new NotFoundException(data.value.message);
    }

    return new GetSpecialistBriefSectionResponse(data.value);
  }
}
