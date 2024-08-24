<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="80px">
        <el-button
          v-for="(item, index) in asideList"
          :key="item.name"
          type="primary"
          :class="{ 'is-plain': !item.status }"
          @click="updateFade({ name: item.name, index }, 'Y')"
        >
          {{ item.name }}
        </el-button>
      </el-aside>
      <el-container>
        <el-header
          ><el-button
            v-for="(item, index) in headerList"
            :key="item.name"
            type="primary"
            :class="{ 'is-plain': !item.status }"
            @click="updateFade({ name: item.name, index }, 'X')"
          >
            {{ item.name }}
          </el-button></el-header
        >
        <el-main style="position: relative">
          <transition :name="toggleFade">
            <component :is="currentTab" />
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import type { DefineComponent } from 'vue'
import { reactive, ref, shallowRef } from 'vue'
import A from './A.vue'
import B from './B.vue'

interface IUlList {
  name: string
  comp?: DefineComponent
  status: boolean
}

interface ICurrentIndex {
  x: number
  y: number
}

enum EToggleFade {
  LEFT = 'toggle-fade-left',
  RIGHT = 'toggle-fade-right',
  TOP = 'toggle-fade-top',
  BOTTOM = 'toggle-fade-bottom',
}

// 现在显示的组件
let currentTab = shallowRef(A)

// name 必须是唯一的, 通过 name 标识
// name 叫什么都可以, 随便取名
const headerList = reactive<IUlList[]>([
  { name: 'header-1', status: true },
  { name: 'header-2', status: false },
  { name: 'header-3', status: false },
])

const asideList = reactive<IUlList[]>([
  { name: 'aside-1', status: true },
  { name: 'aside-2', status: false },
  { name: 'aside-3', status: false },
  { name: 'aside-4', status: false },
])

// 记录当前活跃的索引
const currentIndex = reactive<ICurrentIndex>({
  x: 0,
  y: 0,
})

// left是指: 往左滑动, 参考自己的手机屏幕滑动
let toggleFade = ref<EToggleFade>(EToggleFade.LEFT)

// 参数1: item.name, item.index
// 参数2: X/Y, 是需要水平动画还是垂直动画
let updateFade = (
  item: { name: string; index: number },
  direction: 'X' | 'Y',
): void => {
  // 组件切换
  currentTab.value = currentTab.value === A ? B : A
  // currentTab.value = headerList[item.index].comp

  // 当前点击组件的name和index
  let _name = item.name
  let _index = item.index

  if (direction === 'X') {
    toggleFade.value =
      currentIndex.x < _index ? EToggleFade.LEFT : EToggleFade.RIGHT

    // 更新列表状态
    headerList[_index].status = true
    headerList[currentIndex.x].status = false

    // 更新当前活跃的索引
    currentIndex.x = _index
  } else if (direction === 'Y') {
    toggleFade.value =
      currentIndex.y < _index ? EToggleFade.TOP : EToggleFade.BOTTOM

    // 更新列表状态
    asideList[_index].status = true
    asideList[currentIndex.y].status = false

    // 更新当前活跃的索引
    currentIndex.y = _index
  }
}
</script>

<style scoped lang="scss">
.common-layout {
  width: 300px;

  .el-button {
    margin: 0;
  }

  .el-header {
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    padding: 0;
    height: 40px;
  }
}

.toggle-fade-right-enter-from,
.toggle-fade-left-leave-to {
  transform: translateX(-100%);
}

.toggle-fade-right-leave-to,
.toggle-fade-left-enter-from {
  transform: translateX(100%);
}

.toggle-fade-top-enter-from,
.toggle-fade-bottom-leave-to {
  transform: translateY(100%);
}

.toggle-fade-top-leave-to,
.toggle-fade-bottom-enter-from {
  transform: translateY(-100%);
}

.toggle-fade-left-leave-active,
.toggle-fade-right-leave-active,
.toggle-fade-left-enter-active,
.toggle-fade-right-enter-active,
.toggle-fade-top-leave-active,
.toggle-fade-bottom-leave-active,
.toggle-fade-top-enter-active,
.toggle-fade-bottom-enter-active {
  transition: all 0.5s ease-out;
}

// 确保组件是连着的
.toggle-fade-left-leave-active,
.toggle-fade-right-leave-active,
.toggle-fade-top-leave-active,
.toggle-fade-bottom-leave-active {
  position: absolute;
}
</style>
