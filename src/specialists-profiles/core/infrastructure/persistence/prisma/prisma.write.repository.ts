import { Injectable } from '@nestjs/common';
import { UpdateFirstNameDto } from 'src/specialists-profiles/core/application/dto/update-first-name.dto';
import { UpdateIsPublicDto } from 'src/specialists-profiles/core/application/dto/update-is-public.dto';
import { UpdateLastNameDto } from 'src/specialists-profiles/core/application/dto/update-last-name.dto';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { WriteRepository } from '../../../application/repositories/write.repository';

@Injectable()
export class PrismaWriteRepository implements WriteRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async updateIsPublic({ alias, isPublic }: UpdateIsPublicDto): Promise<void> {
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
  }: UpdateFirstNameDto): Promise<void> {
    await this.prismaService.specialist.update({
      where: {
        alias: alias,
      },
      data: {
        firstName: firstName,
      },
    });
  }

  async updateLastName({ alias, lastName }: UpdateLastNameDto): Promise<void> {
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
