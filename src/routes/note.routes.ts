import { type FastifyInstance } from "fastify";
import {
  createNoteHandler,
  getNotesHandler,
  getNoteHandler,
  updateNoteHandler,
  deleteNoteHandler,
} from "../controllers/note.controller";
import { validate } from "../utils/validate";
import { createNoteSchema, type updateNoteInput } from "../schema/note.schema";

export const noteRoutes = async (app: FastifyInstance) => {
  app.post(
    "/notes",
    { preHandler: validate(createNoteSchema) },
    createNoteHandler
  );

  app.get("/notes", getNotesHandler);

  app.get("/notes/:id", getNoteHandler);

  app.put<{
    Params: { id: string };
    Body: updateNoteInput;
  }>(
    "/notes/:id",
    { preHandler: validate(createNoteSchema) },
    updateNoteHandler
  );

  app.delete("/notes/:id", deleteNoteHandler);
};
