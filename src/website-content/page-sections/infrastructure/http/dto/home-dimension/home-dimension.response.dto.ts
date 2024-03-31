import { ApiProperty } from '@nestjs/swagger';
import {
  DimensionItemsDto,
  dimensionItemsDtoStubs,
} from '~/dimensions/application/dto/dimension-items.dto';
import { HomeDimensionDto } from '~/page-sections/application/dto/home-dimension/home-dimension.dto';
import {
  HeaderDto,
  headerDtoStubs,
} from '~/section-headers/application/dto/header.dto';

export class HomeDimensionResponseDto implements HomeDimensionDto {
  @ApiProperty({ type: () => HeaderDto, example: headerDtoStubs[1] })
  header: HeaderDto;

  @ApiProperty({
    type: () => DimensionItemsDto,
    example: dimensionItemsDtoStubs[0],
  })
  content: DimensionItemsDto;

  constructor(section: HomeDimensionDto) {
    Object.assign(this, section);
  }
}
