 import axiosClient from "@/axiosClient";
 
 export default{
async simroAll({ commit }) {
    try {
      const data = await  axiosClient.get(`/simro`)
      commit("SET_ALLGAMME", data.data.gamme);
      commit("SET_ALLMARCHE", data.data.marche);
      commit("SET_ALLPRIX", data.data.prix);
      commit("SET_ALLPRODUIT", data.data.produit);
      commit("SET_ALLREGION", data.data.region);
      console.log(data.data)
    } catch (error) {
      console.log(error);
    }
  },

 }
