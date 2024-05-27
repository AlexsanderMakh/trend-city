<template>
  <nav class="navbar">
    <div class="logo" @click="goHome">TREND CITY</div>
    <div class="auth">
      <a href="#">Вход</a> | <a href="#">Регистрация</a>
      <router-link to="/cart">Корзина ({{ cartItemCount }})</router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'AppNavbar',
  computed: {
    ...mapGetters(['cartItemCount'])
  },
  methods: {
    goHome() {
      this.$router.push('/');
    }
  }
});
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1em;
  background-color: #000000;
  color: #fff;
  cursor: pointer;
  font-family: Mulish, sans-serif;
  border-radius: 10px;
}

.logo {
  font-size: 3em;
}

.auth a {
  color: #fff;
  margin: 0 0.5em;
  font-size: 25px;
}
</style>
