import { Contact, ContactType, Prisma } from '@prisma/client';
import { SpecialistMainDto } from '../../../../application/dto/specialist-main.dto';
import { PrismaReadRepository } from '../prisma.read.repository';

type Parameters = Prisma.SpecialistGetPayload<
  typeof PrismaReadRepository.specialistMain
>;

export class SpecialistMainMapper {
  static mapToDto({
    firstName,
    lastName,
    dimensionItems,
    contacts,
  }: Parameters): SpecialistMainDto {
    return {
      fullName: `${lastName} ${firstName}`,
      specialties: dimensionItems
        .map((specialty) => specialty.dimensionItem.title)
        .join(', '),
      phones: this.getContactsByType(contacts, ContactType.PHONE),
      emails: this.getContactsByType(contacts, ContactType.PHONE),
      websites: this.getContactsByType(contacts, ContactType.PHONE),
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
