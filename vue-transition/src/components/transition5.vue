<template>
  <div class="t5">
    <h2>TRANSITION 5</h2>
    <span>左右切换：</span>
    <input
      v-model="view2"
      type="radio"
      value="aView"
      id="a"
      @click="view2Toggle"
    /><label for="a2">A</label>
    
    <input
      v-model="view2"
      type="radio"
      value="bView"
      id="b"
      @click="view2Toggle"
    /><label for="b2">B</label>

    <div class="inner">
      <transition :name="transitionName" class="item">
        <component :is="view2"></component>
      </transition>
    </div>
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
      view2: 'aView',
      transitionName: 'transitionRight',
    }
  },
  components: {
    aView,
    bView,
  },
  methods: {
    view2Toggle() {
      this.transitionName =
        this.transitionName === 'transitionRight'
          ? 'transitionLeft'
          : 'transitionRight'
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inner {
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  height: 20px;
  width: 500px;
}

.item {
  position: absolute;
  top: 0;
  left: 0;
}
.transitionLeft-enter-from,
.transitionRight-leave-active {
  /* -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0); */
  transform: translateX(100%);
}
.transitionLeft-leave-active,
.transitionRight-enter-from {
  /* -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0); */
  transform: translateX(-100%);
}

.transitionLeft-leave-active,
.transitionRight-leave-active,
.transitionLeft-enter-active,
.transitionRight-enter-active {
  transition: all 0.4s ease-out;
}
</style>
