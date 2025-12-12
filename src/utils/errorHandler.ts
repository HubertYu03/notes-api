import type {
  FastifyError,
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
} from "fastify";

export const registerErrorHandler = (app: FastifyInstance) => [
  app.setErrorHandler(
    (error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
      reply.status(500).send({ error: error.message });
    }
  ),
];
