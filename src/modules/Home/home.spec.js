import React from 'react';
import { HashRouter } from 'react-router-dom'
import Home from './home';
import { mockStore, renderComponent } from '../../helpers/testHelper'
import {stack} from './stack.const'

describe('<Home />', () => {
  it('renders without crashing and data is empty', () => {
    const state = { stack: [] }
    let component = renderComponent(Home, {...state});
    expect(component.find("#preloader")).toHaveLength(1)
  });

  it('renders data without crashing', () => {
    const state = { stack }
    
    let component = renderComponent(Home, {...state});
    expect(component.find("Tabs")).toHaveLength(1)
  });
})
