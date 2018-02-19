import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { Header } from '../components';
import { mockStore, renderComponent } from '../helpers/testHelper'

describe('<Header />', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(Header);
    });

    it('renders without crashing', () => {
        expect(component).to.exist;
    });

    it('renders an `.navbar-collapse`', () => {
        expect(component.find('.navbar-collapse')).to.have.length(1);
    });

    it('renders an `#logout`', () => {
        component.find('Button').simulate('click');

        expect(component.find('#logout')).to.exist;
    })
})