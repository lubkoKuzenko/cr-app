import { ACTIVE_USER } from '../actions.const'

const initialState = {}

const activeUserReducer = (state = initialState, action) => {
  switch (action.type) {
  case ACTIVE_USER:
    return action.payload
  default:
    return state
  }
}

export default activeUserReducer