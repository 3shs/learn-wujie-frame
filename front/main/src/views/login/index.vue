<template>
  <div class="login-container">
    321
    <div @click="theme = 'light'">亮色</div>
    <div @click="theme = 'dark'">深色</div>
  </div>
</template>
<script setup lang="ts">
import useTheme from '@/hooks/useTheme.ts'

const { theme } = useTheme()

</script>
<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  @include useTheme {
    background-color: getVar('bgColor');
    color: getVar('textColor');
  }

}
</style>

