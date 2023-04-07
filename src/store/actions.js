 import axiosClient from "@/axiosClient";
 
 export default{
async marcheAll({ commit }) {
    try {
      const data = await  axiosClient.get(`/market`)
      commit("SET_MARCHE", data.data);
    } catch (error) {
      console.log(error);
    }
  },

 }
