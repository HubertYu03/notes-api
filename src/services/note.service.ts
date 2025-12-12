// The service layer contains all of the transactional services, validations, and overall the bulk of the work
// In a restaurant, it is like the chef who does all the cooking

import type { Note } from "../types/global";

let notes: Note[] = [];
let idCounter: number = 1;

// Create a new note
export const createNote = async (data: { title: string; content: string }) => {
  const newNote: Note = {
    id: idCounter++,
    title: data.title,
    content: data.content,
  };

  notes.push(newNote);
  return newNote;
};

// Get all the existing notes
export const getNotes = async () => {
  return notes;
};

// Get a specific note by its ID
export const getNoteById = async (id: string): Promise<Note | undefined> => {
  return notes.find((n) => n.id === Number(id));
};

// Update a note based on its ID
export const updateNote = async (
  id: string,
  data: { title?: string | undefined; content?: string | undefined }
): Promise<Note | null> => {
  const noteIdx: number = notes.findIndex((n) => n.id === Number(id));

  // Check if our note exists
  const note: Note | undefined = notes[noteIdx];
  if (!note) return null;

  Object.assign(note, data);
  return note;
};

export const deleteNote = async (id: string): Promise<Note | null> => {
  const noteIdx = notes.findIndex((n) => n.id === Number(id));

  // Check if our note exists
  const deletedNote: Note | undefined = notes[noteIdx];
  if (!deletedNote) return null;

  notes.splice(noteIdx, 1);
  return deletedNote;
};
