import parsePhoneNumber from 'libphonenumber-js';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const contactsDtoSchema = z.object({
  phones: z.array(
    z.string().transform((value, ctx) => {
      const phoneNumber = parsePhoneNumber(value, {
        defaultCountry: 'UA',
      });

      if (!phoneNumber?.isValid()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Invalid phone number',
        });
        return z.NEVER;
      }

      return String(phoneNumber.number);
    }),
  ),
  emails: z.array(z.string().email()),
  websites: z.array(z.string().url()),
});

export class ContactsDto extends createZodDto(contactsDtoSchema) {}
