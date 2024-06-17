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
import { AddWebsiteRequestBody } from './add-website.request-body';

@Controller('profiles')
@ApiTags('profiles')
export class AddWebsiteController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post(':specialist/contacts/websites')
  @ApiOperation({
    summary: 'Add website',
  })
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse()
  @ApiBearerAuth()
  @UseGuards(AdminOrOwnerGuard)
  async handle(
    @Param('specialist') specialist: SpecialistAliasPathParameter,
    @Body() requestBody: AddWebsiteRequestBody,
  ) {
    const command = new AddContactCommand({
      ...requestBody,
      type: 'WEBSITE',
      alias: specialist,
    });

    await this.commandBus.execute(command);
  }
}
