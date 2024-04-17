import { Token, User } from '.prisma/client';

export interface Tokens {
  accessToken: string;
  refreshToken: Token;
}

export interface JwtPayload {
  id: string;
  userName: string;
  email: string;
  phone: string;
  roles: string[];
}

export type UserBrief = Pick<User, 'userName'>;
