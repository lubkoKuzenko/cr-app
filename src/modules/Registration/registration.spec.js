import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Registration from './registration';
import { mockStore, renderComponent } from '../../helpers/testHelper'

describe('<Registration />', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(Registration);
    });

    it('renders Registration container without crashing', () => {
        expect(component).to.exist;
    });

    it('Renders header with text', () => {
        expect(component.find('h1').text()).to.eql('Registration');
    });
})