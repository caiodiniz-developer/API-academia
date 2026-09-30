import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";
import { env } from "../env/index.js";

const schema = new URL(env.DATABASE_URL).searchParams.get("schema") ?? "public";

const adapter = new PrismaPg(
  {
    connectionString: env.DATABASE_URL,
    options: `-c search_path=${schema}`,
  },
  { schema },
);

export const prisma = new PrismaClient({
  adapter,
  log: env.NODE_ENV === "dev" ? ["query"] : [],
});
