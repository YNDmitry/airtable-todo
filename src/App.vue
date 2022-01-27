<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
  import TheHeader from './components/TheHeader.vue'
  import EmptyLayout from './layouts/Empty.vue'

  export default {
    components: {
      TheHeader, EmptyLayout
    },

    computed: {
      layout() {
        if (this.$route.meta.layout) {
          return this.$route.meta.layout
        } else {
          return 'EmptyLayout'
        }
      }
    }

  }
</script>
