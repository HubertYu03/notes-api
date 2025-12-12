import Fastify from "fastify";

import registerRoutes from "./routes";

const app = Fastify({
  logger: true,
});

app.register(registerRoutes);

const start = async () => {
  try {
    await app.listen({ port: 3000 });
    console.log("🚀 Server running on http://localhost:3000");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
