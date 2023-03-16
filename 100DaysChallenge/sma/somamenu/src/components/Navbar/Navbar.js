import React, { Component } from 'react';
import './Navbar.css'
import SomaLogo from '../soma_icon.jpg'

export const Navbar = ({setShow}) => {

    const setingTo3 = () => {
        return 3
    }
    return (
        <div className='wrapper'>
                <div className='navbar-icon-left'>
                    <img className='navbar-icon-left' src={SomaLogo} alt="" srcset="" />
                </div>
                <div>
                    <ul className='selectIconsMenu'>
                        <li>Мени</li>
                        <li>Резервација</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>5</li>
                        <li>5</li>
                        <li>5</li>
                        <li></li>
                    </ul>
                    <button onClick={setShow('Menu')}>BACK</button>
                </div>
        </div>
    )
}