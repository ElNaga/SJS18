import { Link } from "react-router-dom"


export const NotFound = () => {



    return (
        <div>
            <h2>404 Page not found!</h2>
            <Link to='/'>
            Home
            </Link>
        </div>
    )
}