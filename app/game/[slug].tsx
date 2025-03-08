import { Ionicons } from "@expo/vector-icons";
import { createBox, createText } from "@shopify/restyle";
import { router, useLocalSearchParams } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ALL_GAMES, LEVEL_LABELS } from "../../constants/games";
import { QUESTIONS_DATA } from "../../constants/questions";
import { Theme } from "../theme";

const Box = createBox<Theme>();
const Text = createText<Theme>();

type Level = keyof typeof QUESTIONS_DATA;

const ANIMATION_DURATION = 400;

export default function GameScreen() {
  const { slug } = useLocalSearchParams();
  const game = ALL_GAMES.find((g) => g.slug === slug);
  const [level, setLevel] = useState<Level>("all");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const questions = QUESTIONS_DATA[level] || [];

  const handleNextQuestion = () => {
    // Fade out and slide up
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }),
      Animated.timing(slideAnim, {
        toValue: -20,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }),
    ]).start(() => {
      setCurrentQuestion((prev) => (prev + 1) % questions.length);

      // Reset position without animation
      slideAnim.setValue(20);

      // Fade in and slide down to normal position
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: ANIMATION_DURATION,
          useNativeDriver: true,
          easing: Easing.out(Easing.cubic),
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: ANIMATION_DURATION,
          useNativeDriver: true,
          easing: Easing.out(Easing.cubic),
        }),
      ]).start();
    });
  };

  if (!game) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text variant="body">Game not found</Text>
      </Box>
    );
  }

  return (
    <Box flex={1} backgroundColor="mainBackground">
      <Box
        style={{ paddingTop: insets.top }}
        paddingBottom="m"
        backgroundColor="mainBackground"
      >
        <Box paddingHorizontal="m">
          <TouchableOpacity
            onPress={() => router.back()}
            style={[
              styles.backButton,
              { backgroundColor: isDark ? "#1e293b33" : "#f1f5f9" },
            ]}
          >
            <Ionicons
              name="chevron-back"
              size={24}
              color={isDark ? "#e2e8f0" : "#334155"}
              style={styles.backIcon}
            />
            <Text
              variant="body"
              style={[
                styles.backText,
                { color: isDark ? "#e2e8f0" : "#334155" },
              ]}
            >
              Tillbaka
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>

      <Box flex={1} paddingHorizontal="m">
        <Text variant="header" textAlign="center" marginBottom="xl">
          {game.title}
        </Text>

        <Box alignItems="center" marginBottom="xl">
          <Text style={{ fontSize: 64, lineHeight: 76 }}>{game.emoji}</Text>
        </Box>

        <Box flexDirection="row" justifyContent="center" marginBottom="l">
          {(Object.entries(LEVEL_LABELS) as [Level, string][]).map(
            ([key, label]) => (
              <TouchableOpacity
                key={key}
                style={[
                  styles.levelTab,
                  level === key && styles.levelTabActive,
                  isDark &&
                    (level === key
                      ? styles.levelTabActiveDark
                      : styles.levelTabDark),
                ]}
                onPress={() => setLevel(key)}
              >
                <Text
                  variant="body"
                  style={[
                    styles.levelTabText,
                    level === key && styles.levelTabTextActive,
                    isDark &&
                      (level === key
                        ? styles.levelTabTextActiveDark
                        : styles.levelTabTextDark),
                  ]}
                >
                  {label}
                </Text>
              </TouchableOpacity>
            )
          )}
        </Box>

        <Animated.View
          style={[
            styles.questionContainer,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <Text variant="subheader" textAlign="center">
            {questions[currentQuestion]}
          </Text>
        </Animated.View>

        <Box flex={1} justifyContent="flex-end" marginBottom="xl">
          <Pressable
            style={({ pressed }) => [
              styles.nextButton,
              { backgroundColor: pressed ? game.color : "#f59e0b" },
              isDark && pressed && { backgroundColor: "#d97706" },
            ]}
            onPress={handleNextQuestion}
          >
            <Text variant="button" textAlign="center">
              Nästa
            </Text>
          </Pressable>
        </Box>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  backIcon: {
    marginRight: 4,
  },
  backText: {
    fontSize: 16,
    fontWeight: "500",
  },
  levelTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginHorizontal: 4,
    backgroundColor: "#e2e8f0", // slate-200
  },
  levelTabActive: {
    backgroundColor: "#f59e0b", // amber-500
  },
  levelTabDark: {
    backgroundColor: "#334155", // slate-700
  },
  levelTabActiveDark: {
    backgroundColor: "#f59e0b", // amber-500
  },
  levelTabText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#475569", // slate-600
  },
  levelTabTextActive: {
    color: "#0f172a", // slate-900
    fontWeight: "600",
  },
  levelTabTextDark: {
    color: "#94a3b8", // slate-400
  },
  levelTabTextActiveDark: {
    color: "#0f172a", // slate-900
    fontWeight: "600",
  },
  questionContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginBottom: 24,
    minHeight: 80,
  },
  nextButton: {
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});
