import type {
  FastifyError,
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import { isNotFoundError } from "../errors/error.types";

export const registerErrorHandler = (app: FastifyInstance) => {
  app.setErrorHandler(
    (error: any, request: FastifyRequest, reply: FastifyReply) => {
      // Log the error for debugging
      request.log.error(error);

      // Check the type of the error to throw appropriate error message
      if (isNotFoundError(error)) {
        return reply.code(404).send({
          statusCode: 404,
          error: "Not Found",
          message: error.message,
        });
      }

      // Handle Zod validation errors
      if (error.name === "ZodError") {
        return reply.status(400).send({
          statusCode: 400,
          error: "Validation Error",
          message: "Invalid input data",
          details: error.errors,
        });
      }

      reply.status(500).send({ error: error.message });
    }
  );
};
