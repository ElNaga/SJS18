import './footer.css'
import logo from '../../assets/logo_white.svg'

import React from 'react'

export const Footer = () => {
    return (
        <div className='footer__overWrapper'>
            <div className='footer__wrapper'>
            <div className='footer__left'>
                <img src={logo} alt="" />
            </div>
            <div className="footer__center">
                <ul>
                    <li className="foodCategory__footer">BREAKFAST</li>
                    <li className="aDot__footer"></li>
                    <li className="foodCategory__footer">BRUNCH</li>
                    <li className="aDot__footer"></li>
                    <li className="foodCategory__footer">LUNCH</li>
                    <li className="aDot__footer"></li>
                    <li className="foodCategory__footer">DINNER</li>
                </ul>
            </div>
            <div className='footer__right'>
                <p>Baby's Food place</p>
                <p>copyright © 2022</p>
            </div>
        </div>
        </div>
    )
}
