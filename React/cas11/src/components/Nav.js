import { Link } from "react-router-dom"
import "../assets/css/Nav.css"

export const Nav = () => {


    return (
        <div>
            <ul>
                <li><Link to='/local-weather'>Local weather</Link></li>
                <li><Link to='/search-cities'>Search cities</Link></li>
            </ul>
        </div>
    )
}