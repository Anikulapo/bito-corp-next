"use client";

import { useEffect } from "react";
import { hydrateTheme } from "@/state/features/themeSlice";
import { useAppDispatch } from "@/state/hooks";

const ThemeHydrator = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(hydrateTheme());
  }, [dispatch]);

  return null;
};

export default ThemeHydrator;

