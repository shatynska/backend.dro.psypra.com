import { DomainError } from '../errors/domain.error';

export interface Rule {
  error: DomainError;
  isBroken(): boolean;
}
