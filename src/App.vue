<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
  import TheHeader from './components/TheHeader.vue'

  import Login from './layouts/Login.vue'
  import Main from './layouts/Main.vue'
  import Profile from './layouts/Profile.vue'
  import EmptyLayout from './layouts/Empty.vue'

  export default {
    components: {
      TheHeader, EmptyLayout, Login, Main, Profile
    },

    data() {
      return {
        layout: null
      }
    },

    watch: {
      $route(to) {
        if (to.meta.layout !== undefined) {
          return this.layout = to.meta.layout
        } else {
          this.layout = 'EmptyLayout'
        }
      }
    },
  }
</script>
