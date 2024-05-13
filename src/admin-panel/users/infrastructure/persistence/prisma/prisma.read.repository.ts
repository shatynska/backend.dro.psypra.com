import { Injectable } from '@nestjs/common';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { UserDto } from '../../../application/dto/user.dto';
import { ReadRepository } from '../../../application/repositories/read.repository';
import { UserMapper } from './mappers/user.mapper';

@Injectable()
export class PrismaReadRepository implements ReadRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getUserByIdentifier(identifier: string): Promise<UserDto | null> {
    const user = await this.prismaService.user.findFirst({
      where: {
        OR: [
          { id: identifier },
          { userName: identifier },
          { email: identifier },
          { phone: identifier },
        ],
      },
      select: {
        id: true,
        userName: true,
        email: true,
        phone: true,
        roles: true,
      },
    });

    if (user === null) {
      return null;
    }

    return UserMapper.mapToDto(user);
  }
}
