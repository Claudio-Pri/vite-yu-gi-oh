<script>
export default {
  data() {
    return { 
      message: 'Yu-Gi-Oh Api'
    }
  }
}
</script>

<template>
  <header>
    <div class="container">
      <h1>
      {{ message }}
      </h1>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

header {
  padding: 30px 0;
}
</style>
