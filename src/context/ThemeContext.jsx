import { createContext, useState, useContext, useEffect } from "react";
import { themes } from "../constant/themes";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    const saved = localStorage.getItem("app-theme");

    if (saved) return saved;

    // 👇 system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  };

  const [currentTheme, setCurrentTheme] = useState(getInitialTheme);

  const changeTheme = (themeName) => {
    setCurrentTheme(themeName);
    localStorage.setItem("app-theme", themeName);
  };

  const theme = themes[currentTheme];

  // ✅ Apply theme to HTML (important)
  useEffect(() => {
    const root = document.documentElement;

    // remove old classes
    root.classList.remove("light", "dark", "midnight");

    // add current theme
    root.classList.add(currentTheme);

    // smooth transition
    root.style.transition = "background-color 0.3s, color 0.3s";
  }, [currentTheme]);

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