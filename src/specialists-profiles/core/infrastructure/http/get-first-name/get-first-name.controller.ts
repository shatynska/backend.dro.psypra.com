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
import { GetFirstNameQuery, GetFirstNameResult } from '../../../application';
import { GetFirstNameResponse } from './get-first-name.response';

@Controller('profiles')
@ApiTags('profiles')
export class GetFirstNameController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiResponse({
    status: 200,
    type: GetFirstNameResponse,
  })
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse()
  @UseGuards(AdminOrOwnerGuard)
  @ApiBearerAuth()
  @Get(':specialist/core/first-name')
  async handle(@Param('specialist') specialist: SpecialistAliasPathParameter) {
    const query = new GetFirstNameQuery({ alias: specialist });

    const data = await this.queryBus.execute<
      GetFirstNameQuery,
      GetFirstNameResult
    >(query);

    if (data === null) {
      throw new NotFoundException(data);
    }

    return new GetFirstNameResponse(data);
  }
}
