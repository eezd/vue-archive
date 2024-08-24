<template>
  <div ref="rootRef" class="app">
    <HelloWord></HelloWord>
    <Home></Home>
    {{ store.state.count }}
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import Home from './views/Home/index.vue'
import HelloWord from './components/HelloWord.vue'

const store = useStore()
</script>

<style lang="scss">
@use 'element-plus/theme-chalk/src/dark/css-vars.scss' as *;
@use 'styles/index.scss' as *;

.app {
  color: gVariable.$red;
}
</style>
