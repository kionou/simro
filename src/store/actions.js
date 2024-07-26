 import axiosClient from "@/axiosClient";
 import axios from 'axios';
 
 export default{


  async fetchDataFromAPI({ commit }) {
    let endpoints = [
      '/liste-marche/',
      '/liste-produit/',
      '/region/',
      '/famille-produit/',
       '/liste-dernier-prix-marche/',
       '/liste-prix-moyen-par-region/',
       '/liste-texte-accueil/'   
  ];
      try {
        // const [marche, produit, region, gamme, prix, prixMoy, texte] = await axios.all( endpoints.map((endpoint) => axiosClient.get(endpoint)));
        const [marche, produit, region, gamme, prix, prixMoy] = await axios.all(endpoints.map((endpoint) => axiosClient.get(endpoint)));
       

  
        const marcheData = marche.data;
        const produitData = produit.data;
        const regionData = region.data;
        const gammeData = gamme.data;
        const prixData = prix.data;
        const prixMoyData = prixMoy.data;

      commit("SET_ALLGAMME", gammeData);
      commit("SET_ALLMARCHE", marcheData);
      commit("SET_ALLPRIX", prixData);
      commit("SET_ALLPRIX_MOY", prixMoyData);
      commit("SET_ALLPRODUIT", produitData);
      commit("SET_ALLREGION", regionData);
   
      } catch (error) {
        console.log(error);
      }
    },


async simroAll({ commit }) {


  
    try {
      const data = await  axiosClient.get('/marche')
      commit("SET_ALLGAMME", data.data.gamme);
      commit("SET_ALLMARCHE", data.data.marche);
      commit("SET_ALLPRIX", data.data.prix);
      commit("SET_ALLPRIX_MOY", data.data.prix_moy);
      commit("SET_ALLPRODUIT", data.data.produit);
      commit("SET_ALLREGION", data.data.region);
    
    } catch (error) {
      console.log(error);
    }
  },


 

 }
