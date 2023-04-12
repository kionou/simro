<template>
  <div class="select">
    {{ marche }}
    <div @click="toggleSelect" class="button">
      <span v-if="!selected.nom_marche">
        Recherchez un prodiut ou une gamme
      </span>
      <span v-else>
        prodiut {{ selected.nom_marche }}
      </span>
      <span class="icon material-symbols-outlined " :class="show ? 'close' : ''"><i
          class="fa-solid fa-chevron-down"></i></span>
    </div>
    <div :class="`select-block ${show ? 'open' : ''}`">
      <div class="scroll">
        <ul>
          <li v-for="item in items" :key='item.id_marche' @click="clickItem(item)"
            :class="item.nom_marche === selected.nom_marche ? 'active' : ''">
            <p @click="$emit('ClickItem', item.nom_marche)">prodiut {{ item.nom_marche }} </p>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="show" @click="toggleSelect" class="select-wrapper"></div>
  </div>
  
</template>

<script>
// import axios from 'axios'
// import axiosClient from '@/axiosClient'
import { computed } from 'vue';
import store from '@/store'
export default {
  name: 'CptSelect',


  data() {
    return {
      show: false,
      aa:"",
      items:  [
        { text: 'Feuille', nom_marche: 'Feuille' },
        { text: 'Céreale', nom_marche: 'Céreale' },
        { text: 'Semence', nom_marche: 'Semence' },
        { text: 'Bulbe', nom_marche: 'Bulbe' },
        { text: 'Transformé', nom_marche: 'Transformé' },
        
      ],
      selected: {},
    };
  },

  mounted() {

    this.aa =  computed(() => {
      return store.getters.getmarche;
});
     computed(() => {
      return store.getters.getproduit;
    });
console.log(this.aa)
    store.dispatch('simroAll')
  },

  methods: {
    toggleSelect() {
      this.show = !this.show;
    },
    clickItem(value) {
      if (this.selected.nom_marche === value.nom_marche) {
        return this.selected = {};
      }
      this.selected.nom_marche = value.nom_marche;
      this.show = !this.show

    },

  },
};
</script>

<style lang="css" scoped>
*::-webkit-scrollbar {
  width: 4px;
}

*::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
  border-radius: 4px;
}

.select {
  text-align: left;
  width: 100%;
  position: relative;
  max-width: 500Px;
}

.select .button {
  position: relative;
  width: 100%;
  background-color: var(--blanc);
  padding: 15px 20px;
  font-size: 14px;
  color: #5f6368ff;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 1;
  box-shadow: 0px 0px 10px #8888884f;
}

.select .select-block {
  width: 100%;
  /* height: 200px; */
  box-shadow: 0px 0px 10px #8888884f;
  position: absolute;
  background-color: var(--blanc);
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s;
  z-index: 102;
  top: 64px;
}

.select .select-block .scroll {
  height: 100%;
  overflow-y: auto;
}

.select .select-block.open {
  visibility: visible;
  opacity: 1;
}

.select ul {
  margin: 0;
  padding: 0 10px;
}

.select ul li {
  list-style-type: none;
  color: #5f6368ff;
  cursor: pointer;
  font-size: 13px;
}

.select ul li p:hover {
  padding: 10px 5px;
  background-color: hsl(260deg 11% 95% / 70%);
}

.select ul li p {
  padding: 5px 0;
  width: 100%;
}

/* .select .select-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
  opacity: 0;
} */

.select .icon {
  position: absolute;
  right: 10px;
  top: 15px;
  transition: all 0.3s;
}

.select .icon.close {
  transform: rotate(180deg);
}
</style>