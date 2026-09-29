import type { CheckIn, Prisma } from "../generated/prisma/client.js";

export interface CheckInRepository {
  create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>;
}
