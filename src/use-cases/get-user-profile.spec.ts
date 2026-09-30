import { expect, describe, it, beforeEach } from "vitest";
import { InMemoryUserRepository } from "../repositories/in-memory/in-memory-users-repository.js";
import { hash } from "bcryptjs";
import { GetUserProfileUseCase } from "./get-user-profile.js";
import { ResourceNotFoundError } from "./errors/resource-not-found-error.js";

let usersRepository: InMemoryUserRepository;
let sut: GetUserProfileUseCase;

describe("Get user profile Use Case", () => {
  beforeEach(() => {
    usersRepository = new InMemoryUserRepository();
    sut = new GetUserProfileUseCase(usersRepository);
  });

  it("should be able to get user profile", async () => {
    const createdUser = await usersRepository.create({
      name: "Caio diniz",
      email: "johndoe@example.com",
      password_hash: await hash("123456", 6),
    });

    const { user } = await sut.execute({
      userId: createdUser.id,
    });
    expect(user.name).toEqual("Caio diniz");
  });

  it("should not be able to get user profile with wrong id", async () => {
    await expect(() =>
      sut.execute({
        userId: "non-existing-id",
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError);
  });
});
