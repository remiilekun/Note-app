import React from 'react';
import {
  Pressable,
  Text,
  PressableProps,
  StyleSheet,
  ViewStyle,
} from 'react-native';

type ButtonProps = {
  backgroundColor?: string;
  color?: string;
  children?: string | React.ReactNode;
  style?: ViewStyle;
} & Omit<PressableProps, 'style'>;

export const Button = ({
  backgroundColor = 'blue',
  color = 'white',
  children,
  style = {},
  ...props
}: ButtonProps) => {
  return (
    <Pressable
      style={[styles.container, { backgroundColor, ...style }]}
      {...props}>
      {children ? (
        <Text style={[styles.text, { color }]}>{children}</Text>
      ) : null}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
});
