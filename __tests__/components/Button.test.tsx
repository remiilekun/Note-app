import 'react-native';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import Button from '@/components/Button';

describe('components', () => {
  describe('Button', () => {
    it('renders correctly', async () => {
      const label = 'Hello world';
      render(<Button>{label}</Button>);

      const text = await screen.findByText(label);
      expect(text).not.toBeNull();
    });

    it('handles press event', async () => {
      const onPress = jest.fn();
      const label = 'Hello world';
      render(
        <Button testID="button" onPress={onPress}>
          {label}
        </Button>,
      );

      fireEvent.press(screen.getByText(label));
      expect(onPress).toHaveBeenCalledTimes(1);
      expect(onPress).toHaveBeenCalled();
    });

    it('does not render text if no children passed', async () => {
      render(<Button />);
      expect(screen.queryByTestId('button-text')).toBeNull();
    });
  });
});
