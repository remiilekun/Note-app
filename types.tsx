/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export enum RootScreens {
  Home = 'HomeScreen',
  AddNote = 'AddNote',
}

export type RootStackParamList = {
  [RootScreens.Home]: undefined;
  [RootScreens.AddNote]: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type Note = {
  content: string;
  createdAt: Date | string;
  deleted?: boolean;
  deletedAt?: Date | string;
  id: string;
  title: string;
  updatedAt?: Date | string;
};
