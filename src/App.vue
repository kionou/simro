<template>
  <div>
    <NavBar class="Acc-headd"/>

    <div class="router-link">
      <router-view></router-view>
    </div>
    <Footer />

  </div>
</template>
<script>
import Footer from './components/section/Footer.vue';
import NavBar from './components/section/navbar.vue';




export default {
  name: 'App',
  components:{
    NavBar, Footer 

  },
  watch: {
    $route(to, ){
      const name = to.name.toLowerCase()
      const title = name === 'formation'
        ? `${name} (${to.href.split('/')[2].toLowerCase()})`
        : name
      document.title = `simro - ${title}`
      document.querySelector('.Acc-menu')?.classList.remove('Acc-menu-active')
      document.querySelector('.burger')?.classList.remove('burger-active')
      window.scrollTo({top: 0, behavior: 'smooth'})
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');

:root{
    --blanc: #fff;
    --bg: #f4f5fa;
    --noir: #000;
    --vert:#00a36c;
    --jaune:#fd0;
    --bggris1:#293949;
    --bggris2:#2e4051;
    --gris1:#8f939e;
    --gris2:#797979;
    --red:#ff0000;
    --titre: 35px;
    --paragraphe: 18px;
    --raduis:6px;
    --max-width: 1140px;
    --box-shadow: 0px 0px 10px #888888;
    --shadow-small: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px 0 rgba(0, 0, 0, 0.06);
   --shadow-medium: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
 
  }

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
      
}
body , html{

background-color: var(--bg);
font-family: 'Open Sans', sans-serif; 
font-size: 14px;

}
</style>
