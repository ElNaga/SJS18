import './login.css'
import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setLogin} from '../../slices/loggedInSlice'

export const Login = () => {

    const loggedIn = useSelector( state => state.loggedIn.loggedIn);
    const dispatch = useDispatch();

    const [userInfo, setUserInfo] = useState()

    sendLoginInfo( async () => {
        const response = await fetch ('http://172.0.0.1/api/auth/v1/login')
    });

    return (
        <div className='login__wrapper'>
            <div className='toCenterWrapper'>
                <div className='title'>
                    <h2>Log In </h2>
                    <span className='theLine'></span>
                </div>
                <div className='centerContent'>
                    <div className='centerContent__left'>
                        <h2>Welcome to <span className='inlineLogo'>Baby's</span></h2>
                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    </div>
                    <div className='centerContent__right__wrapper'>
                        <div className='centerContent__right'>
                            <label className='emailLabel' htmlFor="email"  >Email</label>
                            <input className='emailInput' type="email" placeholder='user@domain.com'/>
                            <label className='passwordLabel' htmlFor="password">Password</label>
                            <input className='passwordInput' type="password" placeholder='*****'/>
                            <button className='loginButton'>LOG IN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
