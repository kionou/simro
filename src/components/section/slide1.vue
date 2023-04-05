<template>
  <VueAIcarousel :Property="{ ID: 'Tw', Dlay: 1000 }">
    <CardSilde :produits="produits" />
  </VueAIcarousel>
</template>

<script>
import VueAIcarousel from "vue-ai-carousel"
import CardSilde from "../other/cardSilde.vue";
export default {
  name: 'CptSlide',
  data() {
    return {
      produits: '',
    };
  },
  components: {
    VueAIcarousel, CardSilde

  },
  mounted() {
    const response = require('@/lib/marche.json')
    this.produits = response
  },
};
</script>

<style scoped>
.cards {
  height: 9rem !important;
  width: 12rem !important;
}

.lC3oC2kE3bD2fB1jC2qB4eF1v div {
  height: 9rem !important;
  width: 12rem !important;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px !important;
  font-weight: 600;
  background-color: var(--blanc) !important;
  color: var(--noir) !important;
  position: relative;
  z-index: 1;
  flex-direction: column;
  border-radius: 0 !important;
}

.cards .card-image {
  width: 100%;
  height: 63%;
}

.cards img {
  width: 60%;

}
</style>
