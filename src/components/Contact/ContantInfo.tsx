import * as React from 'react';
import { FunctionComponent } from 'react';

export const ContactInfo: FunctionComponent = () => {
    return (
        <>
            <div className='ContactInfo-Header' id='Contact'>Contact Information</div>
            <div className='ContanctInfo-Content'>
                <p>Feel free to contact me below through Linkedin!</p>
            </div>
            <div>Resume</div>
        </>
    );
};