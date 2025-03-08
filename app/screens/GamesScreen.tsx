import { useNavigation } from "@react-navigation/native";
import { createBox } from "@shopify/restyle";
import React from "react";
import { FlatList, RefreshControl } from "react-native";
import GameCard from "../../components/GameCard";
import { Theme } from "../theme";

const Box = createBox<Theme>();

type Game = {
  id: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
};

// Temporary mock data - this will be replaced with actual API data
const mockGames: Game[] = [
  {
    id: "1",
    title: "Never Have I Ever",
    description:
      "A classic drinking game where players take turns making statements about things they have never done.",
    emoji: "🙅‍♂️",
    color: "#f59e0b",
  },
  {
    id: "2",
    title: "Kings Cup",
    description:
      "A card-based drinking game where each card represents a different rule or action.",
    emoji: "👑",
    color: "#f59e0b",
  },
  // Add more mock games as needed
];

export default function GamesScreen() {
  const [refreshing, setRefreshing] = React.useState(false);
  const navigation = useNavigation();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // Add your refresh logic here
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const renderGame = ({ item }: { item: Game }) => (
    <GameCard
      title={item.title}
      description={item.description}
      emoji={item.emoji}
      color={item.color}
      onPress={() => {
        // Navigate to game details screen
        // navigation.navigate('GameDetails', { gameId: item.id });
      }}
    />
  );

  return (
    <Box flex={1} backgroundColor="mainBackground">
      <FlatList
        data={mockGames}
        renderItem={renderGame}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 8 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </Box>
  );
}
