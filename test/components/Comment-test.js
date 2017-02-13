import React from 'react';
import {expect} from 'chai';
import _ from 'lodash';
import sinon from 'sinon';
import {shallow, mount, render} from 'enzyme';
import Comment from '../../app/components/Comment';

describe("<Comment />", () => {

    const defaultProps = {
        params: {
            postId: "BAcyDyQwcXX"
        },
        handlers: {
            removeComment: () => { },
            addComment: () => { }
        },
        userComments: {
            "BAhvZrRwcfu": [
                {
                    "text": "Totally need to try this.",
                    "user": "heavymetaladam"
                }
            ],
            "BAcyDyQwcXX": [
                {
                    "text": "Wes. WE should have lunch.",
                    "user": "jdaveknox"
                },
                {
                    "text": "#adults",
                    "user": "jdaveknox"
                }
            ]
        }

    }


    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Comment {...defaultProps} />)
    })

    it("should have one div with class comment containing form and comments", ()=> {
        let div = wrapper.find("div");
        expect(div.hasClass("comment")).to.be.equal(true);
        expect(div.find("form")).to.have.length(1)

        let inputs = div.find("form").find("input");
        expect(inputs).to.have.length(3);

        expect(inputs.nodes[0].ref).to.be.equal("author");
        expect(inputs.nodes[0].props.type).to.be.equal("text");
        expect(inputs.nodes[0].props.placeholder).to.be.equal("author");

        expect(inputs.nodes[1].ref).to.be.equal("comment");
        expect(inputs.nodes[1].props.type).to.be.equal("text");
        expect(inputs.nodes[1].props.placeholder).to.be.equal("comment");

        expect(inputs.nodes[2].props.type).to.be.equal("submit");
    });

});

