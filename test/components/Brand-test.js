import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Brand from '../../app/components/Brand';


describe("<Brand />", () =>{
    let wrapper;
    it('should correctly display the anchor tag wrapped in h1 tag', () => {
        wrapper = shallow(<Brand/>);
        expect(wrapper.type()).to.equal('h1');
        expect(wrapper.hasClass('brand')).to.equal(true);

        let anchor = wrapper.childAt(0);
        expect(anchor.type()).to.equal('a');
        expect(anchor.text()).to.equal("Reactgram");
        expect(anchor.props().href).to.equal("/app");
    });

});


