import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Maps from '../views/maps.vue'







const routes = [
  {
    path: '/',
    name: 'accueil',
    component: Accueil,
    props:true,
  },
  {
    path: '/test',
    name: 'test',
    component: Maps,
    props:true,
  }
 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
   scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
      
    } else if (to.hash){


      return{
          el: to.hash,
          top:10,
          behavior:'smooth'
      
      }
    }
    else{
    return{x : 0 , y: 0}
    
    }
  }
})

export default router
