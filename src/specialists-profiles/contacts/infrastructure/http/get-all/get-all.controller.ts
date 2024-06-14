import { Controller, Get, Param, UseGuards } from '@nestjs/common';
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
import { GetAllQuery, GetAllResult } from '../../../application';
import { GetAllResponse } from './get-all.response';

@Controller('profiles')
@ApiTags('profiles')
export class GetAllController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiResponse({
    status: 200,
    type: GetAllResponse,
  })
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse()
  @UseGuards(AdminOrOwnerGuard)
  @ApiBearerAuth()
  @Get(':specialist/contacts')
  async handle(@Param('specialist') specialist: SpecialistAliasPathParameter) {
    const query = new GetAllQuery({ alias: specialist });

    const data = await this.queryBus.execute<GetAllQuery, GetAllResult>(query);

    return new GetAllResponse(data);
  }
}
