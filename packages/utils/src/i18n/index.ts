import viAuth from './locales/vi/auth.json';
import viCommon from './locales/vi/common.json';
import viInfo from './locales/vi/info.json';
import viMenu from './locales/vi/menu.json';
import viModule from './locales/vi/module.json';
import viValidation from './locales/vi/validation.json';
import viPage from './locales/vi/page.json';
import { initReactI18next } from 'react-i18next/initReactI18next';
import i18n from 'i18next';

export const DEFAULT_LNG = 'vi';
export const LANGUAGES = [DEFAULT_LNG, 'en'];
export const DEFAULT_NS = 'common';

export const vi = {
   common: viCommon,
   menu: viMenu,
   module: viModule,
   validation: viValidation,
   info: viInfo,
   auth: viAuth,
   page: viPage,
};

export const OPTIONS = {
   lng: DEFAULT_LNG,
   ns: DEFAULT_NS,
   supportedLngs: LANGUAGES,
   fallbackLng: DEFAULT_LNG,
   fallbackNS: DEFAULT_NS,
   defaultNS: DEFAULT_NS,
   interpolation: {
      escapeValue: false,
   },
   resources: {
      vi,
   },
};

i18n.use(initReactI18next).init({
   lng: DEFAULT_LNG,
   ns: DEFAULT_NS,
   supportedLngs: LANGUAGES,
   fallbackLng: DEFAULT_LNG,
   fallbackNS: DEFAULT_NS,
   defaultNS: DEFAULT_NS,
   interpolation: {
      escapeValue: false,
   },
   resources: {
      vi,
   },
});

export { i18n };
