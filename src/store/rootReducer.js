import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { userlistReducer, activeUserReducer, todosReducer, stackReducer, loginReducer } from './reducers'

const rootReducer = combineReducers({
  userlist: userlistReducer,
  activeUser: activeUserReducer,
  form: formReducer,
  todos: todosReducer,
  stack: stackReducer,
  login: loginReducer
})

export default rootReducer