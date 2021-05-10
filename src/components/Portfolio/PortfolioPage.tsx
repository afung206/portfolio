import * as React from 'react';
import { FunctionComponent } from 'react';
import { HomePage } from '../Home/HomePage';
import { NavBar } from '../NavBar/NavBar';
import { ProjectSection } from '../Projects/ProjectSection';
import { AboutMe } from '../AboutMe/AboutMe';
import { WorkHistory } from '../WorkHistory/WorkHistory';
import { ContactInfo } from '../Contact/ContantInfo';
import './PortfolioPage.scss';

export const PortfolioPage: FunctionComponent = () => {

    const navItems: string[] = [
        'Home', 
        'About Me', 
        'Work History', 
        'Projects',
        'Contact',];

    return (
        <>
            <HomePage welcomeMessage='Welcome to my Portfolio Website!' />
            <NavBar navItems={navItems}/>
            <AboutMe/>
            <WorkHistory/>
            <ProjectSection/>
            <ContactInfo/>
        </>
    );
};