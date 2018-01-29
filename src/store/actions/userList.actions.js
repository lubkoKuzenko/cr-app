// import Http from '../../http.service'

import { SAVE_USERS, ACTIVE_USER } from '../actions.const'

function doSomething() {
  return dispatch => 
    fetch(
      'https://swapi.co/api/people/'
    ).then(
      response => response.json()
    )
}

function doSomethingElse() {
  return dispatch => 
    fetch(
      'https://swapi.co/api/planets/3/'
    ).then(
      response => response.json()
    )
}

// async action
export const getUsers = () => dispatch => {
  // Http.get('https://swapi.co/api/people/').then(userlist => {
  //   dispatch({
  //     type: SAVE_USERS,
  //     payload: userlist.results
  //   })
  // })

  Promise.all([
    dispatch(doSomething()),
    dispatch(doSomethingElse())
  ]).then((data) => {
      console.log(data)
      dispatch({
        type: SAVE_USERS,
        payload: data[0].results
      })
  });
}

// normal action
export function selectUser(activeUser) {
  return {
    type: ACTIVE_USER,
    payload: activeUser
  }
}