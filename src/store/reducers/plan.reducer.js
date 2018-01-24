import { TODOS } from '../actions.const'

const initialState = {}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
  case TODOS:
    return {
      ...state,
      ...action.payload
    }
  default:
    return state
  }
}

export default todosReducer