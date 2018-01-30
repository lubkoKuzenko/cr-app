import { SAVE_USERS, ACTIVE_USER } from '../actions.const'

const initialState = {
  activeUser: null,
  users: null
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_USERS:
    return {
      activeUser: state.activeUser,
      users: action.payload
    };
  case ACTIVE_USER:
    return {
      activeUser: action.payload,
      users: state.users
    };
  default:
    return state
  }
}

export default usersReducer