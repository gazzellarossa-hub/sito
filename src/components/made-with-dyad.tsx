"use client";

import React from "react";
import { useTranslation } from "react-i18next";

export const MadeWithDyad = () => {
  const { t } = useTranslation();
  return (
    <a
      href="https://carettacarettahomelampedusa.it"
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors"
    >
      {t('footer.made_by')}
    </a>
  );
};