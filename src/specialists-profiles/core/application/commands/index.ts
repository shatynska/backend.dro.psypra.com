import { UpdateFirstNameHandler } from './update-first-name/update-first-name.handler';
import { UpdateIsPublicHandler } from './update-is-public/update-is-public.handler';
import { UpdateLastNameHandler } from './update-last-name/update-last-name.handler';

export const COMMANDS = [
  UpdateFirstNameHandler,
  UpdateIsPublicHandler,
  UpdateLastNameHandler,
];
