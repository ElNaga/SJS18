import React from 'react'
import './createAccount.css'

export const CreateAccount = () => {
    return (
        <div className='create__overWrapper'>
            <div className='create__wrapper'>
                <div className='create__title'>
                    <h2>Create Account </h2>
                    <span className='create__theLine'></span>
                </div>
                <div className='create__centerContent'>
                    <div className='create__center__text'>
                        <h2 className='create__orangeLine'>Create your </h2>
                        <h2 className='create__blackLine'>account</h2>
                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                    </div>
                    <div className='create__inputs'>
                        <div className='create__inputsLeft'>
                            <label className='create__label' htmlFor="first_name">First name</label>
                            <input className='create__input' type="text" />
                            <label className='create__label' htmlFor="Email">Email</label>
                            <input className='create__input' type="email" />
                            <label className='create__label' htmlFor="password">Password</label>
                            <input className='create__input' type="password" />
                            <button className='create__button'>CREATE ACCOUNT</button>
                        </div>
                        <div className='create__inputsRight'>
                            <label className='create__label' htmlFor="last_name">Last name</label>
                            <input className='create__input' type="text" />
                            <label className='create__label' htmlFor="date">Date of birth</label>
                            <input className='create__input' type="date" />
                            <label className='create__label' htmlFor="retypePassword">Retype password</label>
                            <input className='create__input' type="retypePassword" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
