import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import useCachedResources from '@/hooks/useCachedResources';
import useColorScheme from '@/hooks/useColorScheme';
import Navigation from '@/navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}
