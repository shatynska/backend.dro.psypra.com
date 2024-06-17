import { Injectable } from '@nestjs/common';

import { PrismaService } from '~/shared';
import {
  AddContactParameters,
  CommandsRepository,
  RemoveContactParameters,
} from '../../application';

@Injectable()
export class PrismaCommandsRepository implements CommandsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async addContact({
    alias,
    contact,
    type,
  }: AddContactParameters): Promise<void> {
    await this.prismaService.contact.create({
      data: {
        value: contact,
        type: type,
        specialist: { connect: { alias } },
      },
    });
  }

  async removeContact({ id, alias }: RemoveContactParameters): Promise<void> {
    await this.prismaService.contact.delete({
      where: { id, specialistAlias: alias },
    });
  }
}
