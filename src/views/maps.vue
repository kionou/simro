<!-- <template>
  <div class="container" >
   <select name="" id="" v-model="$i18n.locale">
    <option v-for="locale in $i18n.availableLocales" :key="locale " :value="locale">{{ locale }}</option>
   </select>

    <div v-for="(texte, index) in textes" :key="index">
       <p>{{ $t(texte.titre_texte) }}</p>
      <p>{{  $t(texte.corps_texte )}}</p> 
      <p>{{ $t('titre_texte.greeting', { name: texte.corps_texte }) }}</p>

    </div>
    
    <p>{{ $t('hello') }} {{ $t('world') }}!</p>
  </div>
</template>

<script>
import axiosClient from '@/axiosClient';

 
export default {
  name: 'MapT',

  data() {
    return {
    
      textes: '',
    }
  },
  async mounted() {
    const response = await axiosClient.get('/simro/marche');
    this.textes = response.data.texte
  },
  methods: {
 
  },
  computed: {
    
  }
}
</script> -->


<template>
  <div class="container">
    <select name="" id="" v-model="currentLang" @change="changeLang">
      <option v-for="lang in supportedLangs" :key="lang" :value="lang">{{ lang }}</option>
    </select>

    <div v-if="textes">
      <p>{{ $t('titre_texte.greeting', { name: textes.titre_texte }) }}</p>
      <p>{{ $t('corps_texte') }}</p>
    </div>

    <p>{{ $t('hello') }} {{ $t('world') }}!</p>
  </div>
</template>

<script>
import axiosClient from '@/axiosClient';
import { i18n, setI18nLanguage, loadLanguageAsync } from '@/i18n';

export default {
  name: 'MapT',
  i18n:i18n,
  data() {
    return {
      textes: null,
      currentLang: 'fr',
      supportedLangs: ['fr', 'en']
    }
  },
  async mounted() {
    await loadLanguageAsync(this.currentLang);
    const response = await axiosClient.get('/simro/marche');
    this.textes = response.data.texte;
  },
  methods: {
    async changeLang() {
     await setI18nLanguage(this.currentLang)
      await loadLanguageAsync(this.currentLang);
      const response = await axiosClient.get('/simro/marche');
      this.textes = response.data.texte;
    }
  }
}
</script>



<style scoped>
.container{
  width: 100%;
  height: 100vh;
  border: 1px solid red;
}
</style>
