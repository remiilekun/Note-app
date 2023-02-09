import React from 'react';
import { ScrollView } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Note } from '@/types';
import Button from './Button';
import Input from './Input';

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  content: yup.string().required('Content is required'),
});

export type NoteFormValues = {
  title: string;
  content: string;
};

type NoteFormProps = {
  children?: React.ReactNode | React.ReactNode[];
  note?: Note | null;
  onSubmit: (values: NoteFormValues) => void;
};

export const NoteForm = ({ children, note, onSubmit }: NoteFormProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<NoteFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: note?.title || '',
      content: note?.content || '',
    },
  });

  return (
    <ScrollView>
      <Controller
        control={control}
        name="title"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            testID="title-input"
            error={errors?.title?.message}
            label="Title"
            onBlur={onBlur}
            onChangeText={onChange}
            placeholder="Enter a title"
            value={value}
          />
        )}
      />

      <Controller
        control={control}
        name="content"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            testID="content-input"
            error={errors?.content?.message}
            label="Content"
            multiline
            onBlur={onBlur}
            onChangeText={onChange}
            placeholder="Type content here..."
            value={value}
          />
        )}
      />

      <Button testID="submit-btn" onPress={handleSubmit(onSubmit)}>
        Submit
      </Button>

      {children}
    </ScrollView>
  );
};

export default NoteForm;
