<template>

  <h1>这是主应用</h1>

  <RouterLink to="/">vue3</RouterLink>

  <RouterLink to="/about">react</RouterLink>


  <RouterView />

</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<style scoped>

</style>
