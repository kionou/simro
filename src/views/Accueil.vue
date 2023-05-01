<template>
  <div>
    <Header :slides="slides" :textes="textes" :titres="titres" :height="63" />
    <Corps />
    <Top />
  </div>
</template>

<script>
import axiosClient from '@/axiosClient';
import Header from '@/components/section/header.vue';
import Corps from '@/components/corps.vue';
import Top from '@/components/other/icone.vue';

export default {
  name: 'ViewsAccueil',
  components: {
    Header,
    Corps,
    Top
  },

  data() {
    return {
      slides: [],
      titres: [],
      textes: []
    };
  },

  async mounted() {
    try {
      const response = await axiosClient.get('/simro/marche');
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
    } catch (error) {
      console.error(error);
    }
  }
};
</script>
