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
import { UpdateFirstNameCommand } from '../../../../application/commands/update-first-name/update-first-name.command';
import { UpdateFirstNameRequestBody } from './update-first-name.request-body';

@Controller('profile')
@ApiTags('profile')
export class UpdateFirstNameController {
  constructor(private readonly commandBus: CommandBus) {}

  @Patch(':specialist/core/first-name')
  @ApiOperation({
    summary: 'Update first name',
  })
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse()
  @ApiBearerAuth()
  @UseGuards(AdminOrOwnerGuard)
  async handle(
    @Param('specialist') specialist: SpecialistAliasPathParameter,
    @Body() requestBody: UpdateFirstNameRequestBody,
  ) {
    const command = new UpdateFirstNameCommand(
      Object.assign({}, requestBody, { alias: specialist }),
    );

    await this.commandBus.execute(command);
  }
}
