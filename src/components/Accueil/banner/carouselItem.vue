<template>
  <transition :name="transitionEffect">
    <div class="carousel-item" v-show="currentSlide === index" @mouseenter="$emit('mouseenter')" @mouseout="$emit('mouseout')">
      <img :src="getImage(slide)" />
      <div class="Acc-texte">
          <h1>{{titre}}</h1>
          <p>{{ texte }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  emits: ["mouseenter", "mouseout"],
  props: ["slide", "currentSlide", "index", "direction", 'texte','titre'],
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

.Acc-texte{
  position: absolute;
  z-index: 1;
  top: 0;
  font-size: 50px;
  left: 0;
  width: calc(100% / 3);
  color: var(--noir);
  /* border: 1px solid red; */
  background-color: #b9bdc2d4;
  height: 100%;
  text-align: center;
  padding: 5px;
  text-align: left;
  
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
}
.carousel-item img{
  width: 100%;
  height: 100%;
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