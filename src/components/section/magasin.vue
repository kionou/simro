<template>
    <div>
        <div class="container">
            <div class="magasin-content">
                <div class="texte">

                    <div class="select">
                        <input class="effect-6" type="text" placeholder="Magasin ou Region...">
                        <span class="focus-border"></span>
                    </div>
                    <div class="select" v-for="(magasin, index) in magasins" :key="index">
                        <div @click="toggleSelect(index)" class="button">
                            <span>Magasin {{ magasin.nom }}</span>
                            <span class="icon material-symbols-outlined " :class="magasin.show ? 'close' : ''">
                                <i class="fa-solid fa-chevron-down"></i>
                            </span>
                        </div>
                        <div :class="`select-block ${magasin.show ? 'open' : ''}`">
                            <div class="scroll">
                                <div class="content-header">
                                    <div class="content">
                                        <p>Region:</p>
                                        <span>{{ magasin.localite }}</span>
                                    </div>
                                    <div class="content">
                                        <p>Collecteur:</p>
                                        <span>{{ magasin.collecteur }}</span>
                                    </div>
                                    <div class="content">
                                        <p>Description:</p>
                                        <span>{{ magasin.description }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div class="maps">
                    <Maps :markers="magasins" />
                </div>


            </div>

        </div>

    </div>
</template>

<script>
import axiosClient from '@/axiosClient';
import Maps from '../other/maps.vue'
export default {
    name: 'CPtMagasin',
    components: {
        Maps
    },

    data() {
        return {
            show: false,
            magasins: ''
        };
    },



    async mounted() {
        await axiosClient.get('/simro/magasin')
        .then((response) => {
                console.log('response', response.data)
    this.magasins = response.data;
response.data.forEach(magasin => {
         magasin.show = false;
                    });

            });

   },

methods: {
    toggleSelect(index) {

        console.log(!this.magasins[index].show);
        this.magasins[index].show = !this.magasins[index].show;
    },
},
};
</script>

<style lang="css" scoped>
.magasin-content {
    max-width: var(--max-width);
    margin: 0 auto;

    display: flex;
    /* align-items: center; */
    justify-content: space-evenly;
    box-shadow: var(--box-shadow);
    justify-content: space-between;
    /* background-color: var(--vert); */

}

.magasin-content .texte {
    width: 98%;
    max-width: 290px;
    height: auto;
    /* display: flex; */
    flex-direction: column;
    justify-content: space-evenly;
    padding: 10px;
    /* background-color: var(--vert);
  color: var(--blanc); */

}

.magasin-content .texte .texte-content {
    /* display: flex; */
    justify-content: flex-start;
    padding: 10px;
    align-items: center;


}
@media (max-width: 768px) {
    .magasin-content {
        max-width: 600px;
        width: 90%;
        flex-direction: column;
       
    }

    .magasin-content .texte {
    width:100%;
    max-width:100% ;
    display: flex;
    align-items: center;
 
  

}
}
input[type="text"] {

    color: #333;
    width: 100%;
    padding: 12px 10px;
    border-radius: 50px;
    font-size: 14px;
    outline: 0;
    border: none;
    box-shadow: var(--shadow-small);
}

:focus {
    outline: none;
}




.maps {
    width: 100%;
    height: 450px;
    padding: 10px;
    background-color: var(--blanc);

}

iframe {
    width: 100%;
    height: 100%;
}






.select {
    text-align: left;
    width: 100%;
    position: relative;
    max-width: 500Px;
}

.select .button {
    position: relative;
    width: 100%;
    background-color: var(--blanc);
    padding: 15px 20px;
    font-size: 14px;
    color: #5f6368ff;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0px 0px 10px #8888884f;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    margin-top: 15px;

}

.select .select-block {
    width: 100%;
    position: relative;
    background-color: var(--blanc);
    opacity: 0;
    transition: all 0.3s;
    display: none;

}

.select .select-block .scroll {

    overflow-y: auto;
}

.select .select-block.open {

    display: block;
    opacity: 1;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;

}

.content-header {
    margin: 0;
    padding: 0 0 10px 10px;
}

.content-header .content {

    display: flex;
}

.content-header .content p {
    font-weight: bolder;
}

.content-header .content span {
    font-size: 14px;
    text-transform: lowercase;
    width: 100%;

}


.select .icon {
    position: absolute;
    right: 10px;
    top: 15px;
    transition: all 0.3s;
}

.select .icon.close {
    transform: rotate(180deg);
}
</style>