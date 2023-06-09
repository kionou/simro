 import axiosClient from "@/axiosClient";
 
 export default{
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
