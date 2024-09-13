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
    }
  },
  created() {
    axios
        .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
        .then((res) =>{
          this.store.allCards = res.data.data;
        });
    axios
        .get('https://db.ygoprodeck.com/api/v7/archetypes.php')
        .then((arcRes) =>{
          console.log(arcRes);
          this.store.allArchetypes = arcRes.data;
          console.log(this.store.allArchetypes);
          
          
        });
  },
  // 2) Dichiarazione del componente
  components: {
    AppHeader,
    AppMain,
  },
  methods: {
   refreshCards() {
      if(this.store.selectedArchetype != '') {
        axios
        .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0&' + 'archetype=' + this.store.selectedArchetype)
        .then((res) =>{
          this.store.allCards = res.data.data;
          console.log(res);
        });
      }
      
    }
  },
  
}
</script>

<template>
  <div>
    <!-- 3) Utilizzo del componente -->
    <AppHeader />

    <AppMain @changeSelected="refreshCards()"/>
    
  </div>
</template>

<style lang="scss">
@use 'assets/scss/main' as *;
</style>
