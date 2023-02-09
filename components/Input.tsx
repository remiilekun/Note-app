import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

type InputProps = {
  label?: string;
  error?: string;
} & TextInputProps;

export const Input = ({ error, label, multiline, ...props }: InputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        testID="input"
        style={[styles.input, multiline ? styles.multiline : null]}
        multiline={multiline}
        {...props}
      />
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 10,
  },
  input: {
    borderColor: '#dcdcdc',
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 16,
    lineHeight: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  multiline: {
    height: 130,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});
