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
import { DimensionMainDto } from '~/page-sections/application/dto/dimension-main/dimension-main.dto';
import { SectionNotFoundError } from '~/page-sections/application/errors/section-not-found.error';
import { GetDimensionMainQuery } from '~/page-sections/application/queries/get-dimension-main/get-dimension-main.query';
import { Result } from '~/shared/core/result';
import { DimensionMainResponseDto } from '../../dto/dimension-main/dimension-main.response.dto';

@Controller('pages')
@Public()
@ApiTags('pages')
export class GetDimensionMainController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiResponse({
    status: 200,
    type: DimensionMainResponseDto,
  })
  @ApiErrorDecorator(HttpStatus.NOT_FOUND, SectionNotFoundError.defaultMessage)
  @Get('dimensions/:dimension/main')
  async execute(
    @Param('dimension') dimension: string,
  ): Promise<DimensionMainResponseDto> {
    const section: Result<SectionNotFoundError, DimensionMainDto> =
      await this.queryBus.execute(
        new GetDimensionMainQuery({ dimensionAlias: dimension }),
      );

    if (section.isFailure()) {
      throw new NotFoundException(section.value.message);
    }

    return new DimensionMainResponseDto(section.value);
  }
}
