// The controller layer receives the HTTP requests and extracts the data from that request.
// Then it gets the returned items from the service layer and returns it back to the client

// In the restaurant, it is like the waitress that takes orders from the customer and brings back the food

import type { FastifyReply, FastifyRequest } from "fastify";
import {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
} from "../services/note.service";
import type { createNoteInput, updateNoteInput } from "../schema/note.schema";

import type { Note } from "../types/global";

// Handler for creating a note
export const createNoteHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const note = await createNote(request.body as createNoteInput);
  return reply.code(201).send(note);
};

// Handler for getting all the notes
export const getNotesHandler = async () => {
  return await getNotes();
};

// Handler for getting a specific not based on ID
export const getNoteHandler = async (
  request: FastifyRequest<{ Params: { id: string } }>
) => {
  return await getNoteById(request.params.id);
};

// Handler for updating a specific note based on ID
export const updateNoteHandler = async (
  request: FastifyRequest<{
    Params: { id: string };
    Body: updateNoteInput;
  }>,
  reply: FastifyReply
) => {
  const updatedNote: Note | null = await updateNote(
    request.params.id,
    request.body
  );
  if (!updatedNote) return reply.code(404).send({ error: "Note not found!" });

  return updatedNote;
};

export const deleteNoteHandler = async (
  request: FastifyRequest<{
    Params: { id: string };
  }>,
  reply: FastifyReply
) => {
  const deletedNote: Note | null = await deleteNote(request.params.id);
  if (!deletedNote) return reply.code(404).send({ error: "Note not found!" });

  return reply.code(204).send(deletedNote);
};
