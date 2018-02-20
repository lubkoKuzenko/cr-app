import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Login from './login';
import { mockStore, renderComponent } from '../../helpers/testHelper'

describe('<Login />', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(Login);
    });

    it('renders Login container without crashing', () => {
        expect(component).to.exist;
    });
})