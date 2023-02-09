import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB, NoteList } from '@/components';
import { RootScreens, RootStackScreenProps } from '@/types';

const HomeScreen = ({ navigation }: RootStackScreenProps<RootScreens.Home>) => {
  const onFabPress = () => {
    navigation.navigate(RootScreens.AddNote);
  };

  const onNotePress = (id: string) => {
    navigation.navigate(RootScreens.EditNote, { id });
  };

  return (
    <View style={styles.container}>
      <NoteList onNotePress={onNotePress} />
      <FAB onPress={onFabPress} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    padding: 10,
  },
});
