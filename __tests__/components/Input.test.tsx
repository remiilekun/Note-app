import 'react-native';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import Input from '@/components/Input';

describe('components', () => {
  describe('kit', () => {
    describe('Input', () => {
      it('renders correctly', () => {
        render(<Input />);
        expect(screen.queryByTestId('input')).not.toBeNull();
      });

      it('renders label', () => {
        const label = 'Email';
        render(<Input label={label} />);
        expect(screen.getByText(label)).not.toBeNull();
        expect(screen.queryByTestId('input')).not.toBeNull();
        expect(screen.queryAllByText(label).length).toBe(1);
      });

      it('renders error', () => {
        const error = 'Invalid email';
        render(<Input error={error} />);
        expect(screen.getByText(error)).not.toBeNull();
        expect(screen.queryAllByText(error).length).toBe(1);
      });

      it('handles onChange event', () => {
        const onChange = jest.fn();
        const text = 'https://google.com';
        render(<Input onChangeText={onChange} />);
        fireEvent.changeText(screen.queryByTestId('input'), text);
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(text);
      });
    });
  });
});
