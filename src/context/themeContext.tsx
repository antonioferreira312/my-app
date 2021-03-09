import { ThemeProvider } from "@material-ui/core";
import React, { Dispatch, SetStateAction } from "react";
import { THEMES, themeOne, themeTwo } from "../styles/theme";
import { Theme, ThemeType } from "../styles/types";

interface ThemeContextProps {
  themeType: string;
  setCurrentTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  themeType: "light",
} as ThemeContextProps);

export const MyThemeProvider: React.FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = React.useState<string>("light");
  let theme: Object;
  if (currentTheme === "light") {
    theme = themeOne;
  } else {
    theme = themeTwo;
  }
  return (
    <ThemeContext.Provider
      value={{
        themeType: currentTheme,
        setCurrentTheme,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
