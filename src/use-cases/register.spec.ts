import { expect, describe, it } from "vitest";
import { RegisterUseCase } from "./register.js";
import { PrismaUsersRepository } from "../repositories/prisma-users-repoository.js";

describe("Register Use Case", () => {
  it("should hash user password upon registration", async () => {
    const prismaUsersRepository = new PrismaUsersRepository();
    const registerUseCase = new RegisterUseCase(prismaUsersRepository);

    const { user } = await registerUseCase.execute({
      name: "John Doe",
      email: "johndoe@example.com",
      password: "123456",
    });

    console.log(user.password_hash);
  });
});
