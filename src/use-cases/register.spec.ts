import { expect, describe, it } from "vitest";
import { RegisterUseCase } from "./register.js";

import { compare } from "bcryptjs";
import { InMemoryUserRepository } from "../repositories/in-memory/in-memory-users-repository.js";

describe("Register Use Case", () => {
  it("should hash user password upon registration", async () => {
    const usersRepository = new InMemoryUserRepository();
    const registerUseCase = new RegisterUseCase(usersRepository);

    const { user } = await registerUseCase.execute({
      name: "John Doe",
      email: "johndoe@example.com",
      password: "123456",
    });

    const isPassWordCorrectHashed = await compare("123456", user.password_hash);
    expect(isPassWordCorrectHashed).toBe(true);
  });

  it("should not be able to register with same email twice", async () => {
    const usersRepository = new InMemoryUserRepository();
    const registerUseCase = new RegisterUseCase(usersRepository);

    const email = "caiodiniz@email.com";

    const { user } = await registerUseCase.execute({
      name: "John Doe",
      email,
      password: "123456",
    });

    const isPassWordCorrectHashed = await compare("123456", user.password_hash);
    expect(isPassWordCorrectHashed).toBe(true);
  });
});
