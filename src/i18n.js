import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationPL from './locales/pl/translation.json';
import translationUA from './locales/ua/translation.json';

const resources = {
	pl: {
		translation: translationPL,
	},
	ua: {
		translation: translationUA,
	},
	en: {
		translation: translationEN,
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: 'pl',

	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
