import {
  Controller,
  Get,
  NotFoundException,
  Param,
  UseGuards,
} from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import {
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { SpecialistAliasPathParameter } from '~/shared';
import { AdminOrOwnerGuard } from '../../../../shared';
import { GetCoreQuery, GetCoreResult } from '../../../application';
import { GetCoreResponse } from './get-core.response';

@Controller('profiles')
@ApiTags('profiles')
export class GetCoreController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiResponse({
    status: 200,
    type: GetCoreResponse,
  })
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse()
  @UseGuards(AdminOrOwnerGuard)
  @ApiBearerAuth()
  @Get(':specialist/core')
  async handle(@Param('specialist') specialist: SpecialistAliasPathParameter) {
    const query = new GetCoreQuery({ alias: specialist });

    const data = await this.queryBus.execute<GetCoreQuery, GetCoreResult>(
      query,
    );

    if (data === null) {
      throw new NotFoundException(data);
    }

    return new GetCoreResponse(data);
  }
}
