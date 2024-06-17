import { Body, Controller, Delete, Param, UseGuards } from '@nestjs/common';
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
import { RemoveContactCommand } from '../../../application';
import { RemoveContactRequestBody } from './remove-contact.request-body';

@Controller('profiles')
@ApiTags('profiles')
export class RemoveContactController {
  constructor(private readonly commandBus: CommandBus) {}

  @Delete(':specialist/contacts')
  @ApiOperation({
    summary: 'Remove contact',
  })
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse()
  @ApiBearerAuth()
  @UseGuards(AdminOrOwnerGuard)
  async handle(
    @Param('specialist') specialist: SpecialistAliasPathParameter,
    @Body() requestBody: RemoveContactRequestBody,
  ) {
    const command = new RemoveContactCommand({
      ...requestBody,
      alias: specialist,
    });

    await this.commandBus.execute(command);
  }
}
