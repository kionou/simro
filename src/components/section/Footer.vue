<template>
  <div class="corps-footer">
    <div class="corps-footer-logo">
      <div class="logo">
        <img src="@/assets/images/logo.png" @click="$router.push({ path: '#' })"
                style="cursor: pointer">
                {{ $t('footer.titre1')}} <br> {{ $t('footer.titre2')}}
      </div>
    </div>
    <div class="corps-footer-menu">
      <nav>
        <ul class="menu">
          <li><router-link to="/" class="Acc-lien">{{ $t('navbar.accueil')}}</router-link></li>
        <li><router-link to="/#stock" class="Acc-lien">{{ $t('navbar.prix')}}</router-link></li>
        <li><router-link to="/#magasin" class="Acc-lien">{{ $t('navbar.magasin')}}</router-link></li>
        <li><router-link to="/#partenaire" class="Acc-lien">{{ $t('navbar.partenaire')}}</router-link></li>
        <li><router-link to="/#contact" class="Acc-lien">{{ $t('navbar.contact')}}</router-link></li>
        </ul>
      </nav>
    </div>
    <div class="corps-footer-reseau">
      <div class="corps-footer-reseau-content">
        <a href="#" target="_blank" style="color: #1977f2"><i class="fab fa-facebook-square"></i></a>
        <a href="#" target="_blank" style="color: red"><i class="fab fa-youtube-square"></i></a>
        <a href="#" style="color: #02c100;" target="_blank">
          <i class="fab fa-whatsapp-square"></i>
        </a>
        <a href="#" style="color: #0b65c2;" target="_blank"><i class="fab fa-linkedin"></i></a>
      </div>

    </div>
    <div class="corps-footer-text">
      <p>{{ $t('footer.copyright')}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CptFooter'

}
</script>
<style scoped lang="css">
.corps-footer {
  max-width: 100%;
  height: 300px;
  margin: 0 auto;
  background-color: var(--vert);
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}

.corps-footer-logo .logo {
  display: flex;
  flex-direction: initial;
  align-items: center;
  text-decoration: none;
  text-align: center;
  color: var(--blanc);
}

.corps-footer-logo img {
  width: 90px !important;
  margin-right: 6px;

}

.corps-footer-menu ul {
  list-style-type: none;
  display: flex;
}

.corps-footer-menu ul li a {
  text-decoration: none;
  margin-right: 40px;
  color: var(--blanc);
  font-weight: 500;
}

.corps-footer-menu ul li a:hover {
  color: var(--noir);
}

.corps-footer-reseau {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
}

.corps-footer-reseau-content {
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.corps-footer-reseau a {
  background-color: var(--blanc);
  height: 40px;
  width: 40px;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  margin: 18px;
}

.corps-footer-reseau i {

  font-size: 30px;
  width: 100%;
  height: 100%;
  top: 5px;
  left: 7px;
  position: absolute;
}


.corps-footer-text p:hover {
  color: var(--noir)
}

.corps-footer-text {
  text-align: center;
  padding: 10px;
  color: var(--blanc);
}

@media (max-width: 685px) {
  .corps-footer {
    height: auto;
    padding: 10px;
  }

  .corps-footer-logo a {
    font-size: 18px;
  }

  .corps-footer-menu ul {
    flex-direction: column;
    align-items: center;
  }

  .corps-footer-menu ul li a {
    margin-right: 0;
  }

  .corps-footer-reseau a {
    margin: 0 5px;
  }
}

@media (max-width: 447px) {
  .corps-footer-logo a {
    font-size: 13px;
  }
}
</style>