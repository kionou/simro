<template>
    <div class="container">
        <div class="search_wrap search_wrap_5">
            <Select @ClickItem="getClickItem" :items="items" />
        </div>
        <main class="table">
            <div class="alert" v-if="alert">
                {{ alert }}
            </div>
            <div v-else>
                <div class="sidebar close ">
                    <div class="sidebar_content">
                        <div class="titre">
                            <h1>{{ $t('prix.region') }}</h1>
                        </div>
                        <ul class="nav-links">
                            <li v-for="region in regions" :key='region.code_region' @click="makeActive(region)"
                                :class="region.nom_region === selected.nom_region ? 'active' : ''">
                                <img src="@/assets/images/international.png" alt="international">
                                <span class="link_name">{{ region.nom_region }}</span>
                            </li>

                        </ul>
                    </div>

                </div>
                <div class="two-section">
                    <Produits :prix="prix" :produits="produits" :alertRegion="alertRegion" :selected="selected" />
                </div>
            </div>
        </main>
    </div>
</template>

<script>


import axiosClient from '@/axiosClient';
import axios from 'axios';
import Select from '../other/select.vue';
import Produits from '../other/cptProduit.vue';
export default {
    name: 'CptTableau',
    components: { Select, Produits },

    data() {
        return {

            search: '',
            isloading: false,
            ClickItem: '',
            regions: '',
            initial: '',
            prix: [],
            selected: {},
            items: [],
            produits: [],
            initialProduit: '',
            alert: '',
            alertRegion: '',
            produit:'',

        };
    },
    computed: {},
    async mounted() {
        let endpoints = [
            '/produit/',
            '/gamme/',
            '/prix/',
            '/region/',
        ];

        try {
            this.$store.dispatch('simroAll')
            const [produits, gamme, prixAll, region] = await axios.all(endpoints.map((endpoint) => axiosClient.get(endpoint)));
            this.items = gamme.data
            this.initialProduit = gamme.data[0].nom_famille_produit
            const produit = produits.data
            this.ClickItem = this.initialProduit
            let filteredProduit = [];
            for (let i = 0; i < produit.length; i++) {

                if (produit[i].famille_produit === this.initialProduit) {

                    filteredProduit = [...filteredProduit, produit[i]];
                }
            }
            if (filteredProduit.length === 0) {
                this.alert = this.$t('prix.msg_produit')
            } else {
                this.produits = filteredProduit
                this.alert = false
            }

            this.regions = region.data
            this.selected.nom_region = region.data[0].nom_region
            this.initial = region.data[0].nom_region
            const prix = prixAll.data

            let filteredMarchePrix = [];
            for (let i = 0; i < prix.length; i++) {

                if (prix[i].famille_produit === this.initialProduit && prix[i].region === this.initial) {

                    filteredMarchePrix = [...filteredMarchePrix, prix[i]];
                }
            }
            const regroupedData = filteredMarchePrix.reduce((acc, curr) => {
                const { marche, produit, prix_kg, date_enquete, region } = curr;
                if (!acc[marche]) {
                    acc[marche] = { marche, produits: [{ produit, prix_kg, date_enquete, region }] };
                } else {
                    acc[marche].produits.push({ produit, prix_kg, date_enquete, region });
                }
                return acc;
            }, {});

            const uniqueData = [];
            Object.values(regroupedData).forEach(({ marche, produits }) => {
                const existingIndex = uniqueData.findIndex((el) => el.marche === marche);
                if (existingIndex === -1) {
                    uniqueData.push({ marche, produits });
                } else {
                    uniqueData[existingIndex].produits.push(...produits);
                }
            });

            if (uniqueData.length === 0) {
                this.alertRegion = this.$t('prix.msg_marche')
            } else {
                this.prix = uniqueData
                this.alertRegion = false

            }
        } catch (error) {
            console.error(error);
        }

    },

    methods: {
        getClickItem(value) { 
            console.log('valueeee',value)
            this.ClickItem = value
            const sel = JSON.parse(JSON.stringify(this.$store.getters.getproduit));

            let filteredProduit = [];
            for (let i = 0; i < sel.length; i++) {
                if (sel[i].famille_produit === value) {
                    filteredProduit = [...filteredProduit, sel[i]];
                }
            }

            if (filteredProduit.length === 0) {
                this.alert = this.$t('prix.msg_produit')

            } else {
                let selle = JSON.parse(JSON.stringify(filteredProduit));
                this.produits = selle
                this.alert = false

            }
            const prix = JSON.parse(JSON.stringify(this.$store.getters.getprix));


            let filteredMarchePrix = [];
            for (let i = 0; i < prix.length; i++) {
                if (prix[i].famille_produit === value && prix[i].region === this.selected.nom_region) {

                    filteredMarchePrix = [...filteredMarchePrix, prix[i]];
                }
            }
            const regroupedData = filteredMarchePrix.reduce((acc, curr) => {
                const { marche, produit, prix_kg, date_enquete, region } = curr;
                if (!acc[marche]) {
                    acc[marche] = { marche, produits: [{ produit, prix_kg, date_enquete, region }] };
                } else {
                    acc[marche].produits.push({ produit, prix_kg, date_enquete, region });
                }
                return acc;
            }, {});

            const uniqueData = [];
            Object.values(regroupedData).forEach(({ marche, produits }) => {
                const existingIndex = uniqueData.findIndex((el) => el.marche === marche);
                if (existingIndex === -1) {
                    uniqueData.push({ marche, produits });
                } else {
                    uniqueData[existingIndex].produits.push(...produits);
                }
            });

            if (uniqueData.length === 0) {
                this.alertRegion = this.$t('prix.msg_marche')
            } else {
                this.prix = uniqueData
                this.alertRegion = false

            }
        },


        makeActive: function (value) {
            this.selected.nom_region = value.nom_region;
            const prix = JSON.parse(JSON.stringify(this.$store.getters.getprix));
            console.log('prixxxxx',prix)            
            console.log('this.produit',this.ClickItem)            

            let filteredMarchePrix = [];
            for (let i = 0; i < prix.length; i++) {
                if (prix[i].famille_produit === (this.ClickItem) && prix[i].region === this.selected.nom_region) {

                    filteredMarchePrix = [...filteredMarchePrix, prix[i]];
                }
            }

            const regroupedData = filteredMarchePrix.reduce((acc, curr) => {
                const { marche, produit, prix_kg, date_enquete, region } = curr;
                if (!acc[marche]) {
                    acc[marche] = { marche, produits: [{ produit, prix_kg, date_enquete, region }] };
                } else {
                    acc[marche].produits.push({ produit, prix_kg, date_enquete, region });
                }
                return acc;
            }, {});

            const uniqueData = [];
            Object.values(regroupedData).forEach(({ marche, produits }) => {
                const existingIndex = uniqueData.findIndex((el) => el.marche === marche);
                if (existingIndex === -1) {
                    uniqueData.push({ marche, produits });
                } else {
                    uniqueData[existingIndex].produits.push(...produits);
                }
            });

            if (uniqueData.length === 0) {
                this.alertRegion = this.$t('prix.msg_marche')
            } else {
                this.prix = uniqueData
                this.alertRegion = false

            }
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

.sidebar .titre {
    width: 100%;
    text-align: center;
    color: var(--blanc);
    padding: 10px;
    opacity: 1;
    padding-top: 64px;
}

.sidebar .sidebar_content {
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
}

.two-section {
    position: relative;
    min-height: 280px;
    height: auto;
    left: 180px;
    width: calc(100% - 180px);
    position: relative;
    background-color: var(--blanc);
}

.sidebar .nav-links {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin-bottom: 3px
}

.sidebar .titre .act {
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
    li {
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

    .sidebar.close .titre {
        opacity: 0;
        pointer-events: none;

    }
}

.alert {
    text-align: center;
    padding: 70px;
    color: var(--red);
    background-color: var(--blanc);
}
</style>