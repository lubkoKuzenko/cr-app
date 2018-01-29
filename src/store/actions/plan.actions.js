import { todos } from '../../modules/DevelopmentPlan/todos.const'
import { TODOS } from '../actions.const'

export const initTodoList = () => dispatch => {
  setTimeout(()=>{
    dispatch({
      type: TODOS,
      payload: todos
    })
  }, 500)
}