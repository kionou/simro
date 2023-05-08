// import { createI18n } from 'vue-i18n'
// import fr from '@/locales/fr.json'
// import en from '@/locales/en.json'

// function loadLocaleMessages(){
//   const locales = [{fr: fr} , {en: en}]
//   const messages = {}
//   locales.forEach(lang =>{
//   const key = Object.keys(lang)
//   messages[key] = lang[key]
  
//   })
// console.log('mesa',messages);
// return messages
// }


// export default createI18n({
//   locale: 'fr',
//   fallbackLocale: "fr",
//   messages:loadLocaleMessages()
// })

import { createI18n } from 'vue-i18n'
import axios from 'axios'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en'
})

const loadedLanguages = []

function setI18nLanguage (lang) {
  i18n.global.locale = lang
  axios.defaults.headers.common['Accept-Language'] = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

export function loadLanguageAsync (lang) {
  if (loadedLanguages.includes(lang)) {
    if (i18n.global.locale !== lang) setI18nLanguage(lang)
    return Promise.resolve()
  }
  return axios.get(`/api/lang/${lang}`).then(response => {
    let msgs = response.data
    loadedLanguages.push(lang)
    i18n.global.setLocaleMessage(lang, msgs.default)
    setI18nLanguage(lang)
  })
}

export default { i18n, setI18nLanguage , loadLanguageAsync }



