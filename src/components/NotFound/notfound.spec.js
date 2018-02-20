import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { NotFound } from './notfound';

describe('<NotFound />', () => {
    it('renders without crashing', () => {
        shallow(<NotFound />);
    });

    it('renders an `.jumbotron`', () => {
        const wrapper = shallow(<NotFound />);
        expect(wrapper.find('.jumbotron')).to.have.length(1);
    });
})