import { ApplicationThemeInterface } from "../../types/ThemeTypes";

const defaultApplicationTheme: ApplicationThemeInterface = {
  name: "default",
  colors: {
    primary: {
      default: "#155c8f",
      dark: "#092940",
      light: "#f0f8ff",
    },
    white: "#ffffff",
    green: "#8bb839",
    yellow: "#ffd359",
    black: "#000000",
  },
};

export default defaultApplicationTheme;
