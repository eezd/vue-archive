import { createStore } from 'vuex'

import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import moduleA from './modules/moduleA'

const state = () => {
  return {
    count: 1,
    todos: [
      { id: 1, text: 'todosText1', done: true },
      { id: 2, text: 'todosText2', done: false },
      { id: 3, text: 'todosText3', done: true },
    ],
    students: [
      { id: 1, text: 'wahaha', age: 18 },
      { id: 2, text: 'zhangsan', age: 25 },
    ],
    actionInfo: 'actionInfo',
  }
}

export default createStore({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA,
    b: {
      state: { str: 'mystr' },
      mutations: {
        changeStr(state) {
          state.str = 'changeStr'
        },
      },
      actions: {},
      getters: {},
    },
    // 命名空间
    // 模块 account
    account: {
      namespaced: true,
      state: () => {},
      getters: {
        isAdmin() {}, // -> getters['account/isAdmin']
      },
      actions: {
        login() {}, // -> dispatch('account/login')
      },
      mutations: {
        login() {
          alert("commit('account/login')")
        }, // -> commit('account/login')
      },
      modules: {
        page: {
          mutations: {
            showPage() {
              alert("commit('account/showPage')")
            }, // -> commit['account/showPage']
          },
        },
        // 进一步嵌套命名空间
        posts: {
          namespaced: true,
          mutations: {
            popular() {
              alert("commit('account/posts/popular')")
            }, // -> commit['account/posts/popular']
          },
        },
      },
    },
  },
})
