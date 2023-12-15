import type { ReactNode } from "react";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";

import { Button } from "@crescent/ui/button";
import { Icons } from "@crescent/ui/icons";

interface HomeLayoutProps {
  children: ReactNode;
}

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-14 w-full items-center border-b  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex-1">
          <nav className="relative z-50 flex items-center justify-between">
            <div className="flex items-center md:gap-x-8">
              <Link href="/" aria-label="Home">
                <Icons.Check />
              </Link>
              <div className="hidden md:flex md:gap-x-4">
                <Button variant="nav" size="sm">
                  <Link href="/#features">Features</Link>
                </Button>
                <Button variant="nav" size="sm">
                  <Link href="/blog">Blog</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-x-4 md:gap-x-4">
              <div className="hidden md:block">
                <Button variant="nav" size="sm">
                  <Link href="/auth/sign-in">Sign In With</Link>
                </Button>
              </div>
              <Button variant="secondary" size="sm">
                <Link href="/auth/sign-up">Getting Started</Link>
              </Button>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <div className="-mr-1 md:hidden">
                <Icons.Menu />
              </div>
            </div>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="mx-auto max-w-7xl px-6 py-8">
        <p className="text-center text-xs leading-5 text-muted-foreground">
          &copy; 2023 , Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default HomeLayout;
