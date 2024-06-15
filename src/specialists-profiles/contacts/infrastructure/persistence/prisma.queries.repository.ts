import { Injectable } from '@nestjs/common';
import { PrismaService, SpecialistAliasDto } from '~/shared';
import { ContactsDto, QueriesRepository } from '../../application';
import { GetAllMapper } from './get-all.mapper';

@Injectable()
export class PrismaQueriesRepository implements QueriesRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async getAll({ alias }: SpecialistAliasDto): Promise<ContactsDto | null> {
    const data = await this.prismaService.contact.findMany({
      where: {
        specialist: { alias },
      },
      select: {
        value: true,
        type: true,
      },
    });

    return GetAllMapper.mapToDto(data);
  }
}
