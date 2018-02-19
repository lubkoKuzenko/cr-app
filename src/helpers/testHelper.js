/** React Specific */
import * as React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import rootReducer from '../store/rootReducer';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const fetchMock = require('fetch-mock');

function renderComponent(ComponentClass) {
  /** Redux Mock Store Configuration */
  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
  const enhancer = composeEnhancers(applyMiddleware(thunk))
  const store = createStore(rootReducer, enhancer)

  return mount(
    <Provider store={store}>
        <Router>
            <ComponentClass {...props} />
        </Router>
    </Provider>,
  );
}

export { fetchMock, renderComponent };