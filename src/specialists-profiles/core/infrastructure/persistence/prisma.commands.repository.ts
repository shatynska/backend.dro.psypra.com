import { Injectable } from '@nestjs/common';

import { PrismaService } from '~/shared';
import {
  CommandsRepository,
  UpdateFirstNameParameters,
  UpdateIsPublicParameters,
  UpdateLastNameParameters,
} from '../../application';

@Injectable()
export class PrismaCommandsRepository implements CommandsRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async updateIsPublic({
    alias,
    isPublic,
  }: UpdateIsPublicParameters): Promise<void> {
    await this.prismaService.specialist.update({
      where: {
        alias: alias,
      },
      data: {
        isPublic: isPublic,
      },
    });
  }

  async updateFirstName({
    alias,
    firstName,
  }: UpdateFirstNameParameters): Promise<void> {
    await this.prismaService.specialist.update({
      where: {
        alias: alias,
      },
      data: {
        firstName: firstName,
      },
    });
  }

  async updateLastName({
    alias,
    lastName,
  }: UpdateLastNameParameters): Promise<void> {
    await this.prismaService.specialist.update({
      where: {
        alias: alias,
      },
      data: {
        lastName: lastName,
      },
    });
  }
}
