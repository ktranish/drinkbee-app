import { createBox, createText } from "@shopify/restyle";
import React from "react";
import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ALL_GAMES } from "../../constants/games";
import { Theme } from "../theme";

const Box = createBox<Theme>();
const Text = createText<Theme>();

export default function RulesScreen() {
  const insets = useSafeAreaInsets();

  return (
    <Box
      flex={1}
      backgroundColor="mainBackground"
      style={{ paddingTop: insets.top + 24 }}
    >
      <Box paddingHorizontal="m" paddingBottom="l">
        <Text variant="header">Game Rules</Text>
      </Box>

      <ScrollView>
        <Box paddingHorizontal="m">
          {ALL_GAMES.map((game) => (
            <Box
              key={game.slug}
              backgroundColor="inactiveTab"
              paddingHorizontal="m"
              paddingVertical="m"
              borderRadius="m"
              marginBottom="m"
            >
              <Box flexDirection="row" alignItems="center" marginBottom="m">
                <Text style={{ fontSize: 40, marginRight: 16, lineHeight: 48 }}>
                  {game.emoji}
                </Text>
                <Text variant="subheader">{game.title}</Text>
              </Box>

              <Box>
                <Text
                  variant="body"
                  marginBottom="l"
                  style={{ lineHeight: 22 }}
                >
                  {game.description}
                </Text>

                <Box>
                  <Text variant="subheader" marginBottom="m">
                    How to play:
                  </Text>
                  <Text variant="body" style={{ lineHeight: 22 }}>
                    {game.description}
                  </Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
}
