<template>
  <transition :name="transitionEffect">
    <div class="carousel-item" v-show="currentSlide === index" @mouseenter="$emit('mouseenter')" @mouseout="$emit('mouseout')" >
      <div class="image">
      <img :src="getImage(slide)" />
      </div>
      <div class="Acc-texte">
        <p>Le prix moyen dans chaque region</p>
        <div class="card">
          <div class="titre">
            <p>Gamme de BULBLE</p>
          </div>
          <ul>
            <li>
              <span>Ouest</span>
              <div style="font-weight:bold;paddin-right:10px;">100</div>
            </li>
            <li>
              <span>Extreme-Nord</span>
              <div style="font-weight:bold;paddin-right:10px;">100</div>
            </li>
            <li>
              <span>Nord-Ouest</span>
              <div style="font-weight:bold;paddin-right:10px;">100</div>
            </li>
            <li>
              <span>Nord</span>
              <div style="font-weight:bold;paddin-right:10px;">100</div>
            </li>
            <li>
              <span>Centre</span>
              <div style="font-weight:bold;paddin-right:10px;">100</div>
            </li>
          </ul>
          <!-- <h1>{{titre}}</h1>
          <p>{{ texte }}</p> -->
        </div>
          
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  emits: ["mouseenter", "mouseout"],
  props: ["slide", "currentSlide", "index", "direction", 'texte','titre'],
  data() {
    return {
      property: 'value',
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
  }

};
</script>

<style scoped>

.Acc-texte{
  position: absolute;
  z-index: 1;
  top: 0;
  /* font-size: 50px; */
  left: 0;
  width: calc(100% / 2);
  color: var(--noir);
  /* border: 1px solid red; */
  /* background-color: #b9bdc2d4; */
  height: 100%;
  text-align: center;
  padding: 5px;
  text-align: left;
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  
}
.Acc-texte .card{
  /* border: 1px solid red; */
  width: 95%;
  /* height: 95%; */
  padding: 10px;
  background-color: var(--blanc);
  box-shadow: var( --shadow-small);
}

.card .titre{
  border: 1px solid blue;
  text-align: center;
    padding: 6px;
    margin-bottom: 10px;
  

}

ul{
  list-style: none;
  vertical-align: top;
}
ul li{
  text-align: right;
    width: 100%;
    overflow: hidden;
    vertical-align: top;
    /* border-bottom: 1px solid #dfdfdf; */
    padding: 0 0 6px 5px;
    margin: 0 0 6px -5px;
}

ul li span{
  float: left;
}
.Acc-texte h1{
  font-size: 50px;
}
.Acc-texte p{
  font-size: 25px;
}

.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: AAE0CE;
}

.carousel-item .image{
  position: absolute;
    top: 50%;
    right: -16%;
    transform: translate(-50%, -50%);
    width: 33%;
    height: 96%;
    /* border: 1px solid red; */
    padding: 10px;
    display: flex;
    align-items: center;

}
.image img{
    width: 100%;
    /* height: 100%; */
    -o-object-fit: cover;
    object-fit: cover;
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

@media (max-width:768px) {
  .Acc-texte{
    left: 0;
    width: 100%;
    z-index: 9;
    bottom: 0;
    height: 27%;
    top: auto;
  }
  .Acc-texte h1{
  font-size: 20px;
}
.Acc-texte p{
  font-size: 15px;
}
}
</style>