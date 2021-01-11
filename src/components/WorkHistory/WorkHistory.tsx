import * as React from 'react';
import {WorkHistoryItem} from './WorkHistoryItem';

export interface WorkHistoryProps {
    workHistory: string[];
}

const WorkHistoryContent: React.FunctionComponent<WorkHistoryProps> = (props: WorkHistoryProps) => {

    return (
        <div className='workHistory'>
            <ol>
                <li>
                    <WorkHistoryItem workTitle={'Software Developer'} workDescription={'Awesome developer!'}/>
                </li>
            </ol>
        </div>
    );
};

export const WorkHistory = WorkHistoryContent;