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
import { UpdateLastNameCommand } from '../../../application';
import { UpdateLastNameRequestBody } from './update-last-name.request-body';

@Controller('profiles')
@ApiTags('profiles')
export class UpdateLastNameController {
  constructor(private readonly commandBus: CommandBus) {}

  @Patch(':specialist/core/last-name')
  @ApiOperation({
    summary: 'Update last name',
  })
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse()
  @ApiBearerAuth()
  @UseGuards(AdminOrOwnerGuard)
  async handle(
    @Param('specialist') specialist: SpecialistAliasPathParameter,
    @Body() requestBody: UpdateLastNameRequestBody,
  ) {
    const command = new UpdateLastNameCommand(
      Object.assign({}, requestBody, { alias: specialist }),
    );

    await this.commandBus.execute(command);
  }
}
