<template>
    
    <VueAIcarousel :Property="{ID: 'Two', Dlay:1000}">
      <Card :partenaires="partenaires"/>     
    </VueAIcarousel>
    
  
</template>

<script>
import Card from "./cardPartenaire.vue";
import VueAIcarousel from "vue-ai-carousel"
export default ({
  name: 'CptSlide',
  components: {
    VueAIcarousel, Card
  },
  data() {
    return {
      partenaires:''
      
    }
  },
  mounted() {
    const response = require('@/lib/partenaire.json')
    this.partenaires = response
  },
});
</script>
<style >
.Slider_Button , .PeVNCommon {
    display: none !important;
}
</style>

<style   >
.cards .image{
  width:150px !important ;
  height: 150px !important;
  background-color: var(--blanc) !important;
}
.cards img{
  width:100% ;
  height: auto;
}
.lC3oC2kE3bD2fB1jC2qB4eF1v div {
    width: 290px !important;
    height: 180px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px !important;
    font-weight: 600;
    background-color:transparent !important;
    color: var(--noir) !important;
    position: relative;
    z-index: 1;
    margin: 5px;
    flex-direction: column;
    padding: 10px;
    border-radius: 0 !important;
}


</style>