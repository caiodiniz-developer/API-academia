import type { Prisma, User } from "../generated/prisma/client.js";

export interface UsersRepository {
  findByEmail(email: string): unknown;
  create(data: Prisma.UserCreateInput): Promise<User>;
}
