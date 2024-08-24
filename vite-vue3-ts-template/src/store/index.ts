import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      title: 'hello Main Store',
      count: 1,
      obj: {
        id: 1,
        name: 'Tom',
      },
    }
  },
  getters: {
    doubleCount: (state) => {
      return state.count * 2
    },
  },
  mutations: {
    increment(state) {
      state.count++
    },
    addCount(state, newCount) {
      state.count += newCount
    },
  },
  actions: {
    updateCount(context, newCount) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // 运行 mutations.addCount 方法
          context.commit('addCount', newCount)
          resolve('OK')
        }, 1000)
      })
    },
    // 通过参数解构简化代码
    checkout({ commit, state }, products) {},
  },
})
