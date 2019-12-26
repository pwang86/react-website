import i18n from "i18next";
// import Backend from "i18next-xhr-backend";
import { reactI18nextModule } from "react-i18next";
import translationEN from "../public/locales/en/translation.json";
import translationZH from "../public/locales/zh/translation.json";

const resources = {
  en: {
    translation: translationEN
  },
  zh: {
    translation: translationZH
  }
};

i18n.use(reactI18nextModule).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  debug: true,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ","
  },
  react: {
    wait: true
  }
});

// i18n
//   .use(Backend)
//   .use(reactI18nextModule)
//   .init({
//     lng: "en",
//     backend: {
//       loadPath: "/locales/{{lng}}/{{ns}}.json"
//     },
//     fallbackLng: "en",
//     debug: true,
//     ns: ["translation"],
//     defaultNS: "translation",
//     keySeparator: false,
//     interpolation: {
//       escapeValue: false,
//       formatSeparator: ","
//     },
//     react: {
//       wait: true
//     }
//   });

export default i18n;
