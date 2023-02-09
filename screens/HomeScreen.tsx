import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

const Notes = [
  {
    id: 1,
    title: 'Note 1',
    description: 'This is note 1',
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum nec velit in vulputate. Cras quis eros nec mi convallis imperdiet. Sed vel tempus massa. Donec id nibh lorem. Praesent sit amet aliquam est. Maecenas varius lacus lorem, vulputate gravida risus rhoncus eget. Nunc congue sem non aliquam iaculis. Donec consequat arcu sapien, at dictum leo suscipit et. Nullam lacinia felis ac rhoncus ultrices ',
    date: '2021-01-01',
  },
  {
    id: 2,
    title: 'Note 2',
    description: 'This is note 1',
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum nec velit in vulputate. Cras quis eros nec mi convallis imperdiet. Sed vel tempus massa. Donec id nibh lorem. Praesent sit amet aliquam est. Maecenas varius lacus lorem, vulputate gravida risus rhoncus eget. Nunc congue sem non aliquam iaculis. Donec consequat arcu sapien, at dictum leo suscipit et. Nullam lacinia felis ac rhoncus ultrices ',
    date: '1914-05-11',
  },
  {
    id: 3,
    title: 'Note 3',
    description: 'This is note 1',
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum nec velit in vulputate. Cras quis eros nec mi convallis imperdiet. Sed vel tempus massa. Donec id nibh lorem. Praesent sit amet aliquam est. Maecenas varius lacus lorem, vulputate gravida risus rhoncus eget. Nunc congue sem non aliquam iaculis. Donec consequat arcu sapien, at dictum leo suscipit et. Nullam lacinia felis ac rhoncus ultrices ',
    date: '2000-07-05',
  },
  {
    id: 4,
    title: 'Note 4',
    description: 'This is note 1',
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum nec velit in vulputate. Cras quis eros nec mi convallis imperdiet. Sed vel tempus massa. Donec id nibh lorem. Praesent sit amet aliquam est. Maecenas varius lacus lorem, vulputate gravida risus rhoncus eget. Nunc congue sem non aliquam iaculis. Donec consequat arcu sapien, at dictum leo suscipit et. Nullam lacinia felis ac rhoncus ultrices ',
    date: '1894-11-25',
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {Notes.map((note) => (
          <View key={note.id} style={styles.noteContainer}>
            <View style={styles.noteHeader}>
              <Text style={styles.noteTitle}>{note.title}</Text>
              <Text>{note.date}</Text>
            </View>
            <Text>{note.description}</Text>
          </View>
        ))}
      </View>
      <View style={styles.footer}>
        <Pressable style={styles.button} onPress={() => {}}>
          <FontAwesome name="plus" size={30} color="white" />
        </Pressable>
      </View>
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
  content: {},
  footer: { width: '100%', alignItems: 'center', marginBottom: 10 },
  button: {
    backgroundColor: '#F8696A',
    width: 60,
    height: 60,
    padding: 10,
    borderRadius: 30,
    position: 'absolute',
    right: 10,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: { textAlign: 'center', color: 'white', fontSize: 16 },
  noteContainer: {
    backgroundColor: '#FDE69A',
    height: 60,
    width: '100%',
    marginBottom: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  noteHeader: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  noteTitle: { fontSize: 18, fontWeight: '700' },
});
