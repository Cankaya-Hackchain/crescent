import type { ReactNode } from "react";
import { Button } from "@/components/shared/button";
import Link from "next/link";

import Image from "next/image";

type HomeLayoutProps = {
  children: ReactNode;
};

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="h-14 border-b flex items-center sticky top-0 z-50 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex-1 mx-auto container">
          <nav className="relative z-50 flex justify-between items-center">
            <div className="flex items-center gap-x-4  md:gap-x-8">
              <Link href="#" aria-label="Home">
                <Image
                  src="/tb_logo.svg"
                  alt="Ticaret Bakanligi"
                  width={36}
                  height={36}
                  priority
                
                />
              </Link>

              <Link href="/" aria-label="Home">
                <Image
                  src="/eip.webp"
                  alt="eip"
                  width={36}
                  height={36}
                  priority
                />
              </Link>

              <Link href="/about" aria-label="Home">
               Hakkımızda
              </Link>

              <Link href="/aert" aria-label="Home">
               Anomali Artış Takip
              </Link>


              <Link href="/ort" aria-label="Home">
               İş Ortakları
              </Link>

              <Link href="/duyuru" aria-label="Home">
               Duyurular
              </Link>


              <Link href="/SSS" aria-label="Home">
               SSS
              </Link>


              <div className="hidden md:flex md:gap-x-4"></div>
            </div>
            <div className="flex items-center gap-x-4 md:gap-x-4">
              <div className="hidden md:block"></div>
              <Button variant="secondary" size="sm">
                <Link href="https://giris.turkiye.gov.tr/Giris/">Kurumsal Giriş</Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-6 py-8">
        <p className="text-center text-xs leading-5 text-muted-foreground">
          &copy; 2023 EIP, Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default HomeLayout;
