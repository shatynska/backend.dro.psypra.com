import { IQueryHandler, QueryBus, QueryHandler } from '@nestjs/cqrs';
import { HeaderWithParentLinkDto } from '~/section-headers/application/dto/header-with-parent-link.dto';
import { GetHeaderWithParentLinkQuery } from '~/section-headers/application/queries/get-header-with-parent-link/get-header-with-parent-link.query';
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result, failure, success } from '~/shared/core/result';
import { MainDto } from '~/specialists/application/dto/main.dto';
import { GetMainQuery } from '~/specialists/application/queries/get-main/get-main.query';
import { SpecialistMainDto } from '../../dto/specialist-main.dto';
import { GetSpecialistMainQuery } from './get-specialist-main.query';

@QueryHandler(GetSpecialistMainQuery)
export class GetSpecialistMainHandler
  implements IQueryHandler<GetSpecialistMainQuery>
{
  constructor(private readonly queryBus: QueryBus) {}

  async execute({
    specialistAlias,
  }: GetSpecialistMainQuery): Promise<
    Result<NotFoundError, SpecialistMainDto>
  > {
    const headerQuery = new GetHeaderWithParentLinkQuery('specialist', 'main');

    const header = await this.queryBus.execute<
      GetHeaderWithParentLinkQuery,
      Result<NotFoundError, HeaderWithParentLinkDto>
    >(headerQuery);

    if (header.isFailure()) {
      return failure(header.value);
    }

    const contentData: Result<NotFoundError, MainDto> =
      await this.queryBus.execute(new GetMainQuery(specialistAlias));

    if (contentData.isFailure()) {
      return failure(contentData.value);
    }

    header.value.headings.primary = `${contentData.value.firstName} ${contentData.value.lastName}`;
    header.value.headings.secondary = contentData.value.specialties.join(', ');

    return success({
      header: header.value,
      content: contentData.value,
    });
  }
}
