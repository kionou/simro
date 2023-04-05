<template>
    <div>
        <div class="card">
        <div class="image">
            <img src="@/assets/images/m2.png" alt="">
        </div>
        <span>Magasin du Centre</span>
       </div>
    </div>
</template>

<script>
export default {
    name: 'CardMagasin',

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
    .card{
    width: 230px;
    height: 180px;
    /* border: 1px solid red; */
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 15px;
    background-color: var(--blanc);
    box-shadow: var(--shadow-medium);
    border-radius: var(--raduis);

}

.image{
    width: 100%;
    height: auto;
    /* border: 1px solid blue; */
}

.image img{
    width: 100%;

}
</style>