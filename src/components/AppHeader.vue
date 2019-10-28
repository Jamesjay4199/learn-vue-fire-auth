<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a href="#" class="navbar-brand mb-0 h1">VueFire App</a>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
      </ul>

      <ul class="navbar-nav ml-auto" v-if="!isAuthenticated">
        <li class="nav-item">
          <router-link class="btn btn-outline-warning" :to="{name: 'signup'}">Sign up</router-link>
        </li>
        <li class="nav-item pl-2">
          <router-link class="btn btn-light" :to="{name: 'login'}">Sign in</router-link>
        </li>
      </ul>

      <ul class="navbar-nav ml-auto" v-else>
        <li class="nav-item">
          <a class="nav-link">{{ user.displayName }}</a>
        </li>
        <li>
          <a class="btn btn-light" href="#" @click.prevent="logout">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import {logout} from '../services/firebaseService'
  export default {
    computed: {
      user() {
        return this.$store.state.user
      },
      isAuthenticated() {
        return this.$store.state.user.hasOwnProperty('id')
      }
    },
    methods: {
      logout() {
        logout().then(() => {
          this.$store.commit('setUser', {});
        });
      }
    }
  }
</script>