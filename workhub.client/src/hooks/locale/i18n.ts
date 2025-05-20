import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";
import chainedBackend from "i18next-chained-backend";
import httpBackend from "i18next-http-backend";
import localStorageBackend from "i18next-localstorage-backend";
import { localeManager } from "./localeManager";

export type AppLocale = "en-US" | "ja-JP" | "vi-VN";

export const SUPPORTED_LANGUAGES: AppLocale[] = ["en-US", "ja-JP", "vi-VN"];
export const CURRENT_LANGUAGE: AppLocale = "en-US";

i18n
  .use(languageDetector)
  .use(chainedBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: CURRENT_LANGUAGE,

    // load: "languageOnly",
    supportedLngs: SUPPORTED_LANGUAGES,
    // nonExplicitSupportedLngs: true,
    // keySeparator: false,

    interpolation: {
      escapeValue: false,
    },

    backend: {
      backends: [localStorageBackend, httpBackend],
      backendOptions: [
        {
          expirationTime: 0, // debug
          // expirationTime: 7 * 24 * 60 * 60 * 1000, // 7 days
        },
        {
          loadPath: "/locales/{{lng}}/{{ns}}.json",
        },
      ],
    },

    react: {
      useSuspense: false, // disable if you want self control
    },
  });

i18n.on("languageChanged", async (lng: AppLocale) => {
  await localeManager.setLocale(lng);
});

export default i18n;
