export class HeaderDto {
  primaryHeading: string;
  secondaryHeading: string;
  href?: string;
  parentLink?: Required<Omit<HeaderDto, 'parentLink'>>;
}
