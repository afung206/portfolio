import * as React from 'react';
import { useState, FunctionComponent, ReactNode } from 'react';
import './WorkHistory.scss';

export const WorkHistory: FunctionComponent = () => {
    return (
        <>
            <div className='WorkHistory-Header' id="WorkHistory">Work History</div>
            <div className='workHistoryContent'>
                {
                    workHistoryInfoList.map((workItem: WorkHistoryItem, i) => {
                        return <WorkHistoryInfo {...workItem} key={i} />;
                    })
                }
            </div>
        </>
    );
};

interface WorkHistoryItem {
    title: string;
    company: string;
    location: string;
    date: string;
    overview?: string;
    description: ReactNode[];
}

type Props = WorkHistoryItem;

const WorkHistoryInfo: FunctionComponent<WorkHistoryItem> = (props: Props) => {

    const generateWorkOverview = () => {
        if (props.overview) {
            return (
                <div className='workHistory-overview'>
                    {props.overview}
                </div>
            )
        }
        return (
            <>
            </>
        )
    };

    return (
        <>
            <div className='workhistory-title'>
                {props.title}
            </div>
            <div className='workhistory-company'>
                {props.company}
            </div>
                {generateWorkOverview()}
            <div className='workhistory-location'>
                {props.location}
            </div>
            <div className='workHistory-date'>
                {props.date}
            </div>
            <div className='workhistory-description'>
                {props.description}
            </div>
        </>
    );
}

const workHistoryInfoList: WorkHistoryItem[] = [
    {
        title: 'FULL STACK DEVELOPER',
        company: 'Costco',
        location: 'Issaquah, WA',
        date: 'October 2021 - Present',
        overview: 'Costco is a titan in the both the . ' +
            'In the Digital Transformation Environment Team, we focused on changing the ' +
            'software development culture within Boeing.',
        description: [
            <>
                <ul className='devii'>
                    <li>
                        <>Transformed software development teams within Boeing through mentoring and
                        leadership while driving development with agile methodologies and eXtreme programming techniques
                    (   i.e. <em>test-driven development</em>, <em>pair programming</em> and <em>continuous integration</em>).</>
                    </li>
                    <li>
                        <>Modernized legacy applications with modern web frameworks and services including,
                        <em> Java</em> with Spring Boot, <em>React.js</em> and <em>Pivotal Cloud Foundry</em>.</>
                    </li>
                </ul>
            </>
        ],
    },
    {
        title: 'SOFTWARE ENGINEER II',
        company: 'The Boeing Company',
        location: 'Bellevue, WA',
        date: 'August 2018 - Present',
        overview: 'The Boeing Company is a leader in aerospace and engineering. ' +
            'In the Digital Transformation Environment Team, we focused on changing the ' +
            'software development culture within Boeing.',
        description: [
            <>
                <ul className='devii'>
                    <li>
                        <>Transformed software development teams within Boeing through mentoring and
                        leadership while driving development with agile methodologies and eXtreme programming techniques
                    (   i.e. <em>test-driven development</em>, <em>pair programming</em> and <em>continuous integration</em>).</>
                    </li>
                    <li>
                        <>Modernized legacy applications with modern web frameworks and services including,
                        <em> Java</em> with Spring Boot, <em>React.js</em> and <em>Pivotal Cloud Foundry</em>.</>
                    </li>
                </ul>
            </>
        ],
    },
    {
        title: 'SOFTWARE ENGINEER',
        company: 'Accretive Technology Group',
        location: 'Seattle, WA',
        date: 'December 2014 - June 2017',
        overview: 'Accretive provides a high-definition live streaming video and chat platform ' +
            'that delivers over 200,000 streams an hour to 40,000,000 unique daily visitors across ' +
            'the globe and generates over $351M a year in annual revenue.',
        description: [
            <>
                <ul className='dev'>
                    <li>
                        <>Designed, developed and released multiple microservices using Node.js with koa.js and express.js,
                        redis, and MySQL to manage the state of a complex system (live and recorded streams, authorization,
                         thumbnail generation, etc.) and to add scalability to an existing monolithic service.</>
                    </li>
                    <li>
                        <>Designed and developed the live streaming transcode service which is responsible serving multiple
                        HD streams (mp4, hls, lodef, etc) from a single origin stream to over 1,000,000 users a day while
                        still providing low bandwidth video subscribers options of low latency video streams.</>
                    </li>
                    <li>
                        <>Created overhead reducing reports, alerts, dashboards and automated functional/end-to-end test
                        scripts for development teams and stakeholders using Splunk, Perl and Bash (Linux).</>
                    </li>
                </ul>
            </>
        ],
    },
    {
        title: 'SOFTWARE ENGINEER IN TEST',
        company: 'Accretive Technology Group',
        location: 'Seattle, WA',
        date: 'November 2012 - December 2014',
        description: [
            <>
                <ul className='sdet'>
                    <li>
                        <>Designed and developed an UI automation framework with Selenium,
                        PHPunit and other various open source projects that reduced QA testers overhead by 60%..</>
                    </li>
                    <li>
                        <>Led and designed UI automation testing against all major platforms
                        and browsers using PHP and Java (PC, Mac, Android and iOS).</>
                    </li>
                </ul>
            </>
        ],
    },
    {
        title: 'SOFTWARE ENGINEER IN TEST - INTERN',
        company: 'Blucora Inc',
        location: 'Bellevue, WA',
        date: 'March 2012 - June 2012',
        overview: 'Blucora is a provider of Internet-related services, ' +
            'with a heavy focus on online advertisement and meta-search. ',
        description: [
            <>
                <ul className='intern'>
                    <li>
                        <>Developed, maintained and created hundreds of new test suites against the new metasearch
                        framework while expanding and maintaining exist test suite on legacy framework in C#.</>
                    </li>
                </ul>
            </>
        ],
    }
];
