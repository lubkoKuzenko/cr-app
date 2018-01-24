import { SAVE_USERS } from '../actions.const'

const initialState = null

const userlistReducer = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_USERS:
    return {
      ...state,
      ...action.payload
    }
  default:
    return state
  }
}

export default userlistReducer