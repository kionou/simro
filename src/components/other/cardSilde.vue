<template>
   <div class="cards"  v-for="produit in produits" :key="produit.id">
        <img :src="getImage(produit.image)" alt="">
        <p> {{ produit.nom }}</p>
         <p>{{ produit.prix }} F CFA </p>
    </div>
</template>

<script>
import { getImage } from '@/lib/getImage';
export default {
    name: 'CardSilde',
    props:["produits"],

    data() {
        return {
            
        };
    },

    mounted() {
       
       
        
    },

    methods: {
        getImage:getImage
    },
};
</script>

<style lang="css" scoped>
.cards{
  /* background: #94fc86; */
  height: 9rem !important;
  width: 9rem !important;
}
.lC3oC2kE3bD2fB1jC2qB4eF1v div {
    height: 9rem !important;
  width: 9rem !important;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px !important;
    font-weight: 600;
    background-color:white !important;
    /* margin: 0 5px; */
    color: var(--noir) !important;
    position: relative;
    z-index: 1;
    /* margin: 5px; */
    flex-direction: column;
    /* padding: 10px; */
    border-radius: var(--raduis) !important;
}
.cards .card-image{
    width: 100%;
    height: 63%;
}
.cards  img{
    width: 60%;
    /* height: 100px; */

}
</style>