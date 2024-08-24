import { defineStore } from 'pinia'

const useMainStore = defineStore('main', {
  state: () => ({
    title: 'hello Main Store',
    count: 1,
    obj: {
      id: 1,
      name: 'Tom',
    },
  }),
  getters: {
    doubleCount: (state) => state.count * 2,

    // 返回一个函数接收参数
    addCount:
      (state) =>
      (sum: number): number =>
        (state.count += sum),
  },
  actions: {
    increment() {
      this.count++
    },
    changeTitle(newTitle: any) {
      this.title = newTitle
    },
    // async registerUser(login, password) {
    //   try {
    //     this.userData = await api.post({ login, password })
    //     showTooltip(`Welcome back ${this.userData.name}!`)
    //   } catch (error) {
    //     showTooltip(error)
    //     // let the form component display the error
    //     return error
    //   }
    // },
  },
  // 持久化
  // persist: true,
  // persist: {
  //   storage: sessionStorage,
  // },
})

export default useMainStore
