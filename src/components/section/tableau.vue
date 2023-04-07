<template>
    <div class="container">
     <Loader v-if="isloading" :height="90" :width="90"></Loader>
        <div class="search_wrap search_wrap_5">
            <Select  @ClickItem="getClickItem" />
        </div>
        <main class="table">
            <div class="sidebar close ">
                <div class="titre">
                <h1>REGIONS</h1>
                </div>
                <ul class="nav-links">
                    <li @click="layout = 'nord'" :class="{ active: layout === 'nord' }">
                        <img src="@/assets/images/international.png" alt="">
                        <span class="link_name">Nord</span>
                    </li>

                    <li @click="layout = 'extreme_nord'" :class="{ active: layout === 'extreme_nord' }">
                        <img src="@/assets/images/international.png" alt="">
                        <span class="link_name">Extreme-Nord</span>
                    </li>
                    <li @click="layout = 'nord_ouest'" :class="{ active: layout === 'nord_ouest' }">
                        <img src="@/assets/images/international.png" alt="">
                        <span class="link_name">Nord-Ouest</span>
                    </li>

                    <li @click="layout = 'ouest'" :class="{ active: layout === 'ouest' }">
                        <img src="@/assets/images/international.png" alt="">
                        <span class="link_name">Ouest</span>
                    </li>
                    <li @click="layout = 'centre'" :class="{ active: layout === 'centre' }">
                        <img src="@/assets/images/international.png" alt="">
                        <span class="link_name">Centre</span>
                    </li> 
                   
                </ul>
            </div>
            <div class="two-section">
                <Riz v-if="layout === 'nord'" />
                <Oignon v-if="layout === 'extreme_nord'" />
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
            layout: 'nord',
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

<style lang="css" scoped>
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
    /* height: 370px; */
}

.sidebar.close .nav-links  {
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
    color: var(--blanc)
}

.sidebar .nav-links li:hover {
    background-color: var(--blanc);
    cursor: pointer;
    color: var(--vert);

}
.sidebar .nav-links li img {
    width: 30px;
    height: 30px;
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
@media (max-width: 880px) {
    li{
        margin: 0 !important;
    
    }

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
    .sidebar .titre{
    display: none;

}
}
</style>