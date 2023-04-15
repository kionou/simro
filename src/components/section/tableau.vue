<template>
    <div class="container">
     <Loader v-if="isloading" :height="90" :width="90"></Loader>
        <div class="search_wrap search_wrap_5">
            <Select  @ClickItem="getClickItem" />
        </div>
        <main class="table">
          

            <div class="sidebar close ">
                <div class="sidebar_content">
                    <div class="titre">
                <h1>REGIONS</h1>
                </div>
                <ul class="nav-links" >
                <li v-for="region in regions" :key='region.code_region' @click="makeActive(region)" :class="region.nom_region === selected.nom_region ? 'active' : ''">
                    <img src="@/assets/images/international.png" alt="">
                        <span class="link_name">{{region.nom_region}}</span>
                </li>

                </ul>
                </div>
               
            </div>
            <div class="two-section">
                <Riz :marches="marches" />
                <!-- <Oignon  /> -->
               
            </div>
        </main>
    </div>
</template>

<script>
// import { computed  } from 'vue';
// import store from '@/store'
import axiosClient from '@/axiosClient';
import Select from '../other/select.vue';
// import Oignon from '../other/cptOignon.vue';
import Riz from '../other/cptRiz.vue';
import Loader from '../other/loader.vue';
export default {
    name: 'CptTableau',
    components: { Select,  Riz , Loader },

    data() {
        return {
 
            search: '',
            isloading:false,
            ClickItem:'',
              regions:'',
              initial:'',
              marches:[],
            selected: {},

        };
    },
    computed:{

    //   regions() {
    //     if (this.selected.nom_region != this.$store.getters.getregion[0]?.nom_region) {
      
    //     console.log('bonsoir');
        
    // }
    //      console.log(this.$store.getters.getregion[0]?.nom_region);
    //      return this.$store.getters.getregion;
    // },
   // this.regions = this.$store.getters.getregion[0]?.nom_region
    // console.log(this.regions);

//    this.regions =  computed(() => {
//     if (this.selected.nom_region != this.$store.getters.getregion[0]?.nom_region) {
//         this.selected.nom_region = this.$store.getters.getregion[0]?.nom_region
//         console.log('bonsoir');
        
//     }
    
//       console.log(this.selected.nom_region);

//       return store.getters.getregion;
//     });

//     this.$store.dispatch('simroAll')
  
    //  this.selected.value = this.items[0].value

    },
   

    mounted() {
        this.$store.dispatch('simroAll')
        axiosClient
      .get('/simro')
      .then((response)=>{
        this.regions = response.data.region
        this.selected.nom_region = response.data.region[0].nom_region
        this.initial = response.data.region[0].nom_region
        const marche = response.data.marche
      

        let filteredMarche = [];
       for (let i= 0; i<marche.length; i++) {

        if (marche[i].region === 'NORD-OUEST' ) {

        filteredMarche = [...filteredMarche, marche[i]];
    }
}
    this.marches = filteredMarche
    
//     console.log(filteredMarche);
// console.log(this.marches);

    })
  

    },

    methods: {
        rech() {
            console.log('onjour');
            this.rechdisplay = !this.rechdisplay
        },
        getClickItem(value){
        console.log(this.ClickItem = value);
        
            // this.isloading = true
        },
        makeActive: function(value) {
          this.selected.nom_region = value.nom_region;
          const sel = JSON.parse(JSON.stringify(this.$store.getters.getmarche));

          let filteredMarche = [];
       for (let i= 0; i<sel.length; i++) {

        if (sel[i].region === value.nom_region ) {

        filteredMarche = [...filteredMarche, sel[i]];
    }
    console.log(filteredMarche);
    this.marches = filteredMarche
}

             
          console.log(this.selected.nom_region , value.nom_region , this.$store.getters.getmarche);

  

    },
    },
};
</script>

<style lang="css" scoped>

.container {
    margin: 0 auto;
    padding: 10px 10px 25px;
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
    /* padding-bottom: 12px; */
}

.sidebar {

    width: 180px;
    height: 100%;
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
    opacity: 1;
}

.sidebar .sidebar_content{

/* border: 1px solid red; */
width: 100%;
height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.two-section {
    position: relative;
    /* height: 418px; */
    left: 180px;
    width: calc(100% - 180px);
    position: relative;
}

.sidebar .nav-links {
    /* overflow: auto !important; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* height: 370px; */
}

/* .sidebar.close .nav-links  {
    overflow: visible;

} */

/* .sidebar .nav-links::-webkit-scrollbar{
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
} */

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
    margin-bottom:3px
}
.sidebar .titre .act{
        opacity: 1 !important;
        pointer-events: none;


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
    .sidebar.close .titre{
        opacity: 0;
        pointer-events: none;

}



}

</style>