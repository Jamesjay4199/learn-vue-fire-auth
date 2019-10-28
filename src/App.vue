<template>
  <div id="app">
    <app-header></app-header>
    <!-- Router entry point -->
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import { getLoggedInUser } from "./services/firebaseService";

export default {
  name: 'app',
  // Register the AppHeader Component
  created() {
    let currentUser;

    getLoggedInUser().then(user => {
      currentUser = user
      this.$store.commit('setUser', currentUser)
    });

  },

  components: {
    AppHeader
  }
}
</script>

