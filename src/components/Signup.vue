<template>
  <div class="signup-box">
    <form @submit.prevent="registerUser" class="col-12">
      <h3>Register</h3>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="user.username" name="username" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" v-model="user.email" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" v-model="user.password" name="password" id="password" required>
      </div>
      <div class="form-group">
        <button type="submit" v-if="!isLoading">Register</button>
        <button type="button" v-else disabled>Loading...</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
  .signup-box {
    display: flex;
    justify-content: center;
    margin: 50px auto;
    padding: 20px;
    width: 500px;
    box-shadow: 0 0 5px #a1a1a1;
  }
</style>
<script>
import { register } from '../services/firebaseService';

export default {
  data() {
    return {
      // make the data for the form reactive
      user: {
        username: '',
        email: '',
        password: ''
      },
      // handle loading state.
      isLoading: false
    }
  },

  methods: {
    // action to be performed when the register form is submitted
    registerUser() {
      this.isLoading = true
      register(this.user.username, this.user.email, this.user.password)
        .then(user => {
          // commit the mutation
          this.$store.commit('setUser', user)
          this.isLoading = false
        })
        .then(() => {
          // Go to the home page after loggin in.
          this.$router.push('/');
        })
      ;
    }
  }
}
</script>