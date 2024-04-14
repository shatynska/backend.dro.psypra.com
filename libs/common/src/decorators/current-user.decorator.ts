import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { JwtPayloadDto } from '~/shared/application/dto/jwt-payload.dto';

export const CurrentUser = createParamDecorator(
  (key: keyof JwtPayloadDto, ctx: ExecutionContext): JwtPayloadDto => {
    const request = ctx.switchToHttp().getRequest();
    return key ? request.user[key] : request.user;
  },
);
