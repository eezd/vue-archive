<template>
  <h2>Setup</h2>
  <div>
    name：{{ name }} <button @click="sayHello">调用 sayHello 函数</button><br />
    counter：{{ counter }} <button @click="counter = counter + 1">+ 1</button
    ><br />

    计算属性：twiceTheCounter：{{ twiceTheCounter }}<br />
    计算属性input读写绑定：<input type="text" v-model="person.fullName" />
    {{ person.fullName }}<br />

    Watch修改person.age：<button @click="changePersonAge">
      changePersonAge
    </button>
    Watch修改person.name：<button @click="changePersonName">
      changePersonName
    </button>
  </div>
</template>

<script>
import { ref, toRef, reactive, computed, watch } from 'vue'
import useTest from '@/setup/hooks/Test'
export default {
  name: 'index',
  setup(props, context) {
    let name = '张三'
    const counter = ref(1)
    const person = reactive({
      firstName: 'first',
      lastName: ' last',
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    })

    // 计算属性
    const twiceTheCounter = computed(() => counter.value * 2)
    person.fullName = computed({
      get() {
        return person.firstName + '-' + person.lastName
      },
      set(value) {
        const nameArr = value.split('-')
        person.firstName = nameArr[0]
        person.lastName = nameArr[1]
      },
    })

    // Watch
    watch(counter, (newValue, oldValue) => {
      console.log('counter发生变化', newValue, oldValue)
    })
    // watch(person, (newValue, oldValue) => {
    //   console.log('person发生变化', newValue, oldValue)
    // })
    watch(
      () => person.name,
      (newValue, oldValue) => {
        console.log('person.name发生变化', newValue, oldValue)
      }
    )

    function sayHello() {
      alert(`Hello`)
    }
    function changePersonAge() {
      person.age = 30
    }
    function changePersonName() {
      person.name = 'ChangeName'
    }

    // 导入模块
    let test = useTest()
    return {
      name,
      sayHello,
      counter,
      twiceTheCounter,
      person,
      changePersonAge,
      changePersonName,
      test,
    }
    // 返回一个函数（渲染函数）
    // return ()=> h('h1','setup')
  },
}
</script>

<style scoped></style>
