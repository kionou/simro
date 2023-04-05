<template>
    <i class="fa-solid fa-arrow-right" @click="$emit('next')"></i>
    <i class="fa-solid fa-arrow-left"  @click="$emit('prev')"></i>
  </template>
  
  <script>
  export default {
    emits: ["prev", "next"],
  }
  </script>
  <style scoped>
  .carousel-control {
    opacity: 0;
    padding: 1rem;
    font-size: 25px;
    border: none;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    top: calc(50% - 25px);
    color: var(--bg);
    background: var(--blanc);
    cursor: pointer;
  }
 .fa-solid{
    position: absolute;
    font-weight: 900;
    font-size: 40px;
    color: var(--blanc);
    top: 40%;
    background-color: var(--bg);

    background-color:   #13151b72;
    margin:  0 40px;
    border-radius: 50%;
    padding: 10px;

 }
 .fa-arrow-right{
    right: 0;
 }
 .fa-arrow-left{
    left: 0;
 }
 @media (max-width:768px){
    .fa-solid{
        font-size: 20px;
        margin:  0 20px;
    }

 }
  </style>