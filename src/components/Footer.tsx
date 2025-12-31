"use client";

import React from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Phone, Mail, Facebook, Instagram, MessageSquare, Twitter, Music } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-primary-foreground p-8 shadow-inner mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-3">{t('footer.contact_title')}</h3>
          <p className="flex items-center justify-center md:justify-start mb-2">
            <Phone className="mr-2 h-5 w-5" />
            <a href="tel:+393385421051" className="hover:underline">+39 3385421051</a>
          </p>
          <p className="flex items-center justify-center md:justify-start">
            <Mail className="mr-2 h-5 w-5" />
            <a href="mailto:carettacarettahome@gmail.com" className="hover:underline">carettacarettahome@gmail.com</a>
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold mb-3">{t('footer.social_title')}</h3>
          <div className="flex space-x-4 justify-center">
            <a href="https://www.facebook.com/carettacarettahome" target="_blank" rel="noopener noreferrer" className="hover:text-accent-foreground transition-colors">
              <Facebook className="h-7 w-7" />
            </a>
            <a href="https://www.instagram.com/carettacarettahome" target="_blank" rel="noopener noreferrer" className="hover:text-accent-foreground transition-colors">
              <Instagram className="h-7 w-7" />
            </a>
            {/* X / Twitter */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-accent-foreground transition-colors" aria-label="X (Twitter)">
              <Twitter className="h-7 w-7" />
            </a>
            {/* TikTok (using Music icon as placeholder) */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-accent-foreground transition-colors" aria-label="TikTok">
              <Music className="h-7 w-7" />
            </a>
            <a href="https://wa.me/393385421051" target="_blank" rel="noopener noreferrer" className="hover:text-accent-foreground transition-colors">
              <MessageSquare className="h-7 w-7" />
            </a>
          </div>
        </div>

        <div className="text-center md:text-right">
          <MadeWithDyad />
        </div>
      </div>
      <div className="text-center text-sm mt-6">
        &copy; {new Date().getFullYear()} Caretta caretta Home. {t('footer.copyright')}
      </div>
    </footer>
  );
};

export default Footer;