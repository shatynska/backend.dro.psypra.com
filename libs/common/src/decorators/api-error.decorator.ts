import { ErrorDto } from '@common/dto';
import { HttpStatus, applyDecorators } from '@nestjs/common';
import {
  ApiResponse,
  ApiResponseOptions,
  getSchemaPath,
} from '@nestjs/swagger';

const errors = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  409: 'Conflict',
};

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
          error: errors[statusCode] ?? message,
          statusCode: statusCode,
        },
        type: getSchemaPath(ErrorDto),
      },
    }),
  );
}
