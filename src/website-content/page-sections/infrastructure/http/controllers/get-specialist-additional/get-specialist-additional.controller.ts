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
import { SpecialistAdditionalDto } from '~/page-sections/application/dto/specialist-additional.dto';
import { SectionNotFoundError } from '~/page-sections/application/errors/section-not-found.error';
import { GetSpecialistAdditionalQuery } from '~/page-sections/application/queries/get-specialist-additional/get-specialist-additional.query';
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result } from '~/shared/core/result';
import { SpecialistAdditionalResponseDto } from '../../dto/specialist-additional/specialist-additional.response.dto';

@Controller('pages')
@Public()
@ApiTags('pages')
export class GetSpecialistAdditionalController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiResponse({
    status: 200,
    type: SpecialistAdditionalResponseDto,
  })
  @ApiErrorDecorator(HttpStatus.NOT_FOUND, SectionNotFoundError.defaultMessage)
  @Get('specialists/:specialist/:section')
  async handle(
    @Param('specialist') specialist: string,
    @Param('section') section: string,
  ) {
    const query = new GetSpecialistAdditionalQuery(specialist, section);

    const data = await this.queryBus.execute<
      GetSpecialistAdditionalQuery,
      Result<NotFoundError, SpecialistAdditionalDto>
    >(query);

    if (data.isFailure()) {
      throw new NotFoundException(data.value.message);
    }

    return new SpecialistAdditionalResponseDto(data.value);
  }
}
