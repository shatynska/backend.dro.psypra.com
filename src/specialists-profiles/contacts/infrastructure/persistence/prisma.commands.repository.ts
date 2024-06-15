import { Injectable } from '@nestjs/common';

import { PrismaService } from '~/shared';
import { AddPhoneParameters, CommandsRepository } from '../../application';

@Injectable()
export class PrismaCommandsRepository implements CommandsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async addPhone({ alias, phone }: AddPhoneParameters): Promise<void> {
    await this.prismaService.contact.create({
      data: {
        value: phone,
        type: 'PHONE',
        specialist: { connect: { alias } },
      },
    });
  }
}
