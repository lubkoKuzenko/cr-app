import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Footer } from './footer';

describe('<Footer />', () => {
    it('renders without crashing', () => {
        shallow(<Footer />);
    });

    it('renders an `.text-muted`', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.contains(<span class="text-muted">Application Footer</span>)).to.equal(true);
    });

    it('renders an `.container`', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('.container')).to.have.length(1);
    });
})