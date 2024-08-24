# vite-vue3-ts-template

说明：个人用 vue3 模板，偏向小项目，非企业级模板，后续会补说明文档。

---

更新日志

- 2024/07/11

  - 优化 vite 配置, 添加 element 按需添加和自定义主题

- 2023/02/28

  - 删除所有冗余内容, 简化项目。

- 2022/11/03

  - 每个文件新增注释, 说明用途和用法.

- 2022/09/19

  - 改了下 UI 加了点动画

- 2022/09/09
  - 简易版，能用了
- 2022/09/07

  - 初版，实现了简单模板，待优化。

  ***

文件夹说明

- api 统一管理 axios 请求接口
- assets 静态目录
- components 组件
- composables 组合
  - 放置 生命周期函数、vueuse 的使用等
- hooks 钩子, 函数实现
- router 路由
- store 状态管理
- styles

  - element：自定义主题
  - `index.scss`：通用样式
  - `variable.scss`: 全局变量

- utils 工具
  - axios 封装插件
- views 视图

```sh
pnpm i
pnpm dev
```



## 使用方法

### element 样式

- `src/styles/index.scss`：全局样式
- `src/styles/variables.scss`：全局变量
  - 请以 `gVariable.$变量名称` 方式使用
- `src/styles/element/index.scss`：修改默认样式
- `src/styles/element/dark.scss`：修改黑暗主题默认样式

```html
<!-- 全局变量 -->

<style lang="scss">
.app {
  color: gVariable.$red;
}
</style>
```



### axios 封装说明

- `src/utils/axios/index.ts`
  - 1、注意修改：`baseURL`，**在第16行**
  - 2、我在下面封装了 `GET、POST、DELETE、PUT` 方法，如果需要做 **日志** 可以按需修改。
- `src/utils/axios/type.ts`
  - 请求参数的格式

```ts
const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  // 它只能用于 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // transformRequest: [
  //   function (data) {
  //     //由于使用的 form-data传数据所以要格式化
  //     delete data.Authorization
  //     data = qs.stringify(data)
  //     return data
  //   },
  // ],
})
```



```ts
export function get<T = any>(config: AxiosRequestConfig): Promise<T> {
  return request({ ...config, method: 'GET' })
}

export function post<T = any>(config: AxiosRequestConfig): Promise<T> {
  return request({ ...config, method: 'POST' })
}

export function del<T = any>(config: AxiosRequestConfig): Promise<T> {
  return request({ ...config, method: 'DELETE' })
}

export function put<T = any>(config: AxiosRequestConfig): Promise<T> {
  return request({ ...config, method: 'PUT' })
```



### axios 使用手册

```ts
// src/api/dangdang/index.ts

import { get } from 'src/utils/axios'
import { IResponse } from 'src/utils/axios/type'

import { DDQueryDto } from './types'

// 要注意区分，params 和 data 两种参数传递
const getDD = async (params?: DDQueryDto) => get<IResponse>({ url: '/dangdang', params })
export { getDD }
```



```ts
// src/api/dangdang/types.ts

export interface DDQueryDto {
  id?: number
  searchAuthor?: string
  searchTitle?: string
  random?: number
}
```



```ts
import { getDD } from 'src/api/dangdang'

getDD().then((res) => {
  console.log(res)
})
```



### pinia

- 代码里有模板这里不再赘述
- 需要注意，将模块统一导入在 `src/store/index.ts` 文件内

下面演示下使用

```ts
// useMainStore 是模块名
import { useMainStore } from 'src/store'
// 实例化
const mainStore = useMainStore()
// 使用
mainStore.title
```



### router

- 统一在 `router/root.ts` 文件内设置路由
- `router/index.ts` 设置回调

