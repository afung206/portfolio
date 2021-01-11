import * as React from 'react';

export interface WorkHistoryItemProps {
    workTitle: string;
    workDescription: string;
    workItems?: string[];
}

const WorkHistoryItemContent: React.FunctionComponent<WorkHistoryItemProps> = (props: WorkHistoryItemProps) => {

    return (
        <div className='workHistoryItem'>
            <b>Work History Item!</b>
            <b>{props.workTitle}</b>
            <b>{props.workDescription}</b>
        </div>
    );
};

export const WorkHistoryItem = WorkHistoryItemContent;