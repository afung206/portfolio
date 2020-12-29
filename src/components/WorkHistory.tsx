import * as React from 'react';
import {FunctionComponent} from 'react';
import {WorkHistoryItem} from './WorkHistoryItem';

export interface WorkHistoryProps {
    workHistroy: string[];
}

const WorkHistory: FunctionComponent<WorkHistoryProps> = (props: WorkHistoryProps) => {

    return (
        <div className='workHistroy'>
            <ol>
                <li>
                    <WorkHistoryItem workTitle={'Software Developer'} workDescription={'Awesome developer!'}/>
                </li>
            </ol>
        </div>
    );
};

export const WorkHistory;