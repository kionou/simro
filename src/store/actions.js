 import axiosClient from "@/axiosClient";
 
 export default{
async simroAll({ commit }) {
    try {
      const data = await  axiosClient.get(`/simro`)
      commit("SET_ALLMARCHE", data.data.marche);
      commit("SET_ALLPRODUIT", data.data.produit);

    } catch (error) {
      console.log(error);
    }
  },

 }
