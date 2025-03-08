import { createTheme } from "@shopify/restyle";

const palette = {
  yellow: "#f59e0b", // amber-500
  yellowDark: "#d97706", // amber-600
  yellowLight: "#fcd34d", // amber-300
  black: "#0f172a", // slate-900
  white: "#ffffff",
  gray: "#64748b", // slate-500
  grayLight: "#e2e8f0", // slate-200
  grayDark: "#334155", // slate-700
  background: "#ffffff",
};

const theme = createTheme({
  colors: {
    mainBackground: palette.background,
    primary: palette.yellow,
    primaryDark: palette.yellowDark,
    primaryLight: palette.yellowLight,
    text: palette.black,
    textMuted: palette.gray,
    textOnPrimary: palette.black,
    textOnPrimaryLight: palette.black,
    border: palette.grayLight,
    activeTab: palette.yellow,
    activeTabText: palette.black,
    inactiveTab: palette.grayLight,
    inactiveTabText: palette.gray,
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 40,
  },
  borderRadii: {
    s: 4,
    m: 8,
    l: 16,
    xl: 24,
  },
  textVariants: {
    defaults: {
      fontSize: 16,
      lineHeight: 24,
      color: "text",
    },
    header: {
      fontWeight: "bold",
      fontSize: 24,
      lineHeight: 32,
      color: "text",
    },
    subheader: {
      fontWeight: "600",
      fontSize: 20,
      lineHeight: 28,
      color: "text",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: "text",
    },
    caption: {
      fontSize: 14,
      lineHeight: 20,
      color: "textMuted",
    },
    button: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: "600",
      color: "textOnPrimary",
    },
  },
});

export type Theme = typeof theme;
export default theme;
