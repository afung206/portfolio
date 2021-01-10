import * as React from 'react';

export interface PortfolioSectionProps {
    portfolioName: string;
    portfolioData?: string;
}

const PortfolioPageContent: React.FunctionComponent<PortfolioSectionProps> = (props: PortfolioSectionProps) => {

    return (
        <div className='PortfolioSection'>
            <b>{props.portfolioName}</b>
        </div>
    );
};

export const PortfolioSection = PortfolioPageContent;