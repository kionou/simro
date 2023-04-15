<template>
  <div>
    <Header :slides="slides" :textes="textes" :titres="titres" :height="60" />
    <Corps />
    <Top />
     <!-- $store.getters.getregion[0].nom_region  -->
  </div>
</template>

<script>
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
      slides: [
        "images/bg1.jpg",
        "images/bg2.jpg",
        "images/bg3.jpg",
        "images/bg5.jpg",
        "images/bg4.jpg",

      ],
      textes: [
        `Lorem ipsum dolor sit amet consectetur adipisicing.`,
        'texte2',
        'texte3',
        'texte4',
        'texte5',
      ],
      titres: [
        'Titre1',
        'Titre2',
        'Titre3',
        'Titre4',
        'Titre5',
      ]
    };
  },

  mounted() {

  },


  methods: {

  },
};
</script>

<style lang="css" scoped></style>