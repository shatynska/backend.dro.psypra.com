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
import { SectionNotFoundError } from '~/page-sections/application/errors/section-not-found.error';
import { GetSpecialistAdditionalHandler } from '~/page-sections/application/queries/get-specialist-additional/get-specialist-additional.handler';
import { GetSpecialistAdditionalQuery } from '~/page-sections/application/queries/get-specialist-additional/get-specialist-additional.query';
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
  async execute(
    @Param('specialist') specialist: string,
    @Param('section') section: string,
  ) {
    const data = await this.queryBus.execute<
      GetSpecialistAdditionalQuery,
      Awaited<ReturnType<GetSpecialistAdditionalHandler['execute']>>
    >(new GetSpecialistAdditionalQuery(specialist, section));

    if (data.isFailure()) {
      throw new NotFoundException(data.value.message);
    }

    return new SpecialistAdditionalResponseDto(data.value);
  }
}
