import type { User } from "../../generated/prisma/client.js";
import type { UserCreateInput } from "../../generated/prisma/models.js";
import type { UsersRepository } from "../prisma-users-repository.js";

class InMemoryUserRepository implements UsersRepository {
  async findByEmail(email: string) {
    throw new Error("Method not implemented.");
  }
  async create(data: UserCreateInput){
    throw new Error("Method not implemented.");
  }
}
