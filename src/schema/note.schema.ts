import * as z from "zod";

// Create Note Schema
export const createNoteSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
});

export type createNoteSchema = {
  Body: z.infer<typeof createNoteSchema>;
};

// Updating Note Schema
export const updateNoteSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
});

export type updateNoteSchema = {
  Body: z.infer<typeof updateNoteSchema>;
};
