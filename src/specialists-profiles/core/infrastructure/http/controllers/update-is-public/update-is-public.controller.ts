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
import { UpdateIsPublicCommand } from '../../../../application/commands/update-is-public/update-is-public.command';
import { UpdateIsPublicRequestBody } from './update-is-public.request-body';

@Controller('profile')
@ApiTags('profile')
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
