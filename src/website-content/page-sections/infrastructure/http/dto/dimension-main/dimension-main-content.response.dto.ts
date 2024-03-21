import { ApiProperty } from '@nestjs/swagger';
import {
  DimensionMainContentItemResponseDto,
  dimensionMainContentItemResponseDtoStubs,
} from './dimension-main-content-item.response.dto';

export class DimensionMainContentResponseDto {
  @ApiProperty({
    example: dimensionMainContentItemResponseDtoStubs,
  })
  items: DimensionMainContentItemResponseDto[];
}

export const dimensionMainContentResponseDtoStubs: DimensionMainContentResponseDto[] =
  [
    {
      items: dimensionMainContentItemResponseDtoStubs,
    },
  ];
