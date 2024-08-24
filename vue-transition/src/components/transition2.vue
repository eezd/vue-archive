<template>
  <div class="hello">
    <h2>TRANSITION 2</h2>

    <button @click="show2 = !show2">Toggle show</button>
    <transition name="bounce">
      <p v-if="show2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  data() {
    return {
      show2: true,
    }
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bounce-enter-active {
  animation: bounce-in 1s;
}
.bounce-leave-active {
  animation: bounce-in 1s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
