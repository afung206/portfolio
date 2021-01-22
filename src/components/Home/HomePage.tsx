import * as React from 'react';
import { FunctionComponent } from 'react'
import {useEffect, useState} from 'react';
import Axios, {AxiosInstance} from 'axios';

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
                <div className="qoute">
                    <b>{randomQoute.text}</b>
                    <b>-{randomQoute.author}</b>
                </div>
            );
        }
    };

    return (
        <div className='homepage'>
            <b>{props.welcomeMessage}</b>
            {renderQouteOfTheDay()}
        </div>
    );
};