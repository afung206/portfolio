import * as React from 'react';
import { FunctionComponent } from 'react';

export const ProjectSection: FunctionComponent = () => {
    return (
        <>
            <div className='Projects'>
                <b>Projects</b>
            </div>
            <ul>
                <li>
                    <a className='github' href='https://github.com/afung206' target="_blank" rel="noreferrer">
                        <img
                            title='GitHub'
                            className='gitHubIcon'
                            alt='GitHub'
                            src='../../assets/images/GitHub-Logos/GitHub_Logo_White.png'
                        />
                    </a>
                </li>
            </ul>
        </>
    );
};