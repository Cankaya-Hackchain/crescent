import { Button } from "@/components/shared/button";
import { Badge } from "@/components/shared/badge";
import React from 'react'
import Link from "next/link";


export default function AboutPage() {
    return (
        <section className="relative isolate">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80caff] to-[#4f46e5] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="py-24 sm:py-32 lg:pb-30 container">
            <div className="mx-auto  ">
              <div className="max-w-2xl text-start">
                <Badge variant="outline" className="mb-6">
                  1.0 🎉
                </Badge>
                <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight sm:text-6xl text-secondary-foreground">
                  Ekonomik
                  <br /> İstikrar Platformu
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">
                  Türkiye de adil ve şeffaf fiyatlandırmayı savunan önde gelen sivil
                  toplum kuruluşlarından biridir. Platform, yüksek enflasyon ve
                  tüketicilerin yaşadığı fiyat istikrarsızlığı sorunlarına çözüm
                  aramaya odaklanmıştır.
                </p>
                <Button className="mt-10">
                  <Link href="">Hemen Üye Ol!</Link>
                </Button>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#80caff] to-[#4f46e5] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </section>
      );
    }
