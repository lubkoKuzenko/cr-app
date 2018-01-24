import { ACTIVE_USER } from '../userList.actions'

const initialState = {}

const activeUser = (state = initialState, action) => {
  switch (action.type) {
  case ACTIVE_USER:
    return action.payload
  default:
    return state
  }
}

export default activeUser