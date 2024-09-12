<script>
import axios from 'axios';
export default {
  data() {
    return { 
      allCards: []
    }
  },
  created() {
    axios
        .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
        .then((res) =>{
          console.log(res);
          console.log(res.data.data);
          
          this.allCards = res.data.data;
        });
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
        Found x cards
      </div>
      <div class="cards-container">
        <div class="my-row">
          <div class="my-col-20" v-for="(singleCard, i) in allCards" :key="i">
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
  }
  .card {
    padding: 15px 5px;
  }
}
</style>
