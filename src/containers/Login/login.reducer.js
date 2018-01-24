import { LOG_IN, LOG_OUT } from './login.actions'

const initialState = {
  isAuthenticated: false,
  user: {}
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
  case LOG_IN:
    return {
      isAuthenticated: true,
      user: action.payload
    }
  case LOG_OUT:
    return initialState
  default:
    return state
  }
}

export default loginReducer