import * as React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { NavBar } from '../../../src/components/NavBar/NavBar';

describe('NavBar', () => {

    beforeEach(() => {});

    it('should render the NavBar', () => {
        const navItem: string[] = [
            'Home',
        ];
        const subject = shallow(<NavBar navItems={navItem} />);

        expect(subject).to.exist;
    });

    it('should display the expected number of NarBar items', () => {
        const navItem: string[] = [
            'Home',
            'AboutMe',
            'Links',
        ];
        const subject = shallow(<NavBar navItems={navItem} />);
        const navBarItems = subject.find('.navBar-navItem');

        expect(navBarItems).to.have.length(3);
    })
});