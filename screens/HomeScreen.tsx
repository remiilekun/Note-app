import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB, NoteList } from '@/components';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <NoteList />
      <FAB />
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
