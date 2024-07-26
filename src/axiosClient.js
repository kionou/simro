import axios from 'axios'

const axiosClient = axios.create({
    //  baseURL: 'https://rich-pink-rooster-hat.cyclic.app/simro/',
    // https://cors-proxy.fringe.zone/https://simro-kberthe.pythonanywhere.com/api/
     baseURL: 'https://cors-proxy.fringe.zone/https://simro-kberthe.pythonanywhere.com/api/',
    // baseURL: 'https://simro.onrender.com/simro',
    
   
  });

  export default axiosClient