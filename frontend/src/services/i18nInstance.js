import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from '../locales/ru.js';

const i18nextInstance = i18next.createInstance();

export const initializeI18next = async () => {
  await i18nextInstance.use(initReactI18next).init({
    lng: 'ru', // Текущий язык
    fallbackLng: 'ru',
    debug: true,
    resources: {
      ru,
    },
    interpolation: {
      escapeValue: false,
    },
  });
};

export default i18nextInstance;
