import {Link} from 'react-router-dom'

export const Nav = () => {

    return (
        <div className='wrapper'>
                <div>
                    <ul >
                        <li><Link to="/">
                        Home
                        </Link></li>
                        <li><Link to='/about'>
                        About
                        </Link></li>
                        <li><Link to='/contact'>
                        Contact
                        </Link>
                        </li>
                        <li><Link to='/Users'>
                        Users
                        </Link></li>

                    </ul>
                </div>
        </div>
    )
}