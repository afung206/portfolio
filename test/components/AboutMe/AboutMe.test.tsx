import * as React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { AboutMe } from '../../../src/components/AboutMe/AboutMe';

describe('AboutMe', () => {
    it('should render the AboutMe Section', () => {
        const subject = shallow(<AboutMe/>);

        expect(subject).to.exist;
    });

    it('should contain some information about myself', () => {
        const subject = shallow(<AboutMe/>);
        const aboutMeContent = subject.find('.AboutMe-Message');

        expect(aboutMeContent).to.exist;
        expect(aboutMeContent.length).to.be.greaterThan(0);
        expect(aboutMeContent.text()).to.contain('Aaron Fung');
    });
});
