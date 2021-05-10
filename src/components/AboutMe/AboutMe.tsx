import * as React from 'react';
import { FunctionComponent } from 'react';
import './AboutMe.scss';

export const AboutMe: FunctionComponent = () => {
    return (
        <div className="AboutMe" id="AboutMe">
            <div className="AboutMe-Header">About Me</div>
            <div className='Profile-Picture'>
                {/* insert photo */}
            </div>
            <div className='AboutMe-Content'>
                Welcome to my React JS Portfolio Page!<br></br>
                My name is <em>Aaron Fung </em> and I am a <em>Full Stack Developer </em> 
                specializing in <em>Java </em> and <em>JavaScript</em>. 
                I currently reside in the <em> Greater Seattle Washington Area</em>.
            </div>
        </div>
    );
};