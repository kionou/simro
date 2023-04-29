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
import Corps from '@/components/corps.vue'
import Top from '@/components/other/icone.vue';
export default {
  name: 'ViewsAccueil',
  components: {
    Header, Corps, Top
  },

  data() {
    return {


      slides: [ ],
      titres: [ ],
      textes: [ ],
    };
  },

 async mounted() {
  await axiosClient
            .get('/simro/marche')
            .then((response) => {
              console.log('responseAcc',response.data.prix_moy)
              this.slides = response.data.produit.filter(function(produit) {
               return produit.affichage_ecran === 1;
             });


             var produitsAvecPrix = [];
             var ppp = []
           for (var i = 0; i < this.slides.length; i++) {
           for (var j = 0; j < response.data.prix_moy.length; j++) {
           if (this.slides[i].nom_produit === response.data.prix_moy[j].produit) {
            produitsAvecPrix.push([ response.data.prix_moy[j]]);
            ppp.push(this.slides[j * i]);

                  
              }
    }
}
var ttt = []
for (let index = 0; index < ppp.length; index++) {
  if (ppp[index] !== undefined) {
    ttt.push(ppp[index]);
  }
  
}
console.log('fffffff',ttt);

console.log('fahaha',ppp);


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
      this.textes =  groupedArray
   console.log('groupedData',groupedArray);


            
})





},
    




  
  


  methods: {

  },
};
</script>

<style lang="css" scoped></style>