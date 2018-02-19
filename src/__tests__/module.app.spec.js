import React from 'react';
import { HashRouter } from 'react-router-dom'
import { shallow } from 'enzyme';
import { App } from '../modules';

it('renders without crashing', () => {
  shallow(<HashRouter><App/></HashRouter>);
});