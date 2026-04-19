"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useThemeSwitch() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const mode = mounted
    ? (theme === "system" ? resolvedTheme : theme) || "light"
    : "light";

  return [mode, setTheme];
}
