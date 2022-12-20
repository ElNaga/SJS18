import './Navbar.css'
import logo from '../../assets/logo_color.svg'
import { useState } from 'react'
import { LoggedOutButtons } from '../LoggedOutButtons/LoggedOutButtons'
import { LoggedInButtons } from '../LoggedInButtons/LoggedInButtons'

export const Navbar = () => {

    const [loged, setLoged] = useState(false);

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
                    {loged ? <LoggedInButtons/> : <LoggedOutButtons/>}
                </div>
            </div>
        </div>
    )
}

