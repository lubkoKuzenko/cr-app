import Http from '../../http.service'

export const SAVE_USERS = 'SAVE_USERS';
export const ACTIVE_USER = 'ACTIVE_USER';

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