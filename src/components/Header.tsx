"use client";

import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-primary text-primary-foreground p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-accent-foreground transition-colors">
          {t('brand.name')}
        </Link>
        <div className="flex items-center space-x-4">
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="text-lg hover:text-accent-foreground transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/appartamenti" className="text-lg hover:text-accent-foreground transition-colors">
                  {t('nav.apartments')}
                </Link>
              </li>
              <li>
                <Link to="/le-spiagge" className="text-lg hover:text-accent-foreground transition-colors">
                  {t('nav.beaches')}
                </Link>
              </li>
              <li>
                <Link to="/foto" className="text-lg hover:text-accent-foreground transition-colors">
                  {t('nav.photos')}
                </Link>
              </li>
              <li>
                <Link to="/contatti" className="text-lg hover:text-accent-foreground transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </nav>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;