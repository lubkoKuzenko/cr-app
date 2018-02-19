import React from 'react';
import { HashRouter } from 'react-router-dom'
import { shallow } from 'enzyme';
import { App } from '../modules';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<HashRouter><App/></HashRouter>);
  });
})
