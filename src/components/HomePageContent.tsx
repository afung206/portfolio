import * as React from 'react';
import {FunctionComponent} from 'react';

export interface HomePageContentProps {
    welcomeMessage: string;
}

const HomePageContent: FunctionComponent<HomePageContentProps> = (props: HomePageContentProps) => {

    return (
        <div className='HomePage'>
            <b>{props.welcomeMessage}</b>
        </div>
    );
};

export const HomePageContent;