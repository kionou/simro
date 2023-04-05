<template>
    <div class="general_loader">
        <div class="pixel-spinner" :style="{
        width: width + 'px',
        height: height + 'px',
        background: bg
    }">
       <div class="pixel-spinner-inner"></div>
</div>
    </div>
</template>

<script>
export default {
    name: 'CpLoader',
    props: ['width', 'height', 'bg'],

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

    .general_loader{
    width: 100%;
    height: 125%;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    background-color: #00000038;
    left: 0;
    top: -96px;
    bottom: 27px;
    right: 0;
    }
    .pixel-spinner {
    margin: 10px auto;
    display: flex;
    width: max-content;
   /* background-color:rgb(0 0 0 / 6%) ;  */
    justify-content: center;
    align-items: center;
  
    }

    .pixel-spinner .pixel-spinner-inner {
      width: calc(70px / 7);
      height: calc(70px / 7);
      background-color: var(--vert);
      color: var(--vert);
      box-shadow: 15px 15px  0 0,
                  -15px -15px  0 0,
                  15px -15px  0 0,
                  -15px 15px  0 0,
                  0 15px  0 0,
                  15px 0  0 0,
                  -15px 0  0 0,
                  0 -15px 0 0;
      animation: pixel-spinner-animation 2000ms linear infinite;
    }

    @keyframes pixel-spinner-animation {
      50% {
        box-shadow: 20px 20px 0px 0px,
                    -20px -20px 0px 0px,
                    20px -20px 0px 0px,
                    -20px 20px 0px 0px,
                    0px 10px 0px 0px,
                    10px 0px 0px 0px,
                    -10px 0px 0px 0px,
                    0px -10px 0px 0px;
      }
      75% {
        box-shadow: 20px 20px 0px 0px,
                    -20px -20px 0px 0px,
                    20px -20px 0px 0px,
                    -20px 20px 0px 0px,
                    0px 10px 0px 0px,
                    10px 0px 0px 0px,
                    -10px 0px 0px 0px,
                    0px -10px 0px 0px;
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @media (min-width: 1000px) {
    
    .general_loader{
  height: 129%;
 
  }
  }

   
</style>