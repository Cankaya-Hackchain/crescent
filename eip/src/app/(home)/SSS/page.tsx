import { Button } from "@/components/shared/button";
import { Badge } from "@/components/shared/badge";
import React from 'react';
import Link from "next/link";

export default function secondpage() {
    return (
        <section className="relative isolate">
          {/* Existing Background and Header Code */}
          <div className="container">
            <div className="mx-auto">
              <div className="max-w-2xl text-start">
                {/* Existing Content Code */}
              </div>
            </div>
          </div>
          {/* Existing Gradient Code */}

          {/* SSS Section */}
          <div className="container mt-8"> {/* Boşluk azaltma için mt-8 ekledim */}
            <div className="mx-auto">
              <h2 className="text-3xl font-bold text-center">Sıkça Sorulan Sorular</h2>
              <div className="mt-6 space-y-6">
                {/* Soru ve Cevaplar */}
                {faqData.map((faq, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-semibold">{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
    );
}

// SSS Verileri
const faqData = [
  {
    question: "Projenin Amacı Nedir?",
    answer: "Ekonomik İstikrar Platformu, blockchain teknolojisini kullanarak enflasyonu izlemeyi, ekonomik politikaları bu verilere göre şekillendirmeyi, şeffaflık ve güven oluşturmayı amaçlar. Bu platform, fiyat istikrarını sağlamak ve ekonomik büyümeye katkıda bulunmak için tasarlanmıştır."
  },
  {
    question: "Blockchain Teknolojisi Nasıl Kullanılıyor?",
    answer: "Firmalar, fiyat verilerini blockchain üzerine polygon ağı üzerinden yükler. Bu veriler, enflasyonun gerçek zamanlı izlenmesini sağlar ve hükümetin ekonomik politikalarını bu verilere göre ayarlamasına olanak tanır."
  },
  {
    question: "Şeffaflık ve Güven Nasıl Sağlanıyor?",
    answer: "Fiyat verilerinin blockchain üzerinde şeffaf bir şekilde saklanması, işlemlerin doğruluğunu ve güvenilirliğini artırır. Bu durum, hem vatandaşların hem de işletmelerin sisteme olan güvenini güçlendirir."
  },
  {
    question: "Firma Davranışlarına Etkisi Nedir?",
    answer: "Enflasyon üzerindeki fiyat artışlarına uygulanan cezalar, firmaları daha rekabetçi ve sorumlu fiyat politikaları belirlemeye teşvik eder. Bu, piyasa dengesinin korunmasına yardımcı olur."
  },
  {
    question: "Vergi Teşviki ve Adil Rekabet Nedir?",
    answer: "Enflasyona uygun fiyat düzenlemesi yapan firmalara sağlanan vergi teşvikleri, adil rekabeti destekler ve ekonomide dengeli büyümeye katkıda bulunur."
  },
  {
    question: "Vatandaş Refahı Nasıl Etkileniyor?",
    answer: "Adil fiyat politikaları uygulayan firmaların ödüllendirilmesi, vatandaşların ekonomik refahını artırır. Makul fiyatlar, satın alma gücünü korur ve tüketici memnuniyetini artırır."
  },
  {
    question: "Teknolojik Yenilikler Nelerdir?",
    answer: "Blockchain teknolojisinin kullanımı, veri güvenliğini artırır ve manipülasyon riskini azaltır. Ayrıca, ekonomik analizlerde hız ve doğruluk sağlayarak teknolojik yeniliklere öncülük eder."
  },
  {
    question: "Kamu ve Özel Sektör İşbirliği Nasıl İşliyor?",
    answer: "Platform, kamu ve özel sektör arasında işbirliğini teşvik eder. Bu işbirliği, özel sektörün rekabetçi olmasını ve ekonomik büyümeye katkıda bulunmasını sağlar."
  },
  
];
