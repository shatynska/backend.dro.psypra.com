import { ApiProperty } from '@nestjs/swagger';
import {
  HomeDimensionContentItemResponseDto,
  homeDimensionContentItemResponseDtoStubs,
} from './home-dimension-content-item.response.dto';

export class HomeDimensionContentResponseDto {
  @ApiProperty({
    example: homeDimensionContentItemResponseDtoStubs,
  })
  items: HomeDimensionContentItemResponseDto[];
}

export const homeDimensionContentResponseDtoStubs: HomeDimensionContentResponseDto[] =
  [
    {
      items: homeDimensionContentItemResponseDtoStubs,
    },
  ];
