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
import { GetLastNameQuery, GetLastNameResult } from '../../../application';
import { GetLastNameResponse } from './get-last-name.response';

@Controller('profiles')
@ApiTags('profiles')
export class GetLastNameController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiResponse({
    status: 200,
    type: GetLastNameResponse,
  })
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse()
  @UseGuards(AdminOrOwnerGuard)
  @ApiBearerAuth()
  @Get(':specialist/core/last-name')
  async handle(@Param('specialist') specialist: SpecialistAliasPathParameter) {
    const query = new GetLastNameQuery({ alias: specialist });

    const data = await this.queryBus.execute<
      GetLastNameQuery,
      GetLastNameResult
    >(query);

    if (data === null) {
      throw new NotFoundException(data);
    }

    return new GetLastNameResponse(data);
  }
}
