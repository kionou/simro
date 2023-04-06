<template>
    <div class="container">
     <Loader v-if="isloading" :height="90" :width="90"></Loader>
        <div class="search_wrap search_wrap_5">
            <Select  @ClickItem="getClickItem" />
        </div>
        <main class="table">
            <div class="sidebar close ">
                <div class="titre">
                <h1>Familles</h1>
                </div>
                <ul class="nav-links">
                    <li @click="layout = 'semence_riz'" :class="{ active: layout === 'semence_riz' }">
                        <img src="@/assets/images/riz3.png" alt="">
                        <span class="link_name">Semence de Riz</span>
                    </li>

                    <li @click="layout = 'riz_paddy'" :class="{ active: layout === 'riz_paddy' }">
                        <img src="@/assets/images/riz3.png" alt="">
                        <span class="link_name">Riz Paddy</span>
                    </li>
                    <li @click="layout = 'riz_blanchi'" :class="{ active: layout === 'riz_blanchi' }">
                        <img src="@/assets/images/riz3.png" alt="">
                        <span class="link_name">Riz Blanchi</span>
                    </li>

                    <li @click="layout = 'riz_etuve'" :class="{ active: layout === 'riz_etuve' }">
                        <img src="@/assets/images/riz3.png" alt="">
                        <span class="link_name">riz étuvé</span>
                    </li>
                    <li @click="layout = 'farine_riz'" :class="{ active: layout === 'farine_riz' }">
                        <img src="@/assets/images/riz3.png" alt="">
                        <span class="link_name">Farine de Riz</span>
                    </li>
                    <li @click="layout = 'semence_graine'" :class="{ active: layout === 'semence_graine' }">
                        <img src="@/assets/images/icon3.png" alt="">
                        <span class="link_name">Semence Graine</span>
                    </li>

                    <li @click="layout = 'semence_bulbe'" :class="{ active: layout === 'semence_bulbe' }">
                        <img src="@/assets/images/icon3.png" alt="">
                        <span class="link_name">Semence Bulbe</span>
                    </li>
                    <li @click="layout = 'oignon_bulbe'" :class="{ active: layout === 'oignon_bulbe' }">
                        <img src="@/assets/images/icon3.png" alt="">
                        <span class="link_name">Oignon Bulbe</span>
                    </li>
                    <li @click="layout = 'poudre_oignon'" :class="{ active: layout === 'poudre_oignon' }">
                        <img src="@/assets/images/icon3.png" alt="">
                        <span class="link_name">Poudre d'Oignon</span>
                    </li>
                    <li @click="layout = 'lamelle'" :class="{ active: layout === 'lamelle' }">
                        <img src="@/assets/images/icon3.png" alt="">
                        <span class="link_name">Echalote(oignon local)</span>
                    </li>

                    <li @click="layout = 'jus'" :class="{ active: layout === 'Jus' }">
                        <img src="@/assets/images/icon3.png" alt="">
                        <span class="link_name">Jus d'Oignon</span>
                    </li>


                  
                   
                </ul>
            </div>
            <div class="two-section">
                <Riz v-if="layout === 'semence_riz'" />
                <Oignon v-if="layout === 'riz_paddy'" />
            </div>
        </main>
    </div>
</template>

<script>
import Select from '../other/select.vue';
import Oignon from '../other/cptOignon.vue';
import Riz from '../other/cptRiz.vue';
import Loader from '../other/loader.vue';
export default {
    name: 'CptTableau',
    components: { Select, Oignon, Riz , Loader },

    data() {
        return {
            layout: 'semence_riz',
            search: '',
            active: true,
            isloading:false,
            ClickItem:''
        };
    },

    mounted() {
        // let sidebar = document.querySelector(".sidebar");
        // if (window.screen.width <= 700) {
        //     sidebar.classList.toggle("close");
        // }

    },

    methods: {
        rech() {
            console.log('onjour');
            this.rechdisplay = !this.rechdisplay
        },
        getClickItem(value){
        console.log(this.ClickItem = value);
        
            // this.isloading = true
        }
    },
};
</script>

<style lang="css" >
.container {
    margin: 0 auto;
    padding: 10px;
    position: relative;
}

.search_wrap {
    max-width: 500px;
    width: 100%;
    margin: 15px auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    padding: 0 10px;
}

main.table {
    box-shadow: 0px 0px 10px #8888884f;
    overflow: hidden;
    position: relative;
}

.sidebar {

    width: 180px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: var(--vert);
    transition: all 0.5s ease;
    margin-right: 10px;
    position: absolute;
    z-index: 100;
}
.sidebar .titre{
width: 100%;
    text-align: center;
    color: var(--blanc);
    padding: 10px;

}


.two-section {
    position: relative;
    height: 418px;
    left: 180px;
    width: calc(100% - 180px);
    position: relative;
}

.sidebar .nav-links {
    overflow: auto !important;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 370px;
}

.sidebar.close .nav-links {
    overflow: visible;
}

.sidebar .nav-links::-webkit-scrollbar{
    width: 0.5rem;
    height: 0.5rem;
}

.sidebar .nav-links::-webkit-scrollbar-thumb{
    border-radius: .5rem;
    background-color: hsl(162.17deg 89.52% 62.43% / 52%);
    visibility: hidden;

}

.sidebar .nav-links:hover::-webkit-scrollbar-thumb{ 
    visibility: visible;
}

.sidebar .nav-links li {
    position: relative;
    list-style: none;
    transition: all 0.4s ease;
    cursor: pointer;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--blanc);
    /* padding-right: 5px; */
}

.sidebar .nav-links li:hover {
    background-color: var(--blanc);
    cursor: pointer;
    color: var(--vert);

}
.sidebar .nav-links li img {
    width: 37px;
    height: 37px;
    padding: 5px;
}

.sidebar .nav-links li .link_name {
    font-size: 13px;
    font-weight: 400;
    width: 100%;
}

.sidebar .nav-links li.active {
    background-color: hsl(162.17deg 89.52% 62.43% / 52%);
    color: var(--blanc);
}

@media (max-width: 768px) {
    .sidebar.close {
        width: 40px;
    }

    .sidebar.close~.two-section {
        left: 40px;
        width: calc(100% - 40px);
    }

    .sidebar.close .nav-links li .link_name {
        opacity: 0;
        pointer-events: none;
    }
}
</style>