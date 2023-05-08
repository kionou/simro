<!-- <template>
    <div class="general_loader" :class="{ 'hidden': !isloading }">
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
          isloading: false,
            
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
    height: 100%;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    background-color: #00000038;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    }
.general_loader.hidden {
  animation-name: loader;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  }
  @keyframes loader {
  0% {
    opacity: 1;
    transform: translate(0, 0);
  }
  100% {
    opacity: 0;
    transform: translate(100%, 100%);
  }
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

   
</style> -->
<template>
  <div class="loader-container">
    <div class="loader-circle"></div>
  </div>
</template>
<script>
export default {
name:'CptZ'


}

</script>

<style>
  .loader-container {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    opacity: 1;
  transition: opacity 0.5s ease-in-out;
  }

  .loader-circle {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 5px solid #fff;
    border-top-color: transparent;
    animation: spin 1s ease-in-out infinite;
  }

  .loader-container.leave {
  opacity: 0;
}

.loader-container.leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  transform: translateY(-100%);
}



  @keyframes spin {
    to { transform: rotate(360deg); }
  }
</style>
