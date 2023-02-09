import 'react-native';
import React from 'react';
import { render, screen } from '@testing-library/react-native';
import NoteCard from '@/components/NoteCard';
import { formatNoteDate, generateUUID } from '@/utils/misc';

const note = {
  id: generateUUID(),
  title: 'Test Note',
  content: 'This is a test note',
  createdAt: new Date(),
};

describe('components', () => {
  describe('Note Card', () => {
    it('renders title and content', () => {
      render(<NoteCard note={note} />);

      expect(screen.getByText(note.title)).toBeTruthy();
      expect(screen.getByText(note.content)).toBeTruthy();
    });

    it('renders created at date if not edited', () => {
      render(<NoteCard note={note} />);
      expect(screen.getByText(formatNoteDate(note.createdAt))).toBeTruthy();
    });

    it('renders updatedAt date if  edited', () => {
      const updatedNote = {
        ...note,
        createdAt: new Date(1675527409465),
        updatedAt: new Date(),
      };

      render(<NoteCard note={updatedNote} />);
      expect(
        screen.getByText(formatNoteDate(updatedNote.updatedAt)),
      ).toBeTruthy();
    });
  });
});
