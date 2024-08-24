<template>
  <h2>Vuex</h2>
  <div>
    <h3>1、State</h3>
    <p>this.$store.state.count：{{ this.$store.state.count }}</p>
    <p>count：{{ count }}</p>
    <p>countAlias：{{ countAlias }}</p>
    <p>countPlusLocalState：{{ countPlusLocalState }}：我永远比其他大 10</p>
  </div>
  <div>
    <h3>2、Getters</h3>
    <p>this.$store.getters.powerCount：{{ this.$store.getters.powerCount }}</p>
    <p>doneTodos：{{ this.doneTodos }}</p>
    <p>doneTodosLength：{{ this.doneTodosLength }}</p>
    <p>getId：{{ this.getId(2) }}</p>
  </div>
  <div>
    <h3>3、Mutations</h3>
    <button @click="this.$store.commit('increment')">Count + 1</button>
    <button @click="addCount">Count + 1</button>
    <p>{{ this.$store.state.students }}</p>
    <button @click="addStudent">Students push</button>
  </div>
  <div>
    <h3>4、Action</h3>
    <p>{{ this.$store.state.actionInfo }}</p>
    <button @click="changeInfo">Change actionInfo</button>
  </div>
  <div>
    <h3>5、命名空间的测试</h3>
    <p>this.$store.state.b.str： {{ this.$store.state.b.str }}</p>
    <p>
      测试1：不开启命名空间时模块的内部的 action 和 mutation 和 Getter
      是否注册在全局命名空间的。
    </p>
    <p>结果：是的</p>
    <button @click="this.$store.commit('changeStr')">changeStr</button>
    <p>测试2：开启命名空间后能否正确调用方法</p>
    <p>this.$store.commit('account/login')</p>
    <button @click="this.$store.commit('account/login')">account/login</button>
    <button @click="this.$store.commit('account/showPage')">
      account/showPage
    </button>
    <button @click="this.$store.commit('account/posts/popular')">
      account/posts/popular
    </button>
  </div>
</template>

<script>
import { INCREMENT } from './store/mutations-types'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'index',
  computed: {
    ...mapState({
      // 箭头函数可使代码更简练
      count: state => state.count,

      // 传字符串参数 'count' 等同于 `state => state.count`
      countAlias: 'count',

      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState(state) {
        return state.count + 10
      },
    }),
    ...mapGetters(['powerCounter', 'doneTodos', 'doneTodosLength']),
    ...mapGetters({
      // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
      getId: 'getTodoById',
    }),
  },
  methods: {
    addCount() {
      this.$store.commit(INCREMENT)
    },
    addStudent() {
      const stu = { id: 114, name: 'alan', age: 30 }
      // 普通参数传递
      this.$store.commit('addStudent', stu)
      // 使用对象传递
      this.$store.commit({
        type: 'addStudent',
        stu,
      })
    },
    changeInfo() {
      this.$store.dispatch('aUpdateInfo', '我是参数').then(res => {
        console.log(res)
      })
    },
  },
}
</script>

<style scoped></style>
