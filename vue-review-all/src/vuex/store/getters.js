export default {
  // 1、简单的计算属性
  powerCount: state => {
    return state.count * 2
  },
  // 2、遍历对象
  doneTodos: state => {
    return state.todos.filter(todo => todo.done)
  },
  // 3、访问计算属性的方法
  doneTodosLength: (state, getters) => {
    return getters.doneTodos.length
  },
  // 4、返回函数实现传参
  getTodoById: state => id => {
    return state.todos.find(todo => todo.id === id)
  },
}
