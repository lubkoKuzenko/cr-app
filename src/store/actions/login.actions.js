import decode from 'jwt-decode'

import { LOG_IN, LOG_OUT } from '../actions.const'

export const login = (values) => dispatch => {
  setTimeout(() => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ";

    localStorage.setItem('jwtToken', token)
    dispatch({ type: LOG_IN, payload: decode(token) })
  }, 500)
}

export const logout = () => dispatch => {
  localStorage.removeItem('jwtToken')
  return dispatch({ type: LOG_OUT, payload: [] })
}