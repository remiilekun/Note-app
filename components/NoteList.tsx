import React from 'react';
import { FlatList, FlatListProps, View, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Note } from '@/types';
import NoteCard from './NoteCard';

type NoteListProps = {
  notes?: Note[];
  onNotePress?: (id: string) => void;
} & Omit<FlatListProps<any>, 'data' | 'renderItem'>;

const ItemSeparatorComponent = () => <View style={styles.separator} />;

const ListEmptyState = () => {
  return (
    <View style={styles.emptyContainer}>
      <MaterialCommunityIcons name="image-broken" size={60} />
      <Text style={styles.emptyTitle}>No notes found</Text>
      <Text style={styles.emptySubtitle}>
        Add a new note by clicking on the + button
      </Text>
    </View>
  );
};

export const NoteList = ({
  notes = [],
  onNotePress,
  ...props
}: NoteListProps) => {
  const renderItem = ({ item }: { item: Note }) => {
    return <NoteCard note={item} onPress={() => onNotePress?.(item.id)} />;
  };

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      data={notes}
      ItemSeparatorComponent={ItemSeparatorComponent}
      ListEmptyComponent={ListEmptyState}
      renderItem={renderItem}
      {...props}
    />
  );
};

export default NoteList;

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
  separator: {
    marginBottom: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  emptySubtitle: {
    fontSize: 16,
    color: 'gray',
  },
});
