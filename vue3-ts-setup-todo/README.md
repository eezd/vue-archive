# vue3-ts-setup-todo


使用vue3-cli+vuex+typescript+setup编写的一个列表操作,增删改


## 目录结构

> - src
>   - components：组件
>     - todo：输入框
>       - index.vue
>       - TodoInput.vue
>       - TodoItem.vue
>   - hooks
>     - todo.ts。列表操作方法
>   - store
>     - actions.ts
>     - actionTypes.ts
>     - index.ts
>     - mutations.ts
>     - state.ts
>   - typings：数据构成

- 我想要一个可以实现增删改的列表，列表中的数据包含三种状态：未完成、正在完成、已完成。
- 数据存放在浏览器缓存中。



- 添加数据流程
  - 1、点击按钮添加数据
  - 2、调用Hooks的addTodoItem方法
  - 3、addTodoItem方法将数据传递给Actions
  - 4、Actions在将数据传递给Mutations
  - 5、Mutations最后将数据反馈打store里



#### typings/index.ts

- ITodo：数据属性->包含ID、内容和状态（状态用来判断是否完成
- IState：**列表**
- TODO_STATUS：一共有三种状态，未完成，正在完成，已完成。
- 最后导出



#### todo/TodoItem.vue

`components/todo/TodoItem.vue`

- 移除和更改状态很简单因此不做说明
- 修改数据：
  - `changeStatus`：用于判断当前数据是否需要修改，如是则为true,显示文本框出来。
  - `changeItemContent`：绑定输入框的数据
  - `changeConnent()`：修改数据,同时判断数据是否有做修改。


