import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { Note } from '@/types';

type NoteCardProps = {
  note: Note;
} & TouchableOpacityProps;

export const NoteCard = ({ note, ...props }: NoteCardProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      key={note.id}
      style={styles.noteContainer}
      {...props}>
      <View style={styles.noteHeader}>
        <Text style={styles.noteTitle}>{note.title}</Text>
        <Text>{note.createdAt.toString()}</Text>
      </View>

      <Text numberOfLines={2} style={styles.noteContent}>
        {note.content}
      </Text>
    </TouchableOpacity>
  );
};

export default NoteCard;

const styles = StyleSheet.create({
  noteContainer: {
    backgroundColor: '#FDE69A',
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '100%',
  },
  noteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  noteTitle: { fontSize: 18, fontWeight: '700' },
  noteContent: { flex: 1 },
});
