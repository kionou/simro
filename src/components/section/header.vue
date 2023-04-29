<template>
    <div>
        <Carousel :slides="slides" :interval="5000" :textes="textes" :titres="titres" indicators class="carou" 
         />
    </div>
</template>

<script>
import Carousel from '@/components/Accueil/banner/carousel.vue'

export default {
    name: 'HeaderComponent',
    props: ['slides', 'textes', 'titres', 'height'],
    components: {
        Carousel
    },
    methods: {

    },

}
</script>

<style>
.Acc-headd {
    z-index: 998;
  
}

.carou {
    object-fit: cover;
    height: 48vh;
    border: 1px solid red;
}
</style>