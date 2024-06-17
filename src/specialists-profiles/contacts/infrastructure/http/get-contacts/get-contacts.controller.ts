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
import { GetContactsQuery, GetContactsResult } from '../../../application';
import { GetContactsResponse } from './get-contacts.response';

@Controller('profiles')
@ApiTags('profiles')
export class GetContactsController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiResponse({
    status: 200,
    type: GetContactsResponse,
  })
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse()
  @UseGuards(AdminOrOwnerGuard)
  @ApiBearerAuth()
  @Get(':specialist/contacts')
  async handle(@Param('specialist') specialist: SpecialistAliasPathParameter) {
    const query = new GetContactsQuery({ alias: specialist });

    const data = await this.queryBus.execute<
      GetContactsQuery,
      GetContactsResult
    >(query);

    return new GetContactsResponse(data);
  }
}
