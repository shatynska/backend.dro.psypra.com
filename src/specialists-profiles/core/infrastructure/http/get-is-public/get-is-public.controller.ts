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
import { GetIsPublicQuery, GetIsPublicResult } from '../../../application';
import { GetIsPublicResponse } from './get-is-public.response';

@Controller('profiles')
@ApiTags('profiles')
export class GetIsPublicController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiResponse({
    status: 200,
    type: GetIsPublicResponse,
  })
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse()
  @UseGuards(AdminOrOwnerGuard)
  @ApiBearerAuth()
  @Get(':specialist/core/is-public')
  async handle(@Param('specialist') specialist: SpecialistAliasPathParameter) {
    const query = new GetIsPublicQuery({ alias: specialist });

    const data = await this.queryBus.execute<
      GetIsPublicQuery,
      GetIsPublicResult
    >(query);

    if (data === null) {
      throw new NotFoundException(data);
    }

    return new GetIsPublicResponse(data);
  }
}
