<template>
    <div>
        <div class="container">
            <div class="maps">
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1H-947mLzNVKwthcdPGj6DVA5q2fqMfQ&ehbc=2E312F" width="640" height="480"></iframe>
            </div>
            
        </div>
      
    </div>
</template>

<script>

export default {
    name: 'CPtMagasin',
    components:{
       
    },

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
.container{
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 !important;
  

}
.maps{
width: 100%;
height: 450px;
padding: 10px;
background-color: var(--blanc);

}
iframe{
  width: 100%;
    height: 100%;
    border: none;
}


</style>