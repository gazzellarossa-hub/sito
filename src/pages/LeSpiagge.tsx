"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const LeSpiagge = () => {
  const { t } = useTranslation();

  const beaches = [
    {
      nameKey: "beach_conigli_name",
      descriptionKey: "beach_conigli_desc",
      accessKey: "beach_conigli_access",
      distanceKey: "beach_conigli_distance",
      image: "https://assets.dyad.sh/CONIGLI.webp",
      alt: "Spiaggia dei Conigli",
    },
    {
      nameKey: "beach_pulcino_name",
      descriptionKey: "beach_pulcino_desc",
      accessKey: "beach_pulcino_access",
      distanceKey: "beach_pulcino_distance",
      image: "https://assets.dyad.sh/Tabaccara%20Gommoni.webp",
      alt: "Cala Pulcino",
    },
    {
      nameKey: "beach_croce_name",
      descriptionKey: "beach_croce_desc",
      accessKey: "beach_croce_access",
      distanceKey: "beach_croce_distance",
      image: "https://assets.dyad.sh/Cala%20Croce.webp", // Placeholder, replace with actual image if available
      alt: "Cala Croce",
    },
    {
      nameKey: "beach_guitgia_name",
      descriptionKey: "beach_guitgia_desc",
      accessKey: "beach_guitgia_access",
      distanceKey: "beach_guitgia_distance",
      image: "https://assets.dyad.sh/Cala%20Guitgia.webp", // Placeholder, replace with actual image if available
      alt: "Cala Guitgia",
    },
    {
      nameKey: "beach_madonna_name",
      descriptionKey: "beach_madonna_desc",
      accessKey: "beach_madonna_access",
      distanceKey: "beach_madonna_distance",
      image: "https://assets.dyad.sh/Cala%20Madonna.webp", // Placeholder, replace with actual image if available
      alt: "Cala Madonna",
    },
    {
      nameKey: "beach_greca_name",
      descriptionKey: "beach_greca_desc",
      accessKey: "beach_greca_access",
      distanceKey: "beach_greca_distance",
      image: "https://assets.dyad.sh/Cala%20Greca.webp", // Placeholder, replace with actual image if available
      alt: "Cala Greca",
    },
    {
      nameKey: "beach_creta_name",
      descriptionKey: "beach_creta_desc",
      accessKey: "beach_creta_access",
      distanceKey: "beach_creta_distance",
      image: "https://assets.dyad.sh/Cala%20Creta.webp", // Placeholder, replace with actual image if available
      alt: "Cala Creta",
    },
    {
      nameKey: "beach_pisana_name",
      descriptionKey: "beach_pisana_desc",
      accessKey: "beach_pisana_access",
      distanceKey: "beach_pisana_distance",
      image: "https://assets.dyad.sh/Cala%20Pisana.webp", // Placeholder, replace with actual image if available
      alt: "Cala Pisana",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-10 text-primary">{t('beaches_page.title')}</h1>
        <p className="text-lg text-center text-muted-foreground mb-8">
          {t('beaches_page.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {beaches.map((beach, index) => (
            <div key={index} className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <img src={beach.image} alt={beach.alt} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-primary">{t(`beaches_page.${beach.nameKey}`)}</h3>
                <p 
                  className="text-muted-foreground mb-4" 
                  dangerouslySetInnerHTML={{ __html: t(`beaches_page.${beach.descriptionKey}`) }}
                ></p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong className="text-primary">{t('beaches_page.access_label')}</strong> {t(`beaches_page.${beach.accessKey}`)}</p>
                  <p><strong className="text-primary">{t('beaches_page.distance_label')}</strong> {t(`beaches_page.${beach.distanceKey}`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LeSpiagge;