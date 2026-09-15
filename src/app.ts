import fastify from "fastify";
import { register } from "./http/controllers/register.js";

export const app = fastify();

app.post("/users", register);
