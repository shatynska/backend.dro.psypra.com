import { Body, Controller, Param, Patch, UseGuards } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import {
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { SpecialistAliasPathParameter } from '~/shared';
import { AdminOrOwnerGuard } from '../../../../shared';
import { UpdateIsPublicCommand } from '../../../application';
import { UpdateIsPublicRequestBody } from './update-is-public.request-body';

@Controller('profiles')
@ApiTags('profiles')
export class UpdateIsPublicController {
  constructor(private readonly commandBus: CommandBus) {}

  @Patch(':specialist/core/is-public')
  @ApiOperation({
    summary: 'Update isPublic field',
  })
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse()
  @ApiBearerAuth()
  @UseGuards(AdminOrOwnerGuard)
  async handle(
    @Param('specialist') specialist: SpecialistAliasPathParameter,
    @Body() requestBody: UpdateIsPublicRequestBody,
  ) {
    const command = new UpdateIsPublicCommand(
      Object.assign({}, requestBody, { alias: specialist }),
    );

    await this.commandBus.execute(command);
  }
}
