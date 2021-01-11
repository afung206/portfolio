import * as React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { PortfolioPage } from './PortfolioPage';

describe('PortfolioPage', () => {
    it('should render the Portfolio page', () => {
        const subject = shallow(<PortfolioPage/>);
        expect(subject).to.exist();
    });

});