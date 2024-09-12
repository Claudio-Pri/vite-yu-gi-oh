<script>
import {store} from '../store.js';
export default {
  data() {
    return { 
      store
    }
  },
  
}
</script>

<template>
  <main>
    <div class="container">
      accordion
    </div>
    <div class="container">
      <div class="main-header">
        Found {{ store.allCards.length }} cards
      </div>
      <div class="cards-container">
        <div class="my-row">
          <div class="my-col-20" v-for="(singleCard, i) in store.allCards" :key="i">
            <div class="card">
              <div>
                <img :src="singleCard.card_images[0].image_url" :alt="singleCard.name">
              </div>
              <div>
                {{ singleCard.name }}
              </div>
              <div>
                {{ singleCard.archetype }}
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
main {
  background-color: $mainColor;
  .main-header {
    color:white;
    background-color: #212529;
    padding: 20px;
  }
  .cards-container {
    background-color: white;
    padding: 40px;
  }
  .card {
    padding: 15px 5px;
  }
}
</style>
