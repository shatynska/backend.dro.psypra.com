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
import { UpdateFirstNameCommand } from '../../../../application/commands/update-first-name/update-first-name.command';
import { UpdateFirstNameRequestBody } from './update-first-name.request-body';

@Controller('profile')
@ApiTags('profile')
export class UpdateFirstNameController {
  constructor(private readonly commandBus: CommandBus) {}

  @Patch('core/first-name')
  @ApiOperation({
    summary: 'Update first name',
  })
  @ApiUnauthorizedResponse()
  @ApiBearerAuth()
  async handle(
    @CurrentUser() user: JwtPayloadDto,
    @Body() requestBody: UpdateFirstNameRequestBody,
  ) {
    const command = new UpdateFirstNameCommand(
      Object.assign({}, requestBody, { alias: user.userName }),
    );

    await this.commandBus.execute(command);
  }
}
