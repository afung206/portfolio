import * as React from 'react';
import {FunctionComponent} from 'react';
import {HomePage} from './HomePage';

const PortfolioPageContent: FunctionComponent = () => {

    return (
        <div className='HomePage'>
            <HomePage welcomeMessage='Welcome!'/>
        </div>
    );
};

export const PortfolioPage = PortfolioPageContent;