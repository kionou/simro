<template>
  <nav class="Acc-nav">
    <div class="container-nav">
      <div class="logo">
        <div class="desktop">
          <img src="@/assets/images/logo3.png" alt="" @click="$router.push({ path: '/' })" style="cursor: pointer">
          <div class="texte">
            <p class="fr">Système d'Information sur les Marchés du Riz et de l'Oignon au Cameroun</p>
            <hr>
            <p class="en">Information System on Rice and Onion Markets in Cameroon</p>
          </div>
        </div>
        <img src="@/assets/images/logo.png" alt="" class="mobile">
      </div>
      <ul class="Acc-menu">
        <li><router-link to="/" class="Acc-lien">{{ $t('navbar.accueil') }}</router-link></li>
        <li><router-link to="/#stock" class="Acc-lien">{{ $t('navbar.prix') }}</router-link></li>
        <li><router-link to="/#magasin" class="Acc-lien">{{ $t('navbar.magasin') }}</router-link></li>
        <li><router-link to="/#partenaire" class="Acc-lien">{{ $t('navbar.partenaire') }}</router-link></li>
        <li><router-link to="/#contact" class="Acc-lien">{{ $t('navbar.contact') }}</router-link></li>
        <li>
          <div @click="toggleLanguageDropdown" class="select">
            {{ getLanguageName(selectedLanguage) }}
            <img :src="getFlagSrc(selectedLanguage)" alt="">
          </div>
          <div v-show="isLanguageDropdownOpen"  class="select_content">
            <div v-for="(language, index) in languages" :key="index" @click="changeLanguage(language.value)"
              class="select_item">
              {{ language.name }}
              <img :src="language.flagSrc" alt="">
            </div>
          </div>

        </li>
      </ul>
      <div class="burger">
        <div class="line1"></div>
        <div class="line1"></div>
        <div class="line1"></div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'CptNavBar',
  data() {
    return {
      selectedLanguage: 'fr', // par défaut, la langue est en anglais
      languages: [
        { value: 'fr', name: 'Français', flagSrc: require(`@/assets/images/france-flag-icon.svg`) },
        { value: 'en', name: 'English', flagSrc: require(`@/assets/images/unit.svg`) },
        // autres langues disponibles
      ],
      isLanguageDropdownOpen: false

    }
  }, methods: {
    async profil() {
      const toggleMenu = document.querySelector(".menu")
      toggleMenu.classList.toggle('active')
    },

    toggleLanguageDropdown() {
      this.isLanguageDropdownOpen = !this.isLanguageDropdownOpen
    },
    changeLanguage(language) {
     
      this.selectedLanguage = language
      this.$i18n.locale = language // mettre à jour la langue utilisée par i18n
       this.isLanguageDropdownOpen = !this.isLanguageDropdownOpen
      


    },
    getFlagSrc(language) {
      return this.languages.find(l => l.value === language).flagSrc
    },
    getLanguageName(language) {
      return this.languages.find(l => l.value === language).name
    }

  },
  mounted() {
    const burger = document.querySelector('.burger')
    const Navmenu = document.querySelector('.Acc-menu')
    burger.addEventListener('click', () => {
      burger.classList.toggle("burger-active")
      Navmenu.classList.toggle("Acc-menu-active")
    })




  },
  setup() {

  }

}
</script>
<style scoped></style>


<style>
.Acc-nav {
  background-color: var(--blanc);
}

.Acc-nav_active {
  transition: 0.5s ease-in;
}

.Acc-menu>.Acc-cadenas {
  display: none;
}

.Acc-menu.Acc-menu-active>.Acc-cadenas {
  display: block;
}

.Acc-nav .Acc-menu.Acc-menu-active~.Acc-cadenas {
  display: none;
}

.container-nav {
  margin: 0 auto;
  max-width: var(--max-width);
}

.logo {

  padding: 0 !important;
}

.logo img {
  height: 4rem;
  border: none;
}


.Acc-nav .container-nav {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  transition: all 0.5s ease-in-out;
  position: relative;
}

.Acc-nav .container-nav ul {
  align-items: center;
  display: flex;
  justify-content: center;
  list-style-type: none;
  z-index: 5;
}

.Acc-nav a {
  color: var(--noir);
  padding: 7px 15px;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
}

.Acc-nav a::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: var(--noir);
  transform: scaleX(0);
  transition: transform 0.5s ease-in-out;
  transform-origin: right;

}

.Acc-nav.active .container-nav {
  padding: 10px 0;
}

.Acc-lien:hover {
  color: var(--vert);

}

.burger {
  margin-top: 5px;
  cursor: pointer;
  display: none;
}

.burger div {
  width: 25px;
  height: 5px;
  margin: 5px;
  background-color: var(--noir);

}

.Acc-nav_active .burger div {
  background-color: var(--noir);
}

@media only screen and (max-width: 1014px) {
  .logo .desktop {
    font-size: 11px;

  }
}

@media (min-width: 768px) {
  .logo .desktop {
    display: block;
    display: flex;
    align-items: center;
    font-family: 'Playfair Display', serif;

  }

  .logo .desktop img {
    height: 4rem;
    border: none;
    width: auto;
  }

  hr {
    margin: 5px 0;
    border: 1px solid;
  }

  .fr {
    color: var(--red);
  }

  .en {
    color: var(--vert);
    text-align: center;
  }

  .logo .mobile {
    display: none;
  }
}

@media (max-width: 768px) {
  .logo .desktop {
    display: none;
  }

  .logo .mobile {
    width: 100px;

  }

}


@media (max-width: 880px) {
  .burger {
    margin-top: -3px;
    display: block;
    margin-right: 42px;
  }

  .burger.burger-active .line1:nth-child(2) {
    opacity: 0;
  }

  .burger.burger-active .line1:nth-child(1) {
    transform: translateY(10px) rotate(45deg);
  }

  .burger.burger-active .line1:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }

  .Acc-nav .container-nav>.Acc-cadenas {
    display: none;
  }

  .Acc-nav .container-nav ul li {
    margin: 10px 0;
  }

  .Acc-menu {
    position: absolute;
    left: 0px;
    top: -165%;
    gap: 6;
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 1);
    width: 100%;
    text-align: center;
    transition: 0.3s;
    margin-top: 76px;
  }

  .Acc-nav a {
    color: var(--noir);
  }

  li {
    margin: 16px 0;
  }

  .Acc-menu.Acc-menu.Acc-menu-active {
    top: 0px;
  }

}

.select {
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  cursor: pointer;

}

.select img {
  height: 13px;
  margin-left: 5px;
  margin-top: 2px;
}

.select_item {

  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  padding: 10px 5px 0;
}

.select_item:hover {

  background-color: #0000000b;
  cursor: pointer;
  width: 100%;
  padding-bottom: 10px;


}

.select_item img {
  height: 13px;
  margin-left: 5px;
  margin-top: 2px;
}

.select_content::before {
  content: '';
  position: absolute;
  top: -8px;
  right: 15px;
  width: 17px;
  height: 17px;
  background-color: var(--blanc);
  transform: rotate(45deg);
}

.select_content {
  background-color: var(--blanc);
  box-shadow: var(--box-shadow);
  position: absolute;
  width: 130px;
  right: 0;
  top: 57px;
  border-radius: 6px;
  padding-bottom: 10px;

}</style>