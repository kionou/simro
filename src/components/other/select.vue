<template>
  <div class="select">
    <div @click="toggleSelect" class="button">
      <span v-if="!selected.value">
        Recherchez votre Marché
      </span>
      <span v-else>
        Marché {{ selected.text }}
      </span>
      <span class="icon material-symbols-outlined " :class="show ? 'close' : ''"><i
          class="fa-solid fa-chevron-down"></i></span>
    </div>
    <div :class="`select-block ${show ? 'open' : ''}`">
      <div class="scroll">
        <ul>
          <li v-for="item in items" :key='item.value' @click="clickItem(item)" 
            :class="item.value === selected.value ? 'active' : ''"> 
            <p @click="$emit('ClickItem' , item.value)"  >Marché {{ item.text }} </p>
            
          
          </li>
        </ul>
      </div>
    </div>

    <div v-if="show" @click="toggleSelect" class="select-wrapper"></div>
  </div>
</template>

<script>
export default {
  name: 'CptSelect',


  data() {
    return {
      show: false,
      items: [
        { text: 'Pitoa', value: 'Pitoa' },
        { text: 'Mokolo', value: 'Mokolo' },
        { text: 'Beka', value: 'Beka' },
        { text: 'Dembo', value: 'Dembo' },
        { text: 'Poli', value: 'Poli' },
        // { text: 'Nord', value: 'Nord' },
        // { text: 'Nord-Ouest', value: 'Nord-Ouest' },
        // { text: 'Ouest', value: 'Ouest' },
        // { text: 'Sud', value: 'Sud' },
        // { text: 'Sud-Ouest', value: 'Sud-Ouest' },


      ],
      selected: {},
    };
  },

  mounted() {

  },

  methods: {
    toggleSelect() {
      this.show = !this.show;
    },
    clickItem(value) {
      if (this.selected.value === value.value) {
        return this.selected = {};
      }
      this.selected = value;
      console.log(this.selected.text  );
      this.show = !this.show

    }
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
  padding: 10px;
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