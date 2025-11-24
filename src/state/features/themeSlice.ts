import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
}

const getSystemTheme = (): Theme | null => {
  if (typeof window === "undefined") return null;

  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isLight = window.matchMedia("(prefers-color-scheme: light)").matches;

  if (isDark) return "dark";
  if (isLight) return "light";

  return null;
};

const getTimeBasedTheme = (): Theme => {
  const hour = new Date().getHours();
  return hour >= 7 && hour < 18 ? "light" : "dark";
};

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "light";

  // Check system theme
  const system = getSystemTheme();
  if (system) return system;

  // Check time of day
  return getTimeBasedTheme();
};

const applyDocumentTheme = (theme: Theme) => {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", theme === "dark");
};

const initialState: ThemeState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    hydrateTheme(state) {
      state.theme = getInitialTheme();
      applyDocumentTheme(state.theme);
    },

    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
      applyDocumentTheme(state.theme);
    },
  },
});

export const { hydrateTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
