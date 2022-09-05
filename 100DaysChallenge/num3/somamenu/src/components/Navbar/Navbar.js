import React, { Component } from 'react';
import './Navbar.css'
import SomaLogo from '../soma_icon.jpg'

export const Navbar = () => {



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
                    </ul>
                </div>
        </div>
    )
}