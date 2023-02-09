import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NoteProvider from '@/contexts/NoteContext';
import HomeScreen from '@/screens/HomeScreen';
import AddNoteScreen from '@/screens/AddNoteScreen';
import EditNoteScreen from '@/screens/EditNoteScreen';
import { RootScreens, RootStackParamList } from '@/types';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <NoteProvider>
      <Stack.Navigator
        initialRouteName={RootScreens.Home}
        screenOptions={{
          headerBackButtonMenuEnabled: true,
          headerBackTitle: 'Go back',
        }}>
        <Stack.Screen
          name={RootScreens.Home}
          component={HomeScreen}
          options={{ title: 'Notes' }}
        />

        <Stack.Screen
          name={RootScreens.AddNote}
          component={AddNoteScreen}
          options={{
            title: 'Add Note',
          }}
        />
        <Stack.Screen
          name={RootScreens.EditNote}
          component={EditNoteScreen}
          options={{
            title: 'Edit Note',
          }}
        />
      </Stack.Navigator>
    </NoteProvider>
  );
}
