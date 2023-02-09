import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NoteForm, NoteFormValues } from '@/components';
import useNotes from '@/hooks/useNotes';
import { RootScreens, RootStackScreenProps } from '@/types';

const AddNoteScreen = ({
  navigation,
}: RootStackScreenProps<RootScreens.AddNote>) => {
  const { addNote } = useNotes();

  const onSubmit = (values: NoteFormValues) => {
    addNote(values);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <NoteForm onSubmit={onSubmit} />
    </View>
  );
};

export default AddNoteScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 16,
  },
});
