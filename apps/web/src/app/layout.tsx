import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@crescent/ui/cn";

import { ThemeProvider } from "~/context/theme-provider";

import "@crescent/ui/styles.css";
import "../styles/globals.css";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const classBody: string = cn(
  "min-h-screen bg-background font-sans antialiased",
  fontSans.variable,
);

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={classBody}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
