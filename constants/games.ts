export type Category = (typeof ALL_GAMES)[number]["category"];

export const ALL_GAMES = [
  {
    title: "Med andra ord",
    emoji: "🎯",
    slug: "med-andra-ord",
    category: "sallskapsspel",
    color: "#F8FAFC", // gray-50
    description:
      "Ett roligt ordförklaringsspel där du ska få andra att gissa ordet utan att använda vissa förbjudna ord.",
  },
  {
    title: "200 Frågor",
    emoji: "❓",
    slug: "200-fragor",
    category: "quiz",
    color: "#EFF6FF", // blue-50
    description:
      "En samling av 200 intressanta frågor för att lära känna varandra bättre.",
  },
  {
    title: "Jag har aldrig",
    emoji: "🙅‍♂️",
    slug: "jag-har-aldrig",
    category: "dricklekar-och-drickspel",
    color: "#FEFCE8", // yellow-50
    description:
      "Ett klassiskt drickspel där spelarna turas om att säga saker de aldrig har gjort.",
  },
  {
    title: "Pekleken",
    emoji: "👉",
    slug: "pekleken",
    category: "dricklekar-och-drickspel",
    color: "#FAF5FF", // purple-50
    description:
      "Ett enkelt men roligt drickspel där spelarna pekar på den som passar bäst in på olika påståenden.",
  },
  {
    title: "Snurra flaskan",
    emoji: "🍾",
    slug: "snurra-flaskan",
    category: "dricklekar-och-drickspel",
    color: "#F0FDF4", // green-50
    description:
      "Ett klassiskt partyspel där en flaska snurras för att bestämma vem som ska utföra en uppgift.",
  },
] as const;

export const CATEGORIES = {
  ALL: "alla-spel",
  PARTY: "sallskapsspel",
  DRINKING: "dricklekar-och-drickspel",
  QUIZ: "quiz",
} as const;

export const CATEGORY_LABELS = {
  [CATEGORIES.ALL]: "Alla spel",
  [CATEGORIES.PARTY]: "Sällskapsspel",
  [CATEGORIES.DRINKING]: "Dricklekar",
  [CATEGORIES.QUIZ]: "Quiz",
} as const;

export const LEVELS = {
  ALL: "all",
  EASY: "easy",
  MEDIUM: "medium",
  HARD: "hard",
} as const;

export const LEVEL_LABELS = {
  [LEVELS.ALL]: "Alla nivåer",
  [LEVELS.EASY]: "Lätt",
  [LEVELS.MEDIUM]: "Medium",
  [LEVELS.HARD]: "Svår",
} as const;
