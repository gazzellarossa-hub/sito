"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Appartamenti = () => {
  const { t } = useTranslation();

  const pulcinoFeatures = [
    t('features.double_bed_single'),
    t('features.living_kitchen_sofa'),
    t('features.equipped_kitchen'),
    t('features.modern_bathroom'),
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
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-10 text-primary">{t('index.apartments_title')}</h1>
        <p className="text-lg text-center text-muted-foreground mb-8">
          {t('apartments_page.subtitle')}
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Appartamento 1 */}
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

          {/* Appartamento 2 */}
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
        
        {/* Reservation CTA moved to the bottom */}
        <div className="text-center mt-12 p-6 bg-accent rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-primary-foreground">{t('apartments_page.cta_title')}</h2>
          <p className="text-accent-foreground mb-6">{t('apartments_page.cta_subtitle')}</p>
          <Link to="/contatti">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              {t('apartments_page.cta_button')}
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Appartamenti;