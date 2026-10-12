"use client";

import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="h-10 w-10 rounded-full border border-border bg-surface"
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-surface p-1">
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-label="Switch to light theme"
        aria-pressed={theme === "light"}
        className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
          theme === "light"
            ? "bg-accent text-white"
            : "text-muted hover:bg-surface-secondary"
        }`}
      >
        <Sun size={16} />
      </button>

      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-label="Switch to dark theme"
        aria-pressed={isDark}
        className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
          isDark
            ? "bg-accent text-white"
            : "text-muted hover:bg-surface-secondary"
        }`}
      >
        <Moon size={16} />
      </button>

      <button
        type="button"
        onClick={() => setTheme("system")}
        aria-label="Use system theme"
        aria-pressed={theme === "system"}
        className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
          theme === "system"
            ? "bg-accent text-white"
            : "text-muted hover:bg-surface-secondary"
        }`}
      >
        <Monitor size={16} />
      </button>
    </div>
  );
}
