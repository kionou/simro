import { createI18n } from 'vue-i18n'
import fr from '@/locales/fr.json'
import en from '@/locales/en.json'

// function loadLocaleMessages(){
//   const locales = [{francais : fr} , {englais: en}]
//   const messages = {}
//   locales.forEach(lang =>{
//   const key = Object.keys(lang)
//   messages[key] = lang[key]
  
//   })
// return messages
// }


export default createI18n({
  locale: "fr",
  fallbackLocale: "fr",
  messages:{
      fr:fr,
      en:en
  }
})





