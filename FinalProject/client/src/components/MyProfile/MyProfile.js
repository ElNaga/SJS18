import './myProfile.css'
import React from 'react'
import defaultAvatar from '../../assets/defaultAvatar.png'

export const MyProfile = () => {
    return (
        <div className='myprofile__overWrapper'>
            <div className='myprofile__wrapper'>
                <div className='myprofile__title'>
                    <h2>My Profile</h2>
                    <span className='myprofile__theLine'></span>
                </div>
                <div className='myprofile__avatar'>
                    <div className='myprofile__avatar__img'>
                        <img src={defaultAvatar} alt="" />
                        <button className='myprofile__changeAvatarBut'>CHANGE AVATAR</button>
                    </div>
                    <div className='myprofile__inputs'>
                        <div className='myprofile__inputsLeft'>
                            <label className='myprofile__label' htmlFor="first_name">First name</label>
                            <input className='myprofile__input' type="text" />
                            <label className='myprofile__label' htmlFor="Email">Email</label>
                            <input className='myprofile__input' type="email" />
                            <label className='myprofile__label' htmlFor="password">Password</label>
                            <input className='myprofile__input' type="password" />
                            <button className='myprofile__button'>SAVE</button>
                        </div>
                        <div className='myprofile__inputsRight'>
                            <label className='myprofile__label' htmlFor="last_name">Last name</label>
                            <input className='myprofile__input' type="text" />
                            <label className='myprofile__label' htmlFor="date">Date of birth</label>
                            <input className='myprofile__input' type="date" />
                            <label className='myprofile__label' htmlFor="retypePassword">Retype password</label>
                            <input className='myprofile__input' type="retypePassword" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
