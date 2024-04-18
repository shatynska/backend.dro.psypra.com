import { CurrentUser } from '@common/decorators';
import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetCoreQuery } from 'src/specialists-profiles/core/application/queries/get-core/get-core.query';
import { GetCoreResult } from 'src/specialists-profiles/core/application/queries/get-core/get-core.result';
import { JwtPayloadDto } from '~/shared/application/dto/jwt-payload.dto';
import { Result } from '~/shared/core/result';
import { GetCoreResponse } from './get-core.response';

@Controller('profile')
@ApiTags('profile')
export class GetCoreController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiResponse({
    status: 200,
    type: GetCoreResponse,
  })
  @ApiBearerAuth()
  @Get('core')
  async handle(@CurrentUser() user: JwtPayloadDto) {
    const query = new GetCoreQuery({ alias: user.userName });

    const data = await this.queryBus.execute<
      GetCoreQuery,
      Result<null, GetCoreResult>
    >(query);

    return data;
  }
}
