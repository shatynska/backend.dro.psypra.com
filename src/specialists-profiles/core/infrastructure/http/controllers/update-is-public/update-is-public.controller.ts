import { CurrentUser } from '@common/decorators';
import { Body, Controller, Patch } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { JwtPayloadDto } from '~/shared/application/dto/jwt-payload.dto';
import { UpdateIsPublicCommand } from '../../../../application/commands/update-is-public/update-is-public.command';
import { UpdateIsPublicRequestBody } from './update-is-public.request-body';

@Controller('profile')
@ApiTags('profile')
export class UpdateIsPublicController {
  constructor(private readonly commandBus: CommandBus) {}

  @Patch('core/is-public')
  @ApiOperation({
    summary: 'Update isPublic field',
  })
  @ApiUnauthorizedResponse()
  @ApiBearerAuth()
  async handle(
    @CurrentUser() user: JwtPayloadDto,
    @Body() requestBody: UpdateIsPublicRequestBody,
  ) {
    const command = new UpdateIsPublicCommand(
      Object.assign({}, requestBody, { alias: user.userName }),
    );

    await this.commandBus.execute(command);
  }
}
