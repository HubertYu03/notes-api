import Fastify from "fastify";
import { noteRoutes } from "./routes/note.routes";
import { registerErrorHandler } from "./utils/errorHandler";

const app = Fastify({
  logger: true,
});

// Register Routs
app.register(noteRoutes);

// Register Global error handlers
registerErrorHandler(app);

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
