import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(stopwatch)" options={{ title : 'Stopwatch' }} />
        <Stack.Screen name="(calculator)" options={{ title : 'Calculator' }} />
        <Stack.Screen name="(todo)" options={{ title : 'To DO' }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(listview)" options={{ title : 'List View From API' }} />
        <Stack.Screen name="(calender)" options={{ title : 'Calender' }} />
        {/* <Stack.Screen name="index" options={{ title : 'Home' }} />
        {/* <Stack.Screen name="index" options={{ title : 'Home' }} />
        {/* <Stack.Screen name="index" options={{ title : 'Home' }} />
        <Stack.Screen name="contact" options={{ title : 'Contact Us' }} /> */}
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
