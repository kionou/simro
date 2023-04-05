<template>
  <ScrollTopComponent>
    <button class="btns btn-light">
      <i class="fa-solid fa-arrow-up"></i>
    </button>
  </ScrollTopComponent>
</template>

<script>
import ScrollTopComponent from './top.vue'

export default {
  name: 'CptIcon',
  components: {
    ScrollTopComponent
  }
}
</script>
  
<style>
.btns {
  border-radius: 50%;
  background-color: #e62739;
  width: 50px;
  height: 50Px;
  box-shadow: 0px 0px 10px #8888884f;
  color: var(--blanc);
  cursor: pointer;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.btns i {
  font-size: 30px;
}
</style>