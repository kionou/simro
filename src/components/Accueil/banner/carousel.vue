<template>
  <div class="carousel" ref="crsl">
    <div class="carousel-inner">
      <carousel-indicators v-if="indicators" :total="slides.length" :current-index="currentSlide" @switch="switchSlide($event)"></carousel-indicators>
      <carousel-item v-for="(slide, index) in slides" :slide="slide" :key="`item-${index}`" :current-slide="currentSlide" :index="index" :direction="direction"
       :texte="textes[index]" :localites="titres" @mouseenter="stopSlideTimer" @mouseout="startSlideTimer" ></carousel-item>
      <carousel-controls v-if="controls" @prev="prev" @next="next"></carousel-controls>
    </div>
  </div>
</template>

<script>
import CarouselItem from "@/components/Accueil/banner/carouselItem.vue";
import CarouselControls from "@/components/Accueil/banner/carouselControls.vue";
import CarouselIndicators from "@/components/Accueil/banner/carouselIndicators.vue";
export default {
  name:"CptCarousel",
  props: {
     
    slides: {
      type: Array,
      required: true,
    },
    controls: {
      type: Boolean,
      default: false,
    },
    indicators: {
      type: Boolean,
      default: false,
    },
    interval: {
      type: Number,
      default: 9999999999000,
    },
    textes: {
      type: Array,
      required: false
    },
    titres: {
      type: Array,
      required: false
    }
  },
  components: { CarouselItem, CarouselControls, CarouselIndicators },
  data: () => ({
    currentSlide: 0,
    slideInterval: null,
    direction: "right",
  }),
  methods: {
    setCurrentSlide(index) {
      this.currentSlide = index;
    },
    prev(step = -1) {
      const index =
        this.currentSlide > 0
          ? this.currentSlide + step
          : this.slides.length - 1;
      this.setCurrentSlide(index);
      this.direction = "left";
      this.startSlideTimer();
    },
    _next(step = 1) {
      const index =
        this.currentSlide < this.slides.length - 1
          ? this.currentSlide + step
          : 0;
      this.setCurrentSlide(index);
      this.direction = "right";
    },
    next(step = 1) {
      this._next(step);
      this.startSlideTimer();
    },
    startSlideTimer() {
      this.stopSlideTimer();
      this.slideInterval = setInterval(() => {
        this._next();
      }, this.interval);
    },
    stopSlideTimer() {
      clearInterval(this.slideInterval);
    },
    switchSlide(index) {
      const step = index - this.currentSlide;
      if (step > 0) {
        this.next(step);
      } else {
        this.prev(step);
      }
    },
  },
  mounted() {
    
    this.startSlideTimer();
    const control = (value=1)=>{
      Array.from(document.getElementsByClassName("carousel-control"))
      .map(c=> c.style.opacity = value)
    }
    window.addEventListener("DOMContentLoaded", ()=>{
      this.$refs.crsl?.addEventListener("mouseover", ()=>{
        control(1)
        this.stopSlideTimer()
      })
      this.$refs.crsl?.addEventListener("mouseout", ()=>{
        this.startSlideTimer()
        control(0)
      })
    })
  },
  beforeUnmount() {
    this.stopSlideTimer();
  },
};
</script>
<style scoped>
.carousel {
  display: flex;
  justify-content: center;
  padding:  10px;
  /* background-color: var(--blanc); */
}
.carousel-inner {
  position: relative;
  width: var(--max-width);
  height: 100%;
  overflow: hidden;
}
</style>