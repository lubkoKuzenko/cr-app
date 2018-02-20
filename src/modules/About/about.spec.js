import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import About from './about';
import { mockStore, renderComponent } from '../../helpers/testHelper'

describe('<About />', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(About);
    });

    it('renders About container without crashing', () => {
        expect(component).to.exist;
    });

    it('Renders header with text', () => {
        expect(component.find('h1.modal-title').text()).to.eql('Modal');
    });

    it('Renders header with text', () => {
        expect(component.find('h1.maps-title').text()).to.eql('Google Map');
    });

    it('Renders header with text', () => {
        expect(component.find('h1.charts-title').text()).to.eql('Chart (recharts)');
    });

    it('renders About container with `GoogleMap` block', () => {
        expect(component.find('GoogleMap')).to.exist;
    })

    it('renders About container with `LineChart` block', () => {
        expect(component.find('LineChart')).to.exist;
    })

    it('test click handler on About container', () => {
        component.find('h1.modal-title + Button').simulate('click');
        expect(component.find('Modal').props().isOpen).to.be.true;

        component.find('h1.modal-title + Button').simulate('click');
        expect(component.find('Modal').props().isOpen).to.be.false;
    })
})