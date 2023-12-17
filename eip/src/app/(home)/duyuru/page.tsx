import { Button } from "@/components/shared/button";
import { Badge } from "@/components/shared/badge";
import React from 'react'
import Link from "next/link";

export default function AboutPage() {
    return (
        <section className="relative isolate">
          {/* Mevcut Arka Plan ve Başlık Kodları */}
          <div className="container">
            <div className="mx-auto">
              <div className="max-w-2xl text-start">
                {/* Mevcut İçerik Kodları */}
              </div>
            </div>
          </div>
          {/* Mevcut Gradyan Kodları */}

          {/* Duyurular Bölümü */}
          <div className="container py-8">
            <div className="mx-auto">
              <h2 className="text-3xl font-bold text-center">Duyurular</h2>
              <div className="mt-6 space-y-6">
                {/* Duyuru Listesi */}
                {announcements.map((announcement, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-semibold">{announcement.title}</h3>
                    <p>{announcement.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
    );
}

// Duyuru Verileri
const announcements = [
  {
    title: "Duyuru Başlığı 1",
    content: "Bu, duyuru içeriği 1."
  },
  {
    title: "Duyuru Başlığı 2",
    content: "Bu, duyuru içeriği 2."
  },
  // Diğer duyurular buraya eklenebilir
];
