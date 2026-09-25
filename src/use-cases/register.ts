import { hash } from "bcryptjs";
import { prisma } from "../lib/prisma.js";
import { PrismaUserRepository } from "../repositories/prisma-users-repoository.js";

interface RegisterUseCaseRequest {
  name: string;
  email: string;
  password: string;
}

export async function registerUseCase({
  name,
  email,
  password,
}: RegisterUseCaseRequest) {
  const password_hash = await hash(password, 6);

  const userWithSameEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (userWithSameEmail) {
    throw new Error("Email already existe.");
  }

  const prismaUsersRepository = new PrismaUserRepository();

  prismaUsersRepository.create({
    name,
    email,
    password_hash,
  });
}
