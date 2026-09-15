import type { FastifyInstance } from "fastify";
import { register } from "node:module";

export async function appRoutes(app: FastifyInstance) {
  app.post("user", register);
}
