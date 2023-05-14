<template>
  <div>
    <Loader v-if="isLoading"></Loader>
    <div v-show="!isLoading">
      <Header :slides="slides" :textes="textes" :titres="titres" :height="63" />
      <Corps />
      <Top />
    </div>
  </div>
</template>

<script>
import axiosClient from '@/axiosClient';
import axios from 'axios';
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
  let endpoints = [
    '/simro/produit/',
    '/simro/prix_moy/',
    '/simro/region/',
  ];

  try {
    const [produit, prix_moy, region] = await axios.all(endpoints.map((endpoint) => axiosClient.get(endpoint)));

    console.log('apiiiiii', produit, region, prix_moy);

    document.body.classList.add('loading');

    this.titres = region.data;

    const array1 = produit.data.filter((produit) => produit.affichage_ecran === 1);
    console.log("eeee", array1);
    this.slides = array1.filter((produit) =>
      prix_moy.data.some((p) => p.code_produit === produit.code_produit)
    );
    console.log("slides", this.slides);

    var produitsAvecPrix = [];
    for (var i = 0; i < this.slides.length; i++) {
      for (var j = 0; j < prix_moy.data.length; j++) {
        if (this.slides[i].nom_produit === prix_moy.data[j].produit) {
          produitsAvecPrix.push([prix_moy.data[j]]);
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
  transition: 3s ease-in-out;
}
</style>
