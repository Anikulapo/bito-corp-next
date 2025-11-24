"use client";

import { Moon, Sun } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { setTheme } from "@/state/features/themeSlice";

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle = ({ className = "" }: ThemeToggleProps) => {
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();
  const isDark = theme === "dark";

  const handleToggle = () => {
    dispatch(setTheme(isDark ? "light" : "dark"));
  };

  return (
    <button
      type="button"
      aria-pressed={isDark}
      onClick={handleToggle}
      className={`flex items-center gap-2 rounded-full border border-gray-300 px-3 py-1.5 transition-colors duration-200 hover:border-[#5258E4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5258E4]/60 ${className}`}
    >
      <span className="relative flex items-center justify-center h-5 w-5">
        <Sun
          className={`absolute h-5 w-5 text-yellow-400 transition-opacity duration-200 ${isDark ? "opacity-0" : "opacity-100"}`}
        />
        <Moon
          className={`absolute h-5 w-5 text-blue-200 transition-opacity duration-200 ${isDark ? "opacity-100" : "opacity-0"}`}
        />
      </span>
      <span className="text-sm font-medium text-primary">
        {isDark ? "Dark mode" : "Light mode"}
      </span>
    </button>
  );
};

export default ThemeToggle;

