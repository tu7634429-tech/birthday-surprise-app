import { useEffect, useState } from "react";

function useTheme(themes) {
  const [activeTheme, setActiveTheme] = useState(themes?.[0] || null);

  useEffect(() => {
    if (!themes || themes.length === 0) return;

    setActiveTheme((prevTheme) => {
      if (prevTheme) return prevTheme;
      return themes[0];
    });
  }, [themes]);

  useEffect(() => {
    if (!activeTheme) return;

    document.documentElement.style.setProperty(
      "--theme-primary",
      activeTheme.primary || "#ec4899"
    );

    document.documentElement.style.setProperty(
      "--theme-secondary",
      activeTheme.secondary || "#fce7f3"
    );

    document.documentElement.style.setProperty(
      "--theme-background",
      activeTheme.background || "#fff7fb"
    );

    document.documentElement.style.setProperty(
      "--theme-text",
      activeTheme.text || "#3b1f2b"
    );
  }, [activeTheme]);

  return {
    activeTheme,
    setActiveTheme,
  };
}

export default useTheme;