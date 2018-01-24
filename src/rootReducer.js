import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import userlist from './containers/Userlist/reducers/userList.reducer'
import activeUser from './containers/Userlist/reducers/activeUser.reducer'
import todosReducer from './containers/DevelopmentPlan/plan.reducer'
import stackReducer from './containers/Home/home.reducer'
import loginReducer from './containers/Login/login.reducer'

const rootReducer = combineReducers({
  userlist,
  activeUser,
  form: formReducer,
  todos: todosReducer,
  stack: stackReducer,
  login: loginReducer
})

export default rootReducer