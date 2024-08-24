<template>
  <transition1 />
  <transition2 />
  <transition3 />
  <transition4 />
  <transition5 />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import transition1 from './components/transition1.vue'
import transition2 from './components/transition2.vue'
import transition3 from './components/transition3.vue'
import transition4 from './components/transition4.vue'
import transition5 from './components/transition5.vue'

export default defineComponent({
  name: 'App',
  components: {
    transition1,
    transition2,
    transition3,
    transition4,
    transition5,
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
