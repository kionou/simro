import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'https://simro.onrender.com',
   
  });

  export default axiosClient