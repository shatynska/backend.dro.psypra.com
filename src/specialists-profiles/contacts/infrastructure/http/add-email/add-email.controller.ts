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
import { AddEmailRequestBody } from './add-email.request-body';

@Controller('profiles')
@ApiTags('profiles')
export class AddEmailController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post(':specialist/contacts/emails')
  @ApiOperation({
    summary: 'Add email',
  })
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse()
  @ApiBearerAuth()
  @UseGuards(AdminOrOwnerGuard)
  async handle(
    @Param('specialist') specialist: SpecialistAliasPathParameter,
    @Body() requestBody: AddEmailRequestBody,
  ) {
    const command = new AddContactCommand({
      ...requestBody,
      type: 'EMAIL',
      alias: specialist,
    });

    await this.commandBus.execute(command);
  }
}
