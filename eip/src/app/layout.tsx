import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React, { ReactNode } from 'react';



import { ThemeProvider } from "@/context/theme-provider";
import { cn } from "@/lib/cn";

import { TailwindIndicator } from "@/components/tailwind-indicator";
import "../styles/globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const classBody = cn(
  "min-h-screen bg-background font-sans antialiased",
  fontSans.variable
);

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={classBody}>
        <ThemeProvider>
          {children}
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
