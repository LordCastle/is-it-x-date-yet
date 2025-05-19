"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <select
        value={theme}
        onChange={(e) =>
          setTheme(e.target.value as "system" | "light" | "dark")
        }
        className="p-2 border rounded-md bg-[var(--background)] text-[var(--foreground)] border-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="system">System Default</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};

export default ThemeSwitcher;
