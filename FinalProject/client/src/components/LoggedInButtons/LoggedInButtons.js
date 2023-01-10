import './LoggedIn.css'
import { useSelector, useDispatch } from 'react-redux'
import { setLogin } from '../../slices/loggedInSlice'
import { useNavigate } from 'react-router-dom';


export const LoggedInButtons = () => {

    const loggedIn = useSelector(state => state.loggedIn.loggedIn);
    const dispatch = useDispatch();

    let navigate = useNavigate();

    const logMeOut = () => {
        console.log('this is logout')
        localStorage.removeItem('token');
        dispatch(setLogin( false ))
        navigate('/')
        console.log("this is state of login", loggedIn)
    }

    return (
        <div className="navbar--logButtons">
            <ul>
                <li className="Navbar--MyRecipesButton LoggedInButton">MY RECIPES</li>
                <li className="Black--Dot"></li>
                <li className="Navbar--MyProfileButton LoggedInButton">MY PROFILE</li>
                <li className="Black--Dot"></li>
                <li className="Navbar--LogOutButton LoggedInButton"
                    onClick={logMeOut}
                >LOG OUT</li>
            </ul>
        </div>
    )
}