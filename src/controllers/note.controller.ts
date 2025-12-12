import type { FastifyReply, FastifyRequest } from "fastify";
import {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
} from "../services/note.service";
import { createNoteSchema, updateNoteSchema } from "../schema/note.schema";

export const createNoteHandler = async (
  request: FastifyRequest<createNoteSchema>,
  reply: FastifyReply
) => {
  const note = await createNote(request.body);
  return reply.code(201).send(note);
};
