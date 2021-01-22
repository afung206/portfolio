import * as React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { ProjectSection } from '../../../src/components/Projects/ProjectSection';

describe('Project Section', () => {

    it('should render the Project Section', () => {
        const subject = shallow(<ProjectSection/>);

        expect(subject).to.exist;
    });

    it('should import the git hub logo', () => {
        const subject = shallow(<ProjectSection/>);
        const expectedLogo = subject.find('.gitHubIcon');

        expect(expectedLogo).to.exist;
    });
});