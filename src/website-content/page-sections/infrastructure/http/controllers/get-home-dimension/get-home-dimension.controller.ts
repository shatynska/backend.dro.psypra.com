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
import { HomeDimensionDto } from '~/page-sections/application/dto/home-dimension/home-dimension.dto';
import { SectionNotFoundError } from '~/page-sections/application/errors/section-not-found.error';
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
    const section: Result<SectionNotFoundError, HomeDimensionDto> =
      await this.queryBus.execute(new GetHomeDimensionQuery(dimension));

    if (section.isFailure()) {
      throw new NotFoundException(section.value.message);
    }

    return new HomeDimensionResponseDto(section.value);
  }
}
