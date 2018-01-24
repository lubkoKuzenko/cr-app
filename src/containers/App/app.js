import './style.css'
import React, { Component } from 'react'
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Footer, Header } from '../../components'
import { Login, Registration } from '../'
import { routes } from "../../routes"
import store from '../../store/store'

export default class App extends Component {
  render() {
    const RouteWithSubRoutes = route => (
      <Route exact={route.exact || false} path={route.path} render={props => (
        localStorage.getItem('jwtToken') ? (
          <route.component {...props} routes={route.routes || null} />
        ) : (
          <Redirect to={{ pathname: '/login' }}/>
        )        
      )}/>
    );

    return <Provider store={store}>
        <Router>
        <div class="App">
          <Header />
          <div class="main-container container mt-2 mb-2">
            <Switch>
              <Route exact path="/login" render={props => <Login />} />
              <Route exact path="/registration" render={props => <Registration />} />
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Switch>
          </div>
          <Footer class="footer" />
        </div>
      </Router>
    </Provider>
  }
}
