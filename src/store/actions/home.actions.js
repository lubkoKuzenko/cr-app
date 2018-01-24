import { stack } from '../../containers/Home/stack.const'
export const STACK = 'STACK'

export const initStack = () => dispatch => {
  setTimeout(()=>{
    dispatch({
      type: STACK,
      payload: stack
    })
  }, 500)
}