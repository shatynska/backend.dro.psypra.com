import { Contact, ContactType } from '@prisma/client';
import { ContactsDto } from '../../application';

type Parameters = Pick<Contact, 'type' | 'id' | 'value'>[];

export class GetContactsMapper {
  static mapToDto(parameters: Parameters): ContactsDto {
    return {
      phones: this.getContactsByType(parameters, ContactType.PHONE),
      emails: this.getContactsByType(parameters, ContactType.EMAIL),
      websites: this.getContactsByType(parameters, ContactType.WEBSITE),
    };
  }

  static getContactsByType(contacts: Parameters, type: ContactType) {
    return contacts
      .filter((contact) => contact.type === type)
      .map((contact) => ({ id: contact.id, value: contact.value }));
  }
}
