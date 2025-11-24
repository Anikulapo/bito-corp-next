"use client";

import Header from "@/components/Header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-page transition-colors duration-300">
      <Header />
      {children}
    </main>
  );
}
