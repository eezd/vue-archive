import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import {
  ElNotification,
  ElMessageBox,
  ElMessage,
  ElLoading,
} from 'element-plus'
import errorCode from './errorCode'
// import NProgress from 'nprogress'

// 是否显示重新登录
// eslint-disable-next-line prefer-const
export let isRelogin = { show: false }

// 如果请求花费了超过 `timeout` 的时间，请求将被中断
axios.defaults.timeout = 5000
// 表示跨域请求时是否需要使用凭证
// axios.defaults.withCredentials = false
// 允许跨域
// axios.defaults.headers.post['Access-Control-Allow-Origin-Type'] = '*'
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

// 响应拦截
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 未设置状态码则默认成功状态
    const code: number = response.data.code || 200

    // 获取错误信息
    const msg = errorCode[code] || response.data.msg || errorCode['default']

    // 二进制数据则直接返回
    if (
      response.request.responseType === 'blob' ||
      response.request.responseType === 'arraybuffer'
    ) {
      return response.data
    }

    if (code === 401) {
      if (!isRelogin.show) {
        isRelogin.show = true
        ElMessageBox.confirm(
          '登录状态已过期，您可以继续留在该页面，或者重新登录',
          '系统提示',
          {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning',
          },
        )
          .then(() => {
            isRelogin.show = false
            // useUserStore()
            //   .logOut()
            //   .then(() => {
            //     location.href = '/index'
            //   })
          })
          .catch(() => {
            isRelogin.show = false
          })
      }
      return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
    } else if (code === 500) {
      ElMessage({ message: msg, type: 'error' })
      return Promise.reject(new Error(msg))
    } else if (code === 601) {
      ElMessage({ message: msg, type: 'warning' })
      return Promise.reject(new Error(msg))
    } else if (code !== 200) {
      ElNotification.error({ title: msg })
      return Promise.reject('error')
    }
    return Promise.resolve(response.data)
  },
  // 请求失败
  (error: any) => {
    const { response } = error
    if (response) {
      return Promise.reject(response.data)
    }
  },
)

export default axiosInstance
// export type { AxiosInstance, AxiosResponse }
