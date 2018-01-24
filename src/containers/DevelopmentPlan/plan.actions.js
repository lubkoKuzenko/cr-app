import { todos } from './todos.const'
export const TODOS = 'TODOS'

export const initTodoList = () => dispatch => {
  setTimeout(()=>{
    dispatch({
      type: TODOS,
      payload: todos
    })
  }, 500)
}