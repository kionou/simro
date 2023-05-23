<template>
  <div v-if="slide && texte">
    <transition :name="transitionEffect">
    <div class="carousel-item" v-show="currentSlide === index" @mouseenter="$emit('mouseenter')" @mouseout="$emit('mouseout')" >
      <div class="image">
      <img :src="slide.image"  alt="slide"/>
      </div>
      <div class="Acc-texte">
       
<div class="tableau">
  <section class="table__header">
    <h1 >{{ $t('slide.sous_titre1')}} <span class="produits"> {{ $t('slide.nb')}}</span> {{ $t('slide.sous_titre2')}} <span class="produits"> {{ slide.nom_produit }} </span>  {{ $t('slide.sous_titre3')}} .</h1> 
          
        </section>
  <section class="table__body"  >
            <table>
                <thead>
                    <tr>
                        <th rowspan="2"> {{ $t('slide.region')}} </th>
                        <th colspan="3"> {{ $t('slide.prix')}}</th>
                        <th rowspan="2"> {{ $t('slide.marche')}} </th>
                        <th rowspan="2">{{ $t('slide.date')}} </th>
                    </tr>
                    <tr>
                        <th > Min </th>
                        <th>  Max </th>
                        <th> {{ $t('slide.moyen')}} </th>
                    </tr>
                </thead>
                <tbody>
   <tr v-for="(localite, index) in localites" :key="index">
  <td>{{ localite.nom_region}}</td>
  <td v-if="texte.some(item => item.region === localite.nom_region)">
    {{ texte.find(item => item.region === localite.nom_region).prix_min.toFixed(0) }}
  </td>
  <td v-else>-</td>
  <td v-if="texte.some(item => item.region === localite.nom_region)">
    {{ texte.find(item => item.region === localite.nom_region).prix_max.toFixed(0) }}
  </td>
  <td v-else>-</td>
  <td v-if="texte.some(item => item.region === localite.nom_region)">
    {{ texte.find(item => item.region === localite.nom_region).prix_moy.toFixed(0) }}
  </td>
  <td v-else>-</td>
  <td v-if="texte.some(item => item.region === localite.nom_region)">
    {{ texte.find(item => item.region === localite.nom_region).nb_marche }}
  </td>
  <td v-else>-</td>
  <td class="date" v-if="texte.some(item => item.region === localite.nom_region)">
    {{ texte.find(item => item.region === localite.nom_region).dernier_date }}
  </td>
  <td v-else>-</td>
</tr>
                </tbody>
            </table>
        </section>

       
</div>
            
     
          
      </div>
    </div>
   
  </transition>
  </div>

 
</template>

<script>

export default {
  emits: ["mouseenter", "mouseout"],
  props: ["slide", "currentSlide", "index", "direction", 'texte','localites'],
  data() {
    return {
      
    };
  },
  methods:{
    getImage(path){
      try{
        return this.slide.startsWith('http') ? this.slide : require('@/assets/' + path)
      } catch(e){
        // return require('@/assets/naniens/no.png')
      }
    }
  },
  computed: {
    transitionEffect() {
      return this.direction === "right" ? "slide-out" : "slide-in";
    },
  
  },


};
</script>

<style scoped>
.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-color: var(--blanc);

}

.Acc-texte{
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 67% ;
  color: var(--noir);
  height: 100%;
  text-align: center;
  padding: 5px;
  text-align: left;
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    /* border: 1px solid red; */
  
}
.tableau{
/* border: 1px solid blue; */
width: 100%;
/* height:270px; */
  box-shadow: var( --shadow-small);
background-color: var(--blanc);

}

.table__body{

max-height: none;
margin: 0.5rem auto;
max-height: calc(100% - 2.6rem);
}
.table__header {

padding:10px 5px 0;

}
.table__header h1 {
    font-size: 12px;
}
thead th{
  padding: 6px;
  border: 1px solid;
}
table, th, td {
    padding: 7px;

}

.carousel-item .image{
  position: absolute;
    top: 50%;
    right: -16%;
    transform: translate(-50%, -50%);
    width: 32%;
    height: 88%;
    /* border: 1px solid red; */
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;


}
.image img{
    width: 255px;
    border:5px solid hsla(240,7%,97%,1);
    /* border: 1px solid blue; */
    height:230px ;
  /* box-shadow: var( --shadow-small); */

    /* object-fit: cover; */
    /* filter: brightness(50%); */
    
  
}
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 1s ease-in-out;
}
.slide-in-enter-from {
  transform: translateX(-100%);
}
.slide-in-leave-to {
  transform: translateX(100%);
}
.slide-out-enter-from {
  transform: translateX(100%);
}
.slide-out-leave-to {
  transform: translateX(-100%);
}

@media (max-width: 1000px) {
    td:not(:first-of-type) {
        min-width: 7rem;
    }
}

@media (max-width: 960px) {
    td:not(:first-of-type) {
        min-width: 4rem;
    }
}

@media (max-width: 800px) {
  .carousel-item .image{
display: none;
  
  }
  .Acc-texte{
  
  width: 100%;
  }
}

@media (max-width: 600px) {
  td:not(:first-of-type) {
        min-width: 0rem;
    }
}
</style>