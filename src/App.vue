<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

<style>
/* Добавьте базовые стили для макета */
#app {
  background-color: rgba(245, 245, 245, 0.3);
  font-family: Mulish, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
