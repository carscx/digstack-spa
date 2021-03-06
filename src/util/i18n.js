import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import auth from 'lang/auth.json'
import common from 'lang/common.json'
import menu from 'lang/menu.json'

i18n.use(initReactI18next).init({
  fallbackLng: 'es',
  lng: 'es',

  // have a common namespace used around the full app
  ns: ['auth', 'common', 'menu'],
  defaultNS: 'common',

  debug: false,

  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  react: {
    useSuspense: true,
  },

  resources: {
    es: {
      auth,
      common,
      menu,
    },
  },
})

export default i18n
