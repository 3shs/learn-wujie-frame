<template>
  <div class="login-container">
    <el-switch
      @change="changeTheme"
      v-model="switchTheme" />
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import useTheme from '@/hooks/useTheme.ts'

const switchTheme = ref(false)

const { theme } = useTheme()

const changeTheme = (val: boolean)=> {
  if (val) {
    theme.value = 'dark'
  } else {
    theme.value = 'light'
  }
}

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

