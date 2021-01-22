import * as React from 'react';
import { FunctionComponent } from 'react';

export interface WorkHistoryItemProps {
    workTitle: string;
    workDescription: string;
    workItems?: string[];
}

export const WorkHistoryItem: FunctionComponent<WorkHistoryItemProps> = (props: WorkHistoryItemProps) => {

    return (
        <div className='workHistoryItem'>
            <b>Work History Item!</b>
            <b>{props.workTitle}</b>
            <b>{props.workDescription}</b>
        </div>
    );
};
