import { createBox, createText } from "@shopify/restyle";
import { router } from "expo-router";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CategoryTabs from "../../components/CategoryTabs";
import { ALL_GAMES, CATEGORIES, Category } from "../../constants/games";
import { Theme } from "../theme";

const Box = createBox<Theme>();
const Text = createText<Theme>();

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = React.useState<
    Category | typeof CATEGORIES.ALL
  >(CATEGORIES.ALL);
  const insets = useSafeAreaInsets();

  const filteredGames =
    selectedCategory === CATEGORIES.ALL
      ? ALL_GAMES
      : ALL_GAMES.filter((game) => game.category === selectedCategory);

  return (
    <Box
      flex={1}
      backgroundColor="mainBackground"
      style={{ paddingTop: insets.top + 24 }}
    >
      <Box paddingHorizontal="m" paddingBottom="l">
        <Text variant="header">DrinkBee Games</Text>
      </Box>

      <CategoryTabs
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 16,
          paddingBottom: 24,
        }}
      >
        {filteredGames.map((game) => (
          <TouchableOpacity
            key={game.slug}
            onPress={() => router.push(`/game/${game.slug}`)}
          >
            <Box
              flexDirection="row"
              alignItems="center"
              backgroundColor="inactiveTab"
              paddingVertical="s"
              paddingHorizontal="m"
              borderRadius="m"
              marginBottom="s"
              minHeight={72}
            >
              <Text style={{ fontSize: 40, marginRight: 16, lineHeight: 48 }}>
                {game.emoji}
              </Text>
              <Box flex={1} justifyContent="center">
                <Text variant="subheader" marginBottom="xs">
                  {game.title}
                </Text>
                <Text
                  variant="caption"
                  numberOfLines={2}
                  style={{ lineHeight: 18 }}
                >
                  {game.description}
                </Text>
              </Box>
            </Box>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Box>
  );
}
