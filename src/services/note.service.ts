// The service layer contains all of the transactional services, validations, and overall the bulk of the work
// In a restaurant, it is like the chef who does all the cooking

import { prisma } from "../utils/prisma";
import type { createNoteInput, updateNoteInput } from "../schema/note.schema";
import { da, id } from "zod/v4/locales";

// Create a new note
export const createNote = async (data: createNoteInput) => {
  return prisma.note.create({ data });
};

// Get all the existing notes
export const getNotes = async () => {
  return prisma.note.findMany();
};

// Get a specific note by its ID
export const getNoteById = async (id: string) => {
  return prisma.note.findUnique({ where: { id: Number(id) } });
};

// Update a note based on its ID
export const updateNote = async (id: string, data: updateNoteInput) => {
  // First clean the data
  const cleanData = Object.fromEntries(
    Object.entries(data).filter(([_, value]) => value !== undefined)
  );

  return prisma.note.update({
    where: { id: Number(id) },
    data: cleanData,
  });
};

export const deleteNote = async (id: string) => {
  return prisma.note.delete({
    where: { id: Number(id) },
  });
};
