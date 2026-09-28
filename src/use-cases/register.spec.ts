import { expect, describe, it } from "vitest";
import { RegisterUseCase } from "./register.js";
import { PrismaUsersRepository } from "../repositories/prisma-users-repoository.js";

describe("Register Use Case", () => {
  it("should hash user password upon registration", async () => {
    const prismaUsersRepository = new PrismaUsersRepository();
    const registerUseCase = new RegisterUseCase(prismaUsersRepository);

    await registerUseCase.execute({
      name: " caio diniz",
      email: "caiodiniz@exemple.com",
      password: "123456",
    });
  });
});
