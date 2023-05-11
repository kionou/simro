<template>
  <div class="container-fluid">
    <!-- section carousel debut -->
    <!-- <section class="slide">
      <div class="slide-content">
        <Slide />
      </div>
    </section> -->
    <!-- section description debut -->
    <section class="description" id="about">
      <Description />
    </section>

    <!-- section tableau debut -->
    <section class="tableau" id="stock">
      <h2>{{ $t('prix.titre')}}</h2>
      <Tableau />
    </section>
    <!-- section magasin debut -->
    <section class="magasin" id="magasin">
      <h2>{{ $t('magasin.titre')}}</h2>
      <Magasin />
    </section>
    
    <!-- section partenaire debut -->
    <section class="partenaire" id="partenaire">
      <Partenaire />
    </section>

    <!-- section contact debut  -->
    <section class="contact" id="contact">
      <Contact />
    </section>

  </div>
</template>

<script>
// import Slide from './section/slide1.vue';
import Contact from './section/contact.vue';
import Description from './section/description.vue';
import Magasin from './section/magasin.vue';
import Tableau from './section/tableau.vue';
import Partenaire from './section/partenaire.vue';

export default {
  name: 'CptCorps',
  components: {  Description, Magasin, Partenaire, Tableau, Contact, },

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
.container-fluid {
  max-width: 100%;
  height: auto;
  position: relative;

}

/* slide debut */
.slide {
  width: 100%;
  /* background-color: var(--vert); */
  padding: 10px;

}

.slide-content {
  max-width: var(--max-width);
  margin: 0 auto;
  padding-bottom: 6px;
}

/* description debut */
.description {
  width: 100%;
  height: auto;
  background-color: var(--blanc);
  padding-bottom: 30px;

}

/* magasin debut */
.magasin {
  width: 100%;
  height: auto;
  padding: 20px 10px;
  background-color: var(--blanc); 
   
}

.magasin h2 {
  text-align: center;
  padding: 20px;
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
  text-transform: uppercase;
  color: var(--vert);
}

/* tableau debut */
.tableau {
  width: 100%;
  height: auto;
  padding: 20px 0;
  color: var(--vert);
}

.tableau h2 {
  text-align: center;
  padding: 20px;
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
  text-transform: uppercase;
  color: var(--vert);
}

/* partenaire debut */
.partenaire {
  width: 100%;
  height: auto;
  padding: 20px 0;
  background-color: var(--vert);

}

/* contact debut */
.contact {
  width: 100%;
  height: auto;
  background-color: var(--blanc);
  padding: 0 10px 40px;
}
</style>