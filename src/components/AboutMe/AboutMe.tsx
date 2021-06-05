import React, { FunctionComponent } from 'react';
import './AboutMe.scss';

export const AboutMe: FunctionComponent = () => {
    return (
        <div className="AboutMe" id="AboutMe">
            <div className="AboutMe-Header">About Me</div>
            <div className='AboutMe-Content'>
                <div className='Profile-Picture'>
                    <img
                        title='Profile'
                        className='Profile-Picture'
                        alt='Profile'
                        src={('../../assets/images/Profile/ProfilePicture.jpg')}
                    />
                </div>
                <div className="AboutMe-Message">
                    Welcome to my React JS Portfolio Page!<br></br>
                    My name is <em>Aaron Fung </em> and I am a <em>Full Stack Developer </em> 
                    specializing in <em>Java </em> and <em>JavaScript</em>. 
                    I currently reside in the <em> Greater Seattle Washington Area</em>.
                </div>
            </div>
        </div>
    );
};