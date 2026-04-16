import { createContext, useState, useContext, useEffect } from "react";
import { themes } from "../constant/themes";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem("app-theme") || "light";
  });

  const changeTheme = (themeName) => {
    setCurrentTheme(themeName);
    localStorage.setItem("app-theme", themeName);
  };

  const theme = themes[currentTheme];

  return (
    <ThemeContext.Provider
      value={{
        theme,
        currentTheme,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);