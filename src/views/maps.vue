<template>
  <div>
    SimroMaps'
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SimroMaps',

  data() {
    return {
      
    };
  },

 async mounted() {
   const response = await axios.get('https://simro-kberthe.pythonanywhere.com/api/liste-dernier-prix-marche/')
   console.log('axios',response)
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>