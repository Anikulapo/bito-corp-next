"use client";
import Header from "@/components/Header";
import { Provider } from "react-redux";
import { store } from "@/state/store";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <main className="bg-[#f6f7f8] min-h-screen">
        <Header />
        {children}
      </main>
    </Provider>
  );
}
