import { useState, useEffect } from "react";

export function useSimpleTheme() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    // Initialize from localStorage or default to dark
    const savedTheme = localStorage.getItem("portfolio-theme");
    return (savedTheme === "light" || savedTheme === "dark") ? savedTheme : "dark";
  });

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  return { theme, setTheme, toggleTheme };
}