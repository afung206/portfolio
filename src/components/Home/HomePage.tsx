import * as React from 'react';
import { FunctionComponent, useEffect, useState } from 'react'
import Axios, {AxiosInstance} from 'axios';
import './HomePage.scss';

export interface HomePageContentProps {
    welcomeMessage: string;
}

export interface QouteItem {
    text: string,
    author: string,
}

export const HomePage: FunctionComponent<HomePageContentProps> = (props: HomePageContentProps) => {

    const qouteUrl = 'https://type.fit/api/quotes'
    const [randomQoute, setRandomQoute] = useState({text: '', author: ''});

    let axios: AxiosInstance;

    useEffect(() => {
        axios = Axios.create();
        axios.get(qouteUrl).then((payload) => {
            const qouteList = payload.data;
            const qoute: QouteItem = qouteList[Math.floor(Math.random() * 99)];
            setRandomQoute({
                text: qoute.text,
                author: qoute.author,
            });
        }).catch((error) => console.log(error));
    }, []);

    const renderQouteOfTheDay = () => {
        if (randomQoute.text === undefined || randomQoute.text === '') {
            return;
        } else {
            return (
                <>
                    <div className="Qoute-Text">
                        <b>{randomQoute.text}</b>
                    </div>
                    <div className="Qoute-Author">
                        - {randomQoute.author}
                    </div>
                </>
            );
        }
    };

    return (
        <div className='HomePage'>
            <div className='Welcome-Message'>
                {props.welcomeMessage}
            </div>
            {renderQouteOfTheDay()}
        </div>
    );
};