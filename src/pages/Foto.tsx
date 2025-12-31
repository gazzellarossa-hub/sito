"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const images = [
  { src: "public/images/Tramonto.webp", alt: "Tramonto" },
  { src: "public/images/Aperitivo%20Tramonto%202.webp", alt: "Aperitivo Tramonto 2" },
  { src: "public/images/Aperitivo%20Tramonto.webp", alt: "Aperitivo Tramonto" },
  { src: "public/images/Bagno%20Ariosto.webp", alt: "Bagno Ariosto" },
  { src: "public/images/Bagno%20Roma.webp", alt: "Bagno Roma" },
  { src: "public/images/CONIGLI.webp", alt: "Spiaggia dei Conigli" },
  { src: "public/imagesCucina%20Ariosto.webp", alt: "Cucina Ariosto" },
  { src: "public/imagesCucina%20Roma%202.webp", alt: "Cucina Roma 2" },
  { src: "public/images/Cucina%20Roma%203.webp", alt: "Cucina Roma 3" },
  { src: "public/images/Cucina%20Roma%204.webp", alt: "Cucina Roma 4" },
  { src: "public/images/Cucina%20Roma.webp", alt: "Cucina Roma" },
  { src: "public/images/Divano%20Letto%20Ariosto.webp", alt: "Divano Letto Ariosto" },
  { src: "public/images/Divano%20letto%20Roma.webp", alt: "Divano letto Roma" },
  { src: "public/images/facciata.webp", alt: "Facciata" },
  { src: "public/images/Letto%20Ariosto%202.webp", alt: "Letto Ariosto 2" },
  { src: "public/images/Letto%20Ariosto.webp", alt: "Letto Ariosto" },
  { src: "public/images/Letto%20Roma%202.webp", alt: "Letto Roma 2" },
  { src: "public/images/Letto%20Roma%203.webp", alt: "Letto Roma 3" },
  { src: "public/images/Letto%20Roma.webp", alt: "Letto Roma" },
  { src: "public/images/Tabaccara%20Gommoni.webp", alt: "Tabaccara Gommoni" },
  { src: "public/images/tabaccara.webp", alt: "Tabaccara" },
  { src: "public/images/Tramonto%202.webp", alt: "Tramonto 2" },
];

const Foto = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-10 text-primary">{t('photos_page.title')}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Foto;