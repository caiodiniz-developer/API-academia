import type { User } from "../../generated/prisma/client.js";
import type { UserCreateInput } from "../../generated/prisma/models.js";
import type { UsersRepository } from "../prisma-users-repository.js";

class InMemoryUserRepository implements UsersRepository {
  findByEmail(email: string): unknown {
    throw new Error("Method not implemented.");
  }
  create(data: UserCreateInput): Promise<User> {
    throw new Error("Method not implemented.");
  }
}
