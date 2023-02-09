import 'react-native';
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react-native';
import NoteForm from '@/components/NoteForm';

const FORM_IDS = {
  title: 'title-input',
  content: 'content-input',
  button: 'submit-btn',
};

describe('components', () => {
  describe('Note Card', () => {
    it('renders correctly', () => {
      const onSubmit = jest.fn();
      render(<NoteForm onSubmit={onSubmit} />);
      [FORM_IDS.title, FORM_IDS.content].forEach((element) => {
        expect(screen.queryByTestId(element)).not.toBeNull();
      });
    });

    it('handles submit', async () => {
      const onSubmit = jest.fn();
      const values = {
        title: 'johndoe',
        content: 'random content',
      };

      render(<NoteForm onSubmit={onSubmit} />);
      fireEvent.changeText(screen.queryByTestId(FORM_IDS.title), values.title);
      fireEvent.changeText(
        screen.queryByTestId(FORM_IDS.content),
        values.content,
      );

      await act(async () => {
        fireEvent.press(screen.queryByTestId(FORM_IDS.button));
      });

      expect(onSubmit).toHaveBeenCalled();
    });
  });
});
