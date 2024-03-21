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
import { SpecialistMainDto } from '~/page-sections/application/dto/specialist-main/specialist-main.dto';
import { SectionNotFoundError } from '~/page-sections/application/errors/section-not-found.error';
import { GetSpecialistMainQuery } from '~/page-sections/application/queries/get-specialist-main/get-specialist-main.query';
import { Result } from '~/shared/core/result';
import { SpecialistMainResponseDto } from '../../dto/specialist-main/specialist-main.response.dto';

@Controller('pages')
@Public()
@ApiTags('pages')
export class GetSpecialistMainController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiResponse({
    status: 200,
    type: SpecialistMainResponseDto,
  })
  @ApiErrorDecorator(HttpStatus.NOT_FOUND, SectionNotFoundError.defaultMessage)
  @Get('specialists/:specialist/main')
  async execute(
    @Param('specialist') specialist: string,
  ): Promise<SpecialistMainResponseDto> {
    const section: Result<SectionNotFoundError, SpecialistMainDto> =
      await this.queryBus.execute(
        new GetSpecialistMainQuery({ specialistAlias: specialist }),
      );

    if (section.isFailure()) {
      throw new NotFoundException(section.value.message);
    }

    return new SpecialistMainResponseDto(section.value);
  }
}
