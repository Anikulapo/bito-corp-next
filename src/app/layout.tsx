
import type { Metadata } from "next";

import "./globals.css";
import { Roboto } from "next/font/google";


export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});





export const metadata: Metadata = {
  title: "PayZen",
  description:
    "A modern invoice generator for freelancers and small businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
