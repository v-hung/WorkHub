import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";
import chainedBackend from "i18next-chained-backend";
import httpBackend from "i18next-http-backend";
import localStorageBackend from "i18next-localstorage-backend";

i18n
  .use(languageDetector)
  .use(chainedBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",

    load: "languageOnly",
    supportedLngs: ["en", "vi", "ja"],
    nonExplicitSupportedLngs: true,
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

export default i18n;
