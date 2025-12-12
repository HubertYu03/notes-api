import type { FastifyInstance } from "fastify";

const registerRoutes = async (app: FastifyInstance) => {
  app.get("/health", async () => {
    return { status: "ok" };
  });
};

export default registerRoutes;
