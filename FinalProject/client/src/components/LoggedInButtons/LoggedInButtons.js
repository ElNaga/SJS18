import './LoggedIn.css'
import { useSelector, useDispatch } from 'react-redux'
import { setLogin } from '../../slices/loggedInSlice'


export const LoggedInButtons = () => {

    const loggedIn = useSelector(state => state.loggedIn.loggedIn);
    const dispatch = useDispatch();

    const logMeOut = () => dispatch(setLogin( false ))

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