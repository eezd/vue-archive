export default {
  // payload 是那边传来的参数
  aUpdateInfo(context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('updateActionInfo')
        console.log(payload)
        resolve('OK')
      }, 1000)
    })
  },
}
