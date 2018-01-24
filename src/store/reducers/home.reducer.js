import { STACK } from './../actions'

const initialState = {}

const stackReducer = (state = initialState, action) => {
  switch (action.type) {
  case STACK:
    return {
      ...state,
      ...action.payload
    }
  default:
    return state
  }
}

export default stackReducer