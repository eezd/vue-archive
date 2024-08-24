<template>
  <div class="hello">
    <h2>TRANSITION 4</h2>

    <button @click="flag = !flag">显示/隐藏</button><br />
    <transition
      name="fade"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div v-show="flag" class="mybtn"></div>
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
      flag: false,
    }
  },
    components: {
    aView,
    bView,
  },
  methods: {
    // beforeEnter(el: any) {
    //   el.style.opacity = '0'
    // },
    // enter(el: any, done: () => void) {
    //   el.style.opacity = '1'
    // 方法1： 这里不调用，但参数done必须传，不传或调用done的话由于会立即删除元素导致动画不执行
    // 过渡动画会执行，且style 里  display 不为none，不隐藏
    // done();
    // 方法2:
    // setTimeout(done,5000)
    // 方法3:
    //   el.addEventListener('transitionend', function () {
    //     done()
    //   })
    // },

    beforeEnter() {
      alert('beforeEnter 进入过渡状态 开始 前')
    },
    enter(el: any) {
      alert('enter 进入过渡状态 开始')
      setTimeout(() => {
        el.style.backgroundColor = 'green'
      }, 1000)
    },
    afterEnter() {
      alert('afterEnter 进入过渡状态 结束')
    },
    enterCancelled() {
      alert('enterCancelled 进入过渡状态 被打断')
    },

    beforeLeave() {
      alert('beforeLeave 离开过渡状态 开始 前')
    },
    leave(el: any) {
      alert('leave 离开过渡状态 开始')
      el.style.backgroundColor = 'red'
    },
    afterLeave() {
      alert('afterLeave 离开过渡状态 结束')
    },
    leaveCancelled() {
      alert('leaveCancelled 离开过渡状态 被打断')
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mybtn {
  width: 100px;
  height: 100px;
  background-color: red;
  transform: translateX(20px);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(0px);
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateX(20px);
}
</style>
