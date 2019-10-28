<template>
  <div class="login-box">
    <form action="#" @submit.prevent="loginUser" class="col-12">
      <h3>Login</h3>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" v-model="user.email" id="email" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="user.password" class="form-control" name="password" id="password" required>
      </div>
      <div class="form-group">
        <button type="submit" v-if="!isLoading">Register</button>
        <button type="button" v-else disabled>Loading...</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
  .login-box {
    display: flex;
    justify-content: center;
    margin: 50px auto;
    padding: 20px;
    width: 500px;
    box-shadow: 0 0 5px #a1a1a1;
  }
</style>

<script>
import { login } from "../services/firebaseService";

export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      isLoading: false
    }
  },
  methods: {
    loginUser() {
      this.isLoading = true
      login(this.user.email, this.user.password)
        .then(user => {
          this.$store.commit('setUser', user);
          this.isLoading = false;
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
