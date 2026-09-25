import type { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma.js";

export class PrismaUserRepository {
  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    });

    return user;
  }
}
