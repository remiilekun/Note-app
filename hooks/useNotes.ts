import React from 'react';
import { NoteContext, NoteContextType } from '@/contexts/NoteContext';

const useNotes = (): NoteContextType => {
  const context = React.useContext(NoteContext);

  if (!context) {
    throw new Error('useNotes must be used within a NoteProvider');
  }

  return context;
};

export default useNotes;
