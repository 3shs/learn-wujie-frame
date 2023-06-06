<template>

  <h1>这是主应用</h1>

  <!-- <RouterLink to="/">vue3</RouterLink>

  <RouterLink to="/about">react</RouterLink> -->


  <RouterView />

</template>

<script setup lang="ts">
import { onMounted } from 'vue'
// import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'

onMounted(() => {
  axios.get('http://localhost:3000/users/info').then(res => {
    console.log('res', res)
  })
})

</script>

<style scoped>

</style>
