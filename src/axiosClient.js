import axios from 'axios'

const axiosClient = axios.create({
     baseURL: 'https://rich-pink-rooster-hat.cyclic.app/',
    // baseURL: 'https://simro.onrender.com',
    
   
  });

  export default axiosClient