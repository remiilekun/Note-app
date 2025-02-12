import React, { useEffect, useMemo } from 'react';
import { generateUUID } from '@/utils/misc';
import storage from '@/utils/storage';
import { Note } from '@/types';

export type NoteContextType = {
  addNote: (note: Pick<Note, 'title' | 'content'>) => void;
  deleteNote: (id: string) => void;
  getNote: (id: string) => Note | undefined;
  notes: Note[];
  updateNote: (id: string, note: Partial<Note>) => void;
};

export const NoteContext = React.createContext({} as NoteContextType);

const NoteProvider = ({ children }: { children: React.ReactNode }) => {
  const [noteItems, setNotes] = React.useState<Note[]>([]);

  useEffect(() => {
    const fetchNotesFromStorage = async () => {
      try {
        const value = await storage.get(storage.keys.NOTES);
        if (value) {
          setNotes(value);
        }
      } catch (e) {}
    };

    fetchNotesFromStorage();
  }, []);

  useEffect(() => {
    storage.set(storage.keys.NOTES, noteItems);
  }, [noteItems]);

  const notes = useMemo(() => {
    return noteItems
      .filter((note) => !note.deleted)
      .sort((a, b) => {
        return (
          new Date(b?.updatedAt || b?.createdAt).getTime() -
          new Date(a?.updatedAt || a?.createdAt).getTime()
        );
      });
  }, [noteItems]);

  const getNote = (id: string) => {
    return noteItems.find((note) => note.id === id);
  };

  const addNote = (note: Pick<Note, 'title' | 'content'>) => {
    const newNote = {
      ...note,
      id: generateUUID(),
      createdAt: new Date(),
    };

    setNotes((v) => [...v, newNote]);
  };

  const updateNote = (id: string, note: Partial<Note>) => {
    const newNotes = noteItems.map((n) =>
      n.id === id ? { ...n, ...note, updatedAt: new Date() } : n,
    );
    setNotes(newNotes);
  };

  const deleteNote = (id: string) => {
    updateNote(id, { deleted: true, deletedAt: new Date() });
  };

  return (
    <NoteContext.Provider
      value={{ addNote, deleteNote, getNote, notes, updateNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
