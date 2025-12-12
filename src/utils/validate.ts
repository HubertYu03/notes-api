import type { ZodType } from "zod";
import type {
  FastifyRequest,
  FastifyReply,
  HookHandlerDoneFunction,
} from "fastify";

export const validate = (schema: ZodType) => {
  return async (
    request: FastifyRequest,
    reply: FastifyReply,
    next: HookHandlerDoneFunction
  ) => {
    try {
      schema.parse(request.body);
      next();
    } catch (err: any) {
      reply.code(400).send(err.errors);
    }
  };
};
