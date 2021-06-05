import React, { FunctionComponent } from 'react';
import './ProjectSection.scss';

export const ProjectSection: FunctionComponent = () => {
    return (
        <>
            <div className="Projects-Header" id="Projects">
                <b>Projects</b>
            </div>
            <ul>
                <li>
                    <a className='github' href='https://github.com/afung206' target="_blank" rel="noreferrer">
                        <img
                            title='GitHub'
                            className='gitHubIcon'
                            alt='GitHub'
                            src={('../../assets/images/GitHub-Logos/GitHub_Logo_White.png')}
                        />
                    </a>
                </li>
            </ul>
        </>
    );
};