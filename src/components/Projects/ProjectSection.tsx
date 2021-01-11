import * as React from 'react';
import { Image } from 'react-bootstrap';
import GitHubLogo from '../../resources/github.svg'

const ProjectSectionContent: React.FunctionComponent = () => {

    return (
        <>
            <div className='Projects'>
                <b>Projects</b>
            </div>
            <ul>
                <li>
                    <a href='https://github.com/afung206' target="_blank">
                        <Image src={GitHubLogo} clasName='githubIcon' />
                    </a>
                </li>
            </ul>
        </>
    );
};

export const ProjectSection = ProjectSectionContent;