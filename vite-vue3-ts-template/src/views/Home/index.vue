<template>
  <div class="home">
    <p>{{ count }}</p>
    <p>{{ countAlias }}</p>
    <p>{{ countPlusLocalState }}</p>
    <button @click="show">show</button>

    <!-- state -->
    <p>count: {{ this.$store.state.count }}</p>

    <!-- Getter -->
    <p>doubleCount: {{ this.$store.getters.doubleCount }}</p>
    <p>doubleCount2: {{ doubleCount2 }}</p>

    <!-- Mutations -->
    <button @click="this.$store.commit('increment')">increment</button>
    <button @click="this.$store.commit('addCount', 10)">addCount</button>
    <br />
    <button @click="increment">mapMutations-increment</button>
    <button @click="add(10)">mapMutations-addCount</button>

    <!-- Action -->
    <button @click="this.$store.dispatch('updateCount', 100)">
      updateCount
    </button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Home',
  mounted() {},
  methods: {
    ...mapMutations(['increment']),
    ...mapMutations({
      add: 'addCount',
    }),
  },
  computed: {
    ...mapState({
      // 箭头函数可使代码更简练
      count: (state) => state.count,

      // 设置 count 别命
      countAlias: 'count',

      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState(state) {
        return state.count + 10
      },
    }),
    ...mapGetters({
      // 把 `this.doubleCount2` 映射为 `this.$store.getters.doubleCount`
      doubleCount2: 'doubleCount',
    }),
  },
  // 映射 this.count 为 store.state.count
  // computed: mapState(['count']),
  watch: {},
  components: {},
}
</script>
