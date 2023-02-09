import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export const Loader = () => {
  return (
    <View style={stlye.container}>
      <ActivityIndicator />
    </View>
  );
};

export default Loader;

const stlye = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
});
