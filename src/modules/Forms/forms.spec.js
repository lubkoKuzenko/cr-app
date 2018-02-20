import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Forms from './forms';
import { mockStore, renderComponent } from '../../helpers/testHelper'

describe('<Forms />', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(Forms);
    });

    it('renders Forms container without crashing', () => {
        expect(component).to.exist;
    });

    it('Renders header with text', () => {
        expect(component.find('h2').text()).to.eql('React Forms');
    });

    it('Renders header with text', () => {
        expect(component.find('SimpleForm')).to.exist;
    });
})