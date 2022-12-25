import './Navbar.css'

import {useSelector, useDispatch} from 'react-redux'
import {setLogin} from '../../slices/loggedInSlice'

import logo from '../../assets/logo_color.svg'
import { useState } from 'react'
import { LoggedOutButtons } from '../LoggedOutButtons/LoggedOutButtons'
import { LoggedInButtons } from '../LoggedInButtons/LoggedInButtons'

export const Navbar = () => {

    
    const loggedIn = useSelector( state => state.loggedIn.loggedIn);
    const dispatch = useDispatch();

    return (
        <div className="overWrapper">
            <div className="wrapper">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="foodCategories">
                    <ul>
                        <li className="foodCategory">BREAKFAST</li>
                        <li className="aDot"></li>
                        <li className="foodCategory">BRUNCH</li>
                        <li className="aDot"></li>
                        <li className="foodCategory">LUNCH</li>
                        <li className="aDot"></li>
                        <li className="foodCategory">DINNER</li>
                    </ul>
                </div>
                <div>
                    {loggedIn ? <LoggedInButtons/> : <LoggedOutButtons/>}
                </div>
            </div>
        </div>
    )
}

