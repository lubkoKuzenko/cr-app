import { SAVE_USERS } from '../userList.actions'

const initialState = null

const userlist = (state = initialState, action) => {
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

export default userlist