import * as React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { PortfolioPage } from '../../../src/components/Portfolio/PortfolioPage';
import { HomePage } from '../../../src/components/Home/HomePage';

describe('PortfolioPage', () => {
    it('should render the page', () => {
        const subject = shallow(<PortfolioPage/>);
        expect(subject).to.exist;
    });


    it('should render Home Page', () => {
        const subject = shallow(<PortfolioPage/>);
        const homePage = subject.find(HomePage);

        expect(homePage).to.exist;
    });
});