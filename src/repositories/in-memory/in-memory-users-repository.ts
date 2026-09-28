import type { User } from "../../generated/prisma/client.js";
import type { UserCreateInput } from "../../generated/prisma/models.js";
import type { UsersRepository } from "../prisma-users-repository.js";

class InMemoryUserRepository implements UsersRepository {
  public items: User[] = [];

  async findByEmail(email: string) {
    throw new Error("Method not implemented.");
  }
  async create(data: UserCreateInput) {
    return {
      id: "user-1",
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      created_at: new Date(),
    };
  }
}
