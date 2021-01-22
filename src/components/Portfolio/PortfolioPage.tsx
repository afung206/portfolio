import * as React from 'react';
import { FunctionComponent } from 'react';
import { HomePage } from '../Home/HomePage';
import { Navbar } from 'react-bootstrap';
import { ProjectSection } from '../Projects/ProjectSection';

export const PortfolioPage: FunctionComponent = () => {

    return (
        <>
            <div className='HomePage'>
                <HomePage welcomeMessage='Welcome!' />
            </div>
            <Navbar bg="light">
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Brand href="#Biography">Bio</Navbar.Brand>
                <Navbar.Brand href="#WorkHistory">Work History</Navbar.Brand>
                <Navbar.Brand href="#Projects">Projects</Navbar.Brand>
            </Navbar>
            <ProjectSection/>
        </>
    );
};