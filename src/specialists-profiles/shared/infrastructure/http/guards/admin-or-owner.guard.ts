import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtPayloadDto } from '~/shared/application/dto/jwt-payload.dto';

@Injectable()
export class AdminOrOwnerGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const jwtPayload: JwtPayloadDto = request.user;
    const userName = jwtPayload.userName;
    const roles = jwtPayload.roles;
    const specialistAlias = request.params.specialist;

    if (roles && roles.includes('ADMIN')) {
      return true;
    }

    if (userName === specialistAlias) {
      return true;
    }

    return false;
  }
}
