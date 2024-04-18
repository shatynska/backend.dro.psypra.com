import { ApiErrorDecorator, CurrentUser } from '@common/decorators';
import { Body, Controller, HttpStatus, Patch } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsPublicDto } from 'src/specialists-profiles/core/application/dto/is-public.dto';
import { JwtPayloadDto } from '~/shared/application/dto/jwt-payload.dto';
import { UpdateIsPublicCommand } from '../../../../application/commands/update-is-public/update-is-public.command';

@Controller('profiles')
@ApiTags('profiles')
export class UpdateIsPublicController {
  constructor(private readonly commandBus: CommandBus) {}

  @Patch('is-public')
  @ApiOperation({
    summary: 'Update isPublic field',
  })
  @ApiErrorDecorator(HttpStatus.UNAUTHORIZED)
  @ApiBearerAuth()
  async handle(
    @CurrentUser() user: JwtPayloadDto,
    @Body() requestBody: IsPublicDto,
  ) {
    const command = new UpdateIsPublicCommand(
      Object.assign({}, requestBody, { alias: user.userName }),
    );

    await this.commandBus.execute(command);
  }
}
