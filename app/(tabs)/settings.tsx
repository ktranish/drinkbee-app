import { Ionicons } from "@expo/vector-icons";
import { createBox, createText } from "@shopify/restyle";
import React from "react";
import { Switch } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "../../context/ThemeContext";
import { Theme } from "../theme";

const Box = createBox<Theme>();
const Text = createText<Theme>();

export default function SettingsScreen() {
  const { isDark, toggleTheme } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <Box
      flex={1}
      backgroundColor="mainBackground"
      style={{ paddingTop: insets.top + 24 }}
    >
      <Box paddingHorizontal="m" paddingBottom="l">
        <Text variant="header">Settings</Text>
      </Box>

      <Box paddingHorizontal="m">
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          backgroundColor="inactiveTab"
          padding="m"
          borderRadius="m"
        >
          <Box flexDirection="row" alignItems="center">
            <Box
              backgroundColor="mainBackground"
              padding="s"
              borderRadius="m"
              marginRight="m"
            >
              <Ionicons
                name="moon"
                size={24}
                color={isDark ? "#ffffff" : "#0f172a"}
              />
            </Box>
            <Text variant="body">Dark Mode</Text>
          </Box>
          <Switch value={isDark} onValueChange={toggleTheme} />
        </Box>
      </Box>
    </Box>
  );
}
