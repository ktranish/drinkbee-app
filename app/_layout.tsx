import { ThemeProvider as RestyleProvider } from "@shopify/restyle";
import { Stack } from "expo-router";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import darkTheme from "../app/theme.dark";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import theme from "./theme";

function Layout() {
  const { isDark } = useTheme();

  return (
    <RestyleProvider theme={isDark ? darkTheme : theme}>
      <SafeAreaProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="game/[slug]" />
        </Stack>
      </SafeAreaProvider>
    </RestyleProvider>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}
