"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Facebook, Instagram, MessageSquare, Twitter, MapPin, Music } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "react-i18next";

const Contatti = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Google Maps embed URL centrato su Via Ludovico Ariosto 49, Lampedusa
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177.8005000000003!2d12.6088888!3d35.5027777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1311111111111111%3A0x1111111111111111!2sVia%20Ludovico%20Ariosto%2C%2049%2C%2092031%20Lampedusa%20AG!5e0!3m2!1sit!2sit!4v1715878800000!5m2!1sit!2sit";


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const generateMailtoLink = () => {
    const subject = encodeURIComponent("Richiesta Informazioni/Prenotazione da Caretta caretta Home");
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMessaggio:\n${formData.message}`
    );
    return `mailto:carettacarettahome@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-10 text-primary">{t('contact_page.title')}</h1>
        <p className="text-lg text-center text-muted-foreground mb-8">
          {t('contact_page.subtitle')}
        </p>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Colonna 1: Modulo di Contatto e Social */}
          <div>
            {/* Social Media Section */}
            <div className="mb-8 p-6 bg-secondary rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-center mb-4 text-primary">{t('contact_page.social_title')}</h2>
              <div className="flex justify-center space-x-6 mb-6">
                <a href="https://www.facebook.com/carettacarettahome" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors" aria-label="Facebook">
                  <Facebook className="h-8 w-8" />
                </a>
                <a href="https://www.instagram.com/carettacarettahome" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors" aria-label="Instagram">
                  <Instagram className="h-8 w-8" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors" aria-label="X (Twitter)">
                  <Twitter className="h-8 w-8" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors" aria-label="TikTok">
                  <Music className="h-8 w-8" />
                </a>
                <a href="https://wa.me/393385421051" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors" aria-label="WhatsApp">
                  <MessageSquare className="h-8 w-8" />
                </a>
              </div>
              <div className="text-center space-y-2 text-muted-foreground">
                <p className="flex items-center justify-center">
                  <Phone className="mr-2 h-4 w-4" />
                  <a href="tel:+393385421051" className="hover:underline">+39 3385421051</a>
                </p>
                <p className="flex items-center justify-center">
                  <Mail className="mr-2 h-4 w-4" />
                  <a href="mailto:carettacarettahome@gmail.com" className="hover:underline">carettacarettahome@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="bg-card text-card-foreground p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-center mb-6 text-primary">{t('contact_page.form_title')}</h2>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-muted-foreground">{t('contact_page.form_name_label')}</Label>
                  <Input id="name" type="text" placeholder={t('contact_page.form_name_placeholder')} required className="mt-1" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor="email" className="text-muted-foreground">{t('contact_page.form_email_label')}</Label>
                  <Input id="email" type="email" placeholder={t('contact_page.form_email_placeholder')} required className="mt-1" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor="message" className="text-muted-foreground">{t('contact_page.form_message_label')}</Label>
                  <Textarea id="message" placeholder={t('contact_page.form_message_placeholder')} rows={5} required className="mt-1" value={formData.message} onChange={handleChange} />
                </div>
                <a href={generateMailtoLink()} className="block">
                  <Button type="button" className="w-full" disabled={!formData.name || !formData.email || !formData.message}>
                    {t('contact_page.form_button')}
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Colonna 2: Mappa e Percorso */}
          <div className="bg-card text-card-foreground p-8 rounded-lg shadow-lg h-full">
            <h2 className="text-2xl font-semibold text-center mb-6 text-primary">{t('contact_page.location_title')}</h2>
            
            <Tabs defaultValue="location" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="location">{t('contact_page.tab_location')}</TabsTrigger>
                <TabsTrigger value="directions">{t('contact_page.tab_directions')}</TabsTrigger>
              </TabsList>
              <TabsContent value="location" className="mt-4">
                <div className="flex items-center justify-center mb-4 text-lg font-medium text-muted-foreground">
                    <MapPin className="h-5 w-5 mr-2" />
                    Via Ludovico Ariosto 49, 92031 Lampedusa AG
                </div>
                <div className="aspect-video w-full rounded-lg overflow-hidden border">
                  <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Posizione Caretta caretta Home"
                  ></iframe>
                </div>
                <p className="text-sm text-center text-muted-foreground mt-4">
                    {t('contact_page.map_hint')}
                </p>
              </TabsContent>
              <TabsContent value="directions" className="mt-4">
                <p className="text-muted-foreground mb-4">
                  {t('contact_page.directions_text')}
                </p>
                <div className="aspect-video w-full rounded-lg overflow-hidden border">
                  <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Indicazioni per Caretta caretta Home"
                  ></iframe>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contatti;