<template>
  <div>
    <Header :slides="slides" :textes="textes" :titres="titres" :height="63" />
    <Corps />
    <Top />
  </div>
</template>

<script>
// import axiosClient from '@/axiosClient';
import Header from '@/components/section/header.vue';
import Corps from '@/components/corps.vue'
import Top from '@/components/other/icone.vue';
export default {
  name: 'ViewsAccueil',
  components: {
    Header, Corps, Top
  },

  data() {
    return {

  produits:[
  {
        "id":1,
        "nom":"Poudre oignon",
        "prix":"1000",
        "image":"images/oignon/poudre.jpg"
    },
    {
        "id":2,
        "nom":"oignon bulbe",
        "prix":"300",
        "image":"images/oignon/bulbe.png"
    },
    {
        "id":3,
        "nom":"Riz Nerica 3",
        "prix":"200",
        "image":"images/riz/nerica.jpg"
    },
    {
        "id":4,
        "nom":"Riz Nerica L36",
        "prix":"200",
        "image":"images/riz/nerica.jpg"
    },
    {
        "id":5,
        "nom":"Riz Nerica N56",
        "prix":"200",
        "image":"images/riz/nerica.jpg"
    },
    {
        "id":6,
        "nom":"Riz étuvé",
        "prix":"200",
        "image":"images/riz/etuve.jpg"
    },
    {
        "id":7,
        "nom":"Lamelle Sèchée",
        "prix":"200",
        "image":"images/oignon/seche.png"
    },
    {
        "id":8,
        "nom":"Farine de riz",
        "prix":"200",
        "image":"images/riz/farine.png"
    },
    {
        "id":9,
        "nom":"Long grain",
        "prix":"200",
        "image":"images/riz/long_grain.jpg"
    },
    {
        "id":10,
        "nom":"Riz complet",
        "prix":"200",
        "image":"images/riz/complet.png"
    }


],
      slides: [
       

      ],
      textes: [
        
      ],
      titres: [
       
      ]
    };
  },

  mounted() {
     this.slides =this.produits.map(produit => produit.image);
   this.textes = this.produits.map(produit => produit.prix);
   this.titres = this.produits.map(produit => produit.nom);

console.log(this.slides);
console.log( this.textes);
console.log( this.titres);
  },


  methods: {

  },
};
</script>

<style lang="css" scoped></style>