import * as React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { HomePage } from '../../../src/components/Home/HomePage';

describe('HomePage', () => {

    beforeEach(() => {});

    it('should render the HomePage', () => {
        const welcomeMessageProp = {
            welcomeMessage: 'Test!'
        };
        const subject = shallow(<HomePage {...welcomeMessageProp} />);

        expect(subject).to.exist;
    });

    it('should display the welcome message provided in props', () => {
        const welcomeMessageProp = {
            welcomeMessage: 'Test!'
        };
        const subject = shallow(<HomePage {...welcomeMessageProp} />);
        const actualWelcomeMessage = subject.find('.homepage').text();

        expect(actualWelcomeMessage).to.equal(welcomeMessageProp.welcomeMessage);
    });

    
    it('should display no qoute if api call failed or returned nothing', () => {
        const welcomeMessageProp = {
            welcomeMessage: 'Test!'
        };
        const subject = shallow(<HomePage {...welcomeMessageProp} />);

        const actualQouteMessage = subject.find('.qoute');

        expect(actualQouteMessage).to.be.empty;
    });
});