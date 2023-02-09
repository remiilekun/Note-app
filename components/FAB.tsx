import React from 'react';
import { Pressable, PressableProps, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export const FAB = (props: PressableProps) => {
  return (
    <Pressable style={styles.button} {...props}>
      <FontAwesome name="plus" size={30} color="white" />
    </Pressable>
  );
};

export default FAB;

const styles = StyleSheet.create({
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
});
