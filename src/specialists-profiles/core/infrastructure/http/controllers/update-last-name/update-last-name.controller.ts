import { Body, Controller, Param, Patch, UseGuards } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import {
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AdminOrOwnerGuard } from 'src/specialists-profiles/shared/infrastructure/http/guards/admin-or-owner.guard';
import { SpecialistAliasPathParameter } from '~/shared/infrastructure/http/controllers/specialist-alias.path-parameter';
import { UpdateLastNameCommand } from '../../../../application/commands/update-last-name/update-last-name.command';
import { UpdateLastNameRequestBody } from './update-last-name.request-body';

@Controller('profile')
@ApiTags('profile')
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
