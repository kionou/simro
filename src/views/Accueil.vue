<template>

<div>
    <Loader v-if="isLoading" ></Loader>
    <div v-show="!isLoading">
      <Header :slides="slides" :textes="textes" :titres="titres" :height="63" />
    <Corps />
    <Top />
    </div>
  </div>

 
 
  
</template>

<script>
import axiosClient from '@/axiosClient';
import Loader from '@/components/other/loader.vue';
import Header from '@/components/section/header.vue';
import Corps from '@/components/corps.vue';
import Top from '@/components/other/icone.vue';

export default {
  name: 'ViewsAccueil',
  components: {
    Header,
    Loader,
    Corps,
    Top
  },

  data() {
    return {
      slides: [],
      titres: [],
      textes: [],
      isLoading: true,
 
  
    };
  },

  async mounted() {
    try {
    
        document.body.classList.add('loading');
      const response = await axiosClient.get('/simro/marche');
      console.log("eeee",response.data.region);
      this.titres = response.data.region;
      
      const array1 = response.data.produit.filter((produit) => produit.affichage_ecran === 1);

      this.slides = array1.filter((produit) =>
        response.data.prix_moy.some((p) => p.code_produit === produit.code_produit)
      );

      var produitsAvecPrix = [];
      for (var i = 0; i < this.slides.length; i++) {
        for (var j = 0; j < response.data.prix_moy.length; j++) {
          if (this.slides[i].nom_produit === response.data.prix_moy[j].produit) {
            produitsAvecPrix.push([response.data.prix_moy[j]]);
          }
        }
      }

      const groupedData = produitsAvecPrix.reduce((acc, curr) => {
        const productName = curr[0].produit;
        if (!acc[productName]) {
          acc[productName] = [];
        }
        acc[productName].push(curr[0]);
        return acc;
      }, {});

      const groupedArray = Object.keys(groupedData).map((key) => {
        return groupedData[key];
      });

      this.textes = groupedArray;
       this.isLoading = false
       document.body.classList.remove('loading');
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
   
  },

 

};
</script>

<style>
body.loading {
  overflow: hidden; 
  transition:  3s ease-in-out; 
}


</style>
