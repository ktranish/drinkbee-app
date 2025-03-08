import { createBox, createText } from "@shopify/restyle";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Theme } from "../app/theme";

const Box = createBox<Theme>();
const Text = createText<Theme>();

type GameCardProps = {
  title: string;
  description: string;
  emoji: string;
  color: string;
  onPress: () => void;
};

export default function GameCard({
  title,
  description,
  emoji,
  color,
  onPress,
}: GameCardProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        backgroundColor="mainBackground"
        borderRadius="m"
        padding="m"
        margin="s"
        style={styles.card}
      >
        <Box
          width={50}
          height={50}
          borderRadius="m"
          marginBottom="s"
          alignItems="center"
          justifyContent="center"
          style={{ backgroundColor: color }}
        >
          <Text style={styles.emoji}>{emoji}</Text>
        </Box>
        <Text variant="subheader" marginBottom="s">
          {title}
        </Text>
        <Text variant="body" color="textMuted" numberOfLines={2}>
          {description}
        </Text>
      </Box>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  emoji: {
    fontSize: 24,
  },
});
