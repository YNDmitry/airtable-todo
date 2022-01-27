<template>
  <the-header></the-header>
  <div>
    <home-page></home-page>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import HomePage from '../views/Home.vue'
  export default {
    name: 'Main',
    components: { TheHeader, HomePage }
  }
</script>