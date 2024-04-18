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
import { UpdateLastNameCommand } from '../../../../application/commands/update-last-name/update-last-name.command';
import { UpdateLastNameRequestBody } from './update-last-name.request-body';

@Controller('profiles')
@ApiTags('profiles')
export class UpdateLastNameController {
  constructor(private readonly commandBus: CommandBus) {}

  @Patch('last-name')
  @ApiOperation({
    summary: 'Update last name',
  })
  @ApiUnauthorizedResponse()
  @ApiBearerAuth()
  async handle(
    @CurrentUser() user: JwtPayloadDto,
    @Body() requestBody: UpdateLastNameRequestBody,
  ) {
    const command = new UpdateLastNameCommand(
      Object.assign({}, requestBody, { alias: user.userName }),
    );

    await this.commandBus.execute(command);
  }
}
