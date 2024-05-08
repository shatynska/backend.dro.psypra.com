import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import {
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { GetCoreQuery } from 'src/specialists-profiles/core/application/queries/get-core/get-core.query';
import { GetCoreResult } from 'src/specialists-profiles/core/application/queries/get-core/get-core.result';
import { AdminOrOwnerGuard } from 'src/specialists-profiles/shared/infrastructure/http/guards/admin-or-owner.guard';
import { Result } from '~/shared/core/result';
import { SpecialistAliasPathParameter } from '~/shared/infrastructure/http/controllers/specialist-alias.path-parameter';
import { GetCoreResponse } from './get-core.response';

@Controller('profile')
@ApiTags('profile')
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

    const data = await this.queryBus.execute<
      GetCoreQuery,
      Result<null, GetCoreResult>
    >(query);

    return data;
  }
}
