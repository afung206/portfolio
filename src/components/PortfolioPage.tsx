import * as React from 'react';
import {HomePage} from './Home/HomePage';
import {PortfolioSection} from './PortfolioSection'
import {Navbar} from 'react-bootstrap';

const PortfolioPageContent: React.FunctionComponent = () => {

    return (
        <>
            <div className='HomePage'>
                <HomePage welcomeMessage='Welcome!'/>
            </div>
            <Navbar bg="light">
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Brand href="#Biography">Bio</Navbar.Brand>
                <Navbar.Brand href="#WorkHistory">Work History</Navbar.Brand>
                <Navbar.Brand href="#Projects">Projects</Navbar.Brand>
            </Navbar>
            <PortfolioSection portfolioName="Biography"></PortfolioSection>
            <PortfolioSection portfolioName="Work History"></PortfolioSection>
            <PortfolioSection portfolioName="Projects"></PortfolioSection>
        </>
    );
};

export const PortfolioPage = PortfolioPageContent;