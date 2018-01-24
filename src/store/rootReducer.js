import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import userlist from './reducers/userList.reducer'
import activeUser from './reducers/activeUser.reducer'
import todosReducer from './reducers/plan.reducer'
import stackReducer from './reducers/home.reducer'
import loginReducer from './reducers/login.reducer'

const rootReducer = combineReducers({
  userlist,
  activeUser,
  form: formReducer,
  todos: todosReducer,
  stack: stackReducer,
  login: loginReducer
})

export default rootReducer