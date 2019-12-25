import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import { reactI18nextModule } from "react-i18next";

i18n
  .use(Backend)
  .use(reactI18nextModule)
  .init({
    lng: "en",
    backend: {
      loadPath: "{{ns}}/{{lng}}.json"
    },
    fallbackLng: "en",
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ","
    },
    react: {
      wait: true
    }
  });

export default i18n;
