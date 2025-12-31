"use client";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();

  const pulcinoFeatures = [
    t('features.double_bed_single'),
    t('features.living_kitchen_sofa'),
    t('features.equipped_kitchen'),
    t('features.elegant_bathroom'),
    t('features.air_conditioning'),
  ];

  const cretaFeatures = [
    t('features.double_bed'),
    t('features.living_kitchen_sofa'),
    t('features.equipped_kitchen'),
    t('features.elegant_bathroom'),
    t('features.balcony'),
    t('features.air_conditioning'),
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('public/images/CONIGLI.webp')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center p-4 max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">{t('index.hero_title')}</h1>
            <p className="text-xl md:text-2xl leading-relaxed animate-fade-in-up delay-200">
              {t('index.hero_text')}
            </p>
          </div>
        </section>
        {/* Apartments Description Section */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold text-center mb-10 text-primary">{t('index.apartments_title')}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Apartment 1 */}
            <div className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <img src="public/images/Collage-Lato-Roma.webp" alt={t('index.apartment_pulcino_title')} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-primary">{t('index.apartment_pulcino_title')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('index.apartment_pulcino_desc')}
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {pulcinoFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Apartment 2 */}
            <div className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <img src="public/images/Collage-Lato-Ariosto.webp" alt={t('index.apartment_creta_title')} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-primary">{t('index.apartment_creta_title')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('index.apartment_creta_desc')}
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {cretaFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;