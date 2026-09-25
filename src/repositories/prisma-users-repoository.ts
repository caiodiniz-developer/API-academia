import type { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma.js";

export class PrismaUserRepository {
  async create(data: Prisma.UserCreateInput) {
    await prisma.user.create({
      data,
    });
  }
}
