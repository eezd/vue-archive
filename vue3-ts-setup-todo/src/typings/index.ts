interface ITodo {
  id: number
  content: string
  status: TODO_STATUS
}

enum TODO_STATUS {
  WILLDO = 'willdo',
  DOING = 'doing',
  FINISHED = 'finished',
}

// 规范 store/state
interface IState {
  list: ITodo[]
}

export { ITodo, IState, TODO_STATUS }
