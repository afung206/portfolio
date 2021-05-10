import * as React from 'react';
import { FunctionComponent } from 'react';
import './NarBar.scss';


interface NavBarProps {
    navItems: string[];
}

type Props = NavBarProps;

export const NavBar : FunctionComponent<NavBarProps> = (props: Props) => {
    return (
        <>
            <nav className='navBar'>
                <ul className='navBar-links'>
                    {
                        props.navItems.map((navItem: string, i) => {
                            return <li className='navBar-navItem' key={i}>
                                        <a href={"#" + navItem}>{navItem}</a>
                                    </li>;
                        })
                    }
                </ul>
            </nav>
        </>
    );
};