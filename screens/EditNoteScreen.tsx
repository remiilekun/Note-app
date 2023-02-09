import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Loader, NoteForm, NoteFormValues } from '@/components';
import useNotes from '@/hooks/useNotes';
import { Note, RootScreens, RootStackScreenProps } from '@/types';

const EditNoteScreen = ({
  navigation,
  route,
}: RootStackScreenProps<RootScreens.EditNote>) => {
  const id = route?.params?.id;
  const { updateNote, getNote } = useNotes();
  const [loading, setLoading] = useState(true);
  const [note, setNote] = useState<Note | null>(null);

  const goBack = (message: string) => {
    navigation.goBack();
    Alert.alert('Error', message);
  };

  useEffect(() => {
    if (!id) {
      goBack('No note id provided');
    } else {
      const currentNote = getNote(id);
      if (currentNote) {
        setNote(currentNote);
        setLoading(false);
      } else {
        goBack('Invalid note');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const onSubmit = (values: NoteFormValues) => {
    updateNote(id as string, values);
    navigation.goBack();
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <NoteForm note={note} onSubmit={onSubmit} />
    </View>
  );
};

export default EditNoteScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 16,
  },
});
