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

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

function renderComponent(ComponentClass, preloadedState, props) {
  /** Redux Mock Store Configuration */
  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
  const enhancer = composeEnhancers(applyMiddleware(thunk)),
        store = createStore(rootReducer, preloadedState, enhancer)

  return mount(
    <Provider store={store}>
        <Router>
            <ComponentClass {...props} />
        </Router>
    </Provider>,
  );
}

export { mockStore, fetchMock, renderComponent };