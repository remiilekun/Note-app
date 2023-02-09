import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Button, Loader, NoteForm, NoteFormValues } from '@/components';
import useNotes from '@/hooks/useNotes';
import { Note, RootScreens, RootStackScreenProps } from '@/types';

const EditNoteScreen = ({
  navigation,
  route,
}: RootStackScreenProps<RootScreens.EditNote>) => {
  const id = route?.params?.id;
  const { updateNote, getNote, deleteNote } = useNotes();
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

  const onDelete = () => {
    deleteNote(id as string);
    navigation.goBack();
    Alert.alert('Note deleted successfully');
  };

  const onDeletePress = () => {
    Alert.alert(
      'Delete note',
      'Are you sure you want to delete this note?',
      [
        {
          text: "Yes, I'm sure",
          onPress: onDelete,
          style: 'destructive',
        },
        {
          text: 'No',
          style: 'default',
        },
      ],
      { cancelable: true },
    );
  };

  const onSubmit = (values: NoteFormValues) => {
    updateNote(id as string, values);
    navigation.goBack();
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <NoteForm note={note} onSubmit={onSubmit}>
        <Button
          backgroundColor="#F8696A"
          onPress={onDeletePress}
          style={styles.deleteButton}>
          Delete Note
        </Button>
      </NoteForm>
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
  deleteButton: {
    marginTop: 16,
  },
});
