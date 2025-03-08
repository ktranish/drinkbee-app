import { createTheme } from "@shopify/restyle";
import baseTheme from "./theme";

const palette = {
  yellow: "#f59e0b", // amber-500
  yellowDark: "#d97706", // amber-600
  yellowLight: "#fcd34d", // amber-300
  black: "#0f172a", // slate-900
  white: "#ffffff",
  gray: "#94a3b8", // slate-400
  grayLight: "#334155", // slate-700
  grayDark: "#1e293b", // slate-800
  background: "#0f172a", // slate-900
};

const darkTheme = createTheme({
  ...baseTheme,
  colors: {
    mainBackground: palette.background,
    primary: palette.yellow,
    primaryDark: palette.yellowDark,
    primaryLight: palette.yellowLight,
    text: palette.white,
    textMuted: palette.gray,
    textOnPrimary: palette.black,
    textOnPrimaryLight: palette.black,
    border: palette.grayLight,
    activeTab: palette.yellow,
    activeTabText: palette.black,
    inactiveTab: palette.grayDark,
    inactiveTabText: palette.gray,
  },
});

export type Theme = typeof darkTheme;
export default darkTheme;
