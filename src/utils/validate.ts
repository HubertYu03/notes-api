import type { ZodType } from "zod";
import type { FastifyRequest } from "fastify";

export const validate =
  (schema: ZodType) => async (request: FastifyRequest) => {
    schema.parse(request.body);
  };
