import { createBox, createText } from "@shopify/restyle";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Theme } from "../app/theme";
import { CATEGORIES, CATEGORY_LABELS, Category } from "../constants/games";

const Box = createBox<Theme>();
const Text = createText<Theme>();

type CategoryTabsProps = {
  selectedCategory: Category | typeof CATEGORIES.ALL;
  onSelectCategory: (category: Category | typeof CATEGORIES.ALL) => void;
};

const TABS = [
  { id: CATEGORIES.ALL, label: CATEGORY_LABELS[CATEGORIES.ALL] },
  { id: CATEGORIES.PARTY, label: CATEGORY_LABELS[CATEGORIES.PARTY] },
  { id: CATEGORIES.DRINKING, label: CATEGORY_LABELS[CATEGORIES.DRINKING] },
  { id: CATEGORIES.QUIZ, label: CATEGORY_LABELS[CATEGORIES.QUIZ] },
] as const;

export default function CategoryTabs({
  selectedCategory,
  onSelectCategory,
}: CategoryTabsProps) {
  return (
    <Box backgroundColor="mainBackground">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {TABS.map((tab) => {
          const isSelected = selectedCategory === tab.id;
          return (
            <TouchableOpacity
              key={tab.id}
              onPress={() => onSelectCategory(tab.id)}
              style={{ marginRight: 8 }}
            >
              <Box
                paddingHorizontal="m"
                paddingVertical="s"
                backgroundColor={isSelected ? "activeTab" : "inactiveTab"}
                borderRadius="m"
              >
                <Text
                  variant="body"
                  color={isSelected ? "activeTabText" : "inactiveTabText"}
                >
                  {tab.label}
                </Text>
              </Box>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Box>
  );
}
