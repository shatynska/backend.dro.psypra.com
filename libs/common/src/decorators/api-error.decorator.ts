import { ErrorDto } from '@common/dto';
import { HttpStatus, applyDecorators } from '@nestjs/common';
import {
  ApiResponse,
  ApiResponseOptions,
  getSchemaPath,
} from '@nestjs/swagger';

export function ApiErrorDecorator(
  statusCode: HttpStatus,
  message?: string,
  description?: string,
  options?: ApiResponseOptions,
) {
  return applyDecorators(
    ApiResponse({
      ...options,
      status: statusCode,
      description: description,
      schema: {
        default: {
          message: message,
          statusCode: statusCode,
        },
        type: getSchemaPath(ErrorDto),
      },
    }),
  );
}
