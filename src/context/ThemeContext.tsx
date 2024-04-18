"use client"

import { ScriptProps } from "next/script";
import { createContext, useEffect, useState, ReactNode, useContext } from "react";

type ThemeContextType = {
  theme: string;
  toggle: () => void;
}

const themeContextDefaultValues: ThemeContextType = {
  theme: "light",
  toggle: () => {}
};

const ThemeContext = createContext<ThemeContextType>(themeContextDefaultValues);

export function useTheme() {
  return useContext(ThemeContext);
}

const getFromLocalStorage = (): string => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
  return "light";
};

export const ThemeContextProvider = ({ children }: ScriptProps) => {
  const [theme, setTheme] = useState<string>(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};