import React from 'react';
import { HashRouter } from 'react-router-dom'
import App from './app';
import { mockStore, renderComponent } from '../../helpers/testHelper'

describe('<App />', () => {
  let component;

  beforeEach(() => {
      component = renderComponent(App);
  });

  it('renders without crashing', () => {
      expect(component).toBeDefined();
  });

  it('renders an `.App`', () => {
      expect(component.find('.App')).toBeDefined();
  });
})
