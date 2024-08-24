import { INCREMENT } from './mutations-types'

export default {
  [INCREMENT](state) {
    state.count++
  },
  addStudent: (state, stu) => {
    state.students.push(stu)
  },
  updateActionInfo(state) {
    state.actionInfo = 'updateActionInfo'
  },
}
