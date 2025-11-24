"use client";

import { ReactNode, useState } from "react";
import { Provider } from "react-redux";
import { store } from "@/state/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeHydrator from "@/components/ThemeHydrator";

export function AppProviders({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeHydrator />
        {children}
      </QueryClientProvider>
    </Provider>
  );
}

