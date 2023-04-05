<template>
  <div>
    <div class="partenaire-content">
      <h2>Nos Partenaires</h2>
      <p>Ils nous accompagnemt</p>
      <SlidePartenaire />
    </div>
  </div>
</template>

<script>
import SlidePartenaire from '../other/slidePartenaire.vue';
export default {
  name: 'CptPartenaire',
  components: {
    SlidePartenaire
  },

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style lang="css" scoped>
.partenaire-content {
  max-width: var(--max-width);
  margin: 0 auto;
  height: auto;
  color: var(--blanc);
  padding-bottom: 20px;

}
.partenaire-content h2 {
  text-align: center;
  padding: 20px;
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
  text-transform: uppercase;
}
.partenaire-content p {
  padding: 10px;
  text-align: center;

}
</style>