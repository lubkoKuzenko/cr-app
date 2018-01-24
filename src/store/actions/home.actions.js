import { stack } from '../../containers/Home/stack.const'
import { STACK } from '../actions.const'

export const initStack = () => dispatch => {
  setTimeout(()=>{
    dispatch({
      type: STACK,
      payload: stack
    })
  }, 500)
}