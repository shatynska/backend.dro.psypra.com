import { Contact, ContactType } from '@prisma/client';
import { ContactsDto } from '../../application';

type Parameters = Pick<Contact, 'type' | 'value'>[];

export class GetAllMapper {
  static mapToDto(parameters: Parameters): ContactsDto {
    return {
      phones: this.getContactsByType(parameters, ContactType.PHONE),
      emails: this.getContactsByType(parameters, ContactType.EMAIL),
      websites: this.getContactsByType(parameters, ContactType.WEBSITE),
    };
  }

  static getContactsByType(
    contacts: Pick<Contact, 'value' | 'type'>[],
    type: ContactType,
  ) {
    return contacts
      .filter((contact) => contact.type === type)
      .map((contact) => contact.value);
  }
}
