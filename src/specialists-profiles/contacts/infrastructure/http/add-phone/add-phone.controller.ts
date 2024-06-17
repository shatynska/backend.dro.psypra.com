import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
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
import { AddContactCommand } from '../../../application';
import { AddPhoneRequestBody } from './add-phone.request-body';

@Controller('profiles')
@ApiTags('profiles')
export class AddPhoneController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post(':specialist/contacts/phones')
  @ApiOperation({
    summary: 'Add phone number',
  })
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse()
  @ApiBearerAuth()
  @UseGuards(AdminOrOwnerGuard)
  async handle(
    @Param('specialist') specialist: SpecialistAliasPathParameter,
    @Body() requestBody: AddPhoneRequestBody,
  ) {
    const command = new AddContactCommand({
      ...requestBody,
      type: 'PHONE',
      alias: specialist,
    });

    await this.commandBus.execute(command);
  }
}
