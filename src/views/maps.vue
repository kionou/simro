<template>
  <div class="container" >
   <select name="" id="" v-model="$i18n.locale">
    <option v-for="locale in $i18n.availableLocales" :key="locale " :value="locale">{{ locale }}</option>
   </select>

    <!-- <div v-for="(texte, index) in textes" :key="index">
       <p>{{ $t(texte.titre_texte) }}</p>
      <p>{{  $t(texte.corps_texte )}}</p> 
      <p>{{ $t('titre_texte.greeting', { name: texte.corps_texte })}}</p>

    </div> -->
    
    <!-- <p>{{ $t('hello') }} {{ $t('world') }}!</p> -->
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
</script>





<style scoped>
.container{
  width: 100%;
  height: 100vh;
  border: 1px solid red;
}
</style>
