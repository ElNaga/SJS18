import './myProfile.css'
import React, { useState } from 'react'
import defaultAvatar from '../../assets/defaultAvatar.png'

import {useSelector, useDispatch} from 'react-redux'
import {setLogin} from '../../slices/loggedInSlice'

export const MyProfile = () => {


    const initData = {
        email: '',
        password: '',
        password2: '',
        first_name: '',
        last_name: '',
        date_birth: ''
    }

    const [saveData, setSaveData] = useState(initData);

    const dataChange = (e) => {
        setSaveData({
            ...saveData,
            [e.target.name]: e.target.value
        })
    }

    const loggedIn = useSelector( state => state.loggedIn.loggedIn);
    const dispatch = useDispatch();

    const saveInfo = async () => {
        try {
            let response = await fetch(`/api/v1/auth/user-update`, 
            {
                method: 'put',
                body: JSON.stringify(saveData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        } catch (err) {
            console.log(err)
        }
    }

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
                            <input className='myprofile__input' type="text" name='first_name' value={saveData.first_name} onChange={dataChange}/>
                            <label className='myprofile__label' htmlFor="Email">Email</label>
                            <input className='myprofile__input' type="email" name='email' value={saveData.email} onChange={dataChange}/>
                            <label className='myprofile__label' htmlFor="password">Password</label>
                            <input className='myprofile__input' type="password" name='password' value={saveData.password} onChange={dataChange}/>
                            <button className='myprofile__button'
                                onClick={saveInfo}
                            >SAVE</button>
                        </div>
                        <div className='myprofile__inputsRight'>
                            <label className='myprofile__label' htmlFor="last_name">Last name</label>
                            <input className='myprofile__input' type="text" name='last_name' value={saveData.last_name} onChange={dataChange}/>
                            <label className='myprofile__label' htmlFor="date">Date of birth</label>
                            <input className='myprofile__input' type="date" name='date' value={saveData.date} onChange={dataChange}/>
                            <label className='myprofile__label' htmlFor="retypePassword">Retype password</label>
                            <input className='myprofile__input' type="password" name='retypePassword' value={saveData.retypePassword} onChange={dataChange}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
