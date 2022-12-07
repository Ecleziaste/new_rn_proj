import i18n, {TFuncKey} from 'i18next';
import {initReactI18next} from 'react-i18next';
import {APP_LANGUAGE_TYPE, APP_LANGUAGES} from 'src/shared/constants';

import en from './lang/en.json';
import ru from './lang/ru.json';

export const resources = {
  en: en.en,
  ru: ru.ru,
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: APP_LANGUAGES.en,
  resources,
  missingInterpolationHandler: function () {},
  interpolation: {
    escapeValue: false,
  },
});

export const changeLanguage = (lang: APP_LANGUAGE_TYPE) => {
  i18n.changeLanguage(lang);
};

export default i18n;

const translation = en.en.translation;
export type TranslationObject = typeof translation;
export type TranslationKeys = TFuncKey<'translation'>;
