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
import { GetHomeDimensionSectionResult } from '~/page-sections/application/queries/get-home-dimension/get-home-dimension-section.result';
import { GetHomeDimensionQuery } from '~/page-sections/application/queries/get-home-dimension/get-home-dimension.query';
import { Result } from '~/shared/core/result';
import { HomeDimensionResponseDto } from '../../dto/home-dimension/home-dimension.response.dto';

@Controller('pages')
@Public()
@ApiTags('pages')
export class GetHomeDimensionController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiResponse({
    status: 200,
    type: HomeDimensionResponseDto,
  })
  @ApiErrorDecorator(HttpStatus.NOT_FOUND, SectionNotFoundError.defaultMessage)
  @Get('home/:dimension')
  async execute(
    @Param('dimension') dimension: string,
  ): Promise<HomeDimensionResponseDto> {
    const query = new GetHomeDimensionQuery(dimension);

    const section = await this.queryBus.execute<
      GetHomeDimensionQuery,
      Result<SectionNotFoundError, GetHomeDimensionSectionResult>
    >(query);

    if (section.isFailure()) {
      throw new NotFoundException(section.value.message);
    }

    return new HomeDimensionResponseDto(section.value);
  }
}
