import Http from '../../http.service'

import { SAVE_USERS, ACTIVE_USER } from '../actions.const'

// async action
export const getUsers = () => dispatch => {
  Http.get('https://swapi.co/api/people/').then(userlist => {
    dispatch({
      type: SAVE_USERS,
      payload: userlist.results
    })
  })
}

// normal action
export function selectUser(activeUser) {
  return {
    type: ACTIVE_USER,
    payload: activeUser
  }
}