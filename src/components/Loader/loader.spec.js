import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Loader } from './loader';

describe('<Loader />', () => {
    it('renders without crashing', () => {
        shallow(<Loader />);
    });

    it('renders an `#loader`', () => {
        const wrapper = shallow(<Loader />);
        expect(wrapper.find('#loader')).to.have.length(1);
    });
})