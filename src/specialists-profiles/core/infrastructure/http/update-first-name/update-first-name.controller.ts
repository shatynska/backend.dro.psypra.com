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
import { UpdateFirstNameCommand } from '../../../application';
import { UpdateFirstNameRequestBody } from './update-first-name.request-body';

@Controller('profiles')
@ApiTags('profiles')
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
