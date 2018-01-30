import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { usersReducer, todosReducer, stackReducer, loginReducer } from './reducers'

const rootReducer = combineReducers({
  users: usersReducer,
  form: formReducer,
  todos: todosReducer,
  stack: stackReducer,
  login: loginReducer
})

export default rootReducer