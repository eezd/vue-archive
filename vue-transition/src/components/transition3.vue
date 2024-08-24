<template>
  <div class="hello">
    <h2>TRANSITION 3</h2>

    <input v-model="view" type="radio" value="aView" id="a" /><label for="a"
      >A</label
    >
    <input v-model="view" type="radio" value="bView" id="b" /><label for="b"
      >B</label
    >
    <transition name="component-fade" mode="out-in">
      <component :is="view"></component>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import aView from './aView.vue'
import bView from './bView.vue'
export default defineComponent({
  name: 'HelloWorld',
  data() {
    return {
      view: 'aView',
    }
  },
  components: {
    aView,
    bView,
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
  position: absolute;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}
</style>
