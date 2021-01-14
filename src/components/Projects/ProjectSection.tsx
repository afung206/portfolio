import * as React from 'react';
// import { ReactComponent as GitHubLogo } from '../../resources/github.svg'

const ProjectSectionContent: React.FunctionComponent = () => {

    return (
        <>
            <div className='Projects'>
                <b>Projects</b>
            </div>
            <ul>
                <li>
                    <a href='https://github.com/afung206' target="_blank" rel="noreferrer">
                        {/* <GitHubLogo/> */}
                    </a>
                </li>
            </ul>
        </>
    );
};

export const ProjectSection = ProjectSectionContent;