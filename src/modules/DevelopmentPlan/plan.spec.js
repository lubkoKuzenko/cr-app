import React from 'react';
import { HashRouter } from 'react-router-dom'
import DevelopmentPlan from './plan';
import { mockStore, renderComponent } from '../../helpers/testHelper'

describe('<DevelopmentPlan />', () => {
  it('renders without crashing', () => {
    const state = {}
    let component = renderComponent(DevelopmentPlan, state);
    expect(component.find("#preloader")).toHaveLength(1)
  });

  it('renders without crashing', () => {
    const state = {
        todos: [{
            name: "test"
        },{
            name: "test2"
        }]
    }
    
    let component = renderComponent(DevelopmentPlan, state);
    expect(component.find("#list1")).toHaveLength(1)
  });
})
