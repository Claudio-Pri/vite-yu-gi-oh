<script>
/* 
  Per importare ed utilizzare un componente dentro un altro devo SEMPRE seguire questi 3 passi:
  1) Importazione del componente
  2) Dichiarazione del componente
  3) Utilizzo del componente
*/
// 1) Importazione del componente
import {store} from './store.js';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  data() {
    return { 
      store: store,
      allCards: [],
    }
  },
  created() {
    axios
        .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
        .then((res) =>{
          console.log(res);
          console.log(res.data.data);
          
          this.store.allCards = res.data.data;
        });
  },
  // 2) Dichiarazione del componente
  components: {
    AppHeader,
    AppMain,
  },
  methods: {
  },
  
}
</script>

<template>
  <div>
    <!-- 3) Utilizzo del componente -->
    <AppHeader />

    <AppMain />
    
  </div>
</template>

<style lang="scss">
@use 'assets/scss/main' as *;
</style>
