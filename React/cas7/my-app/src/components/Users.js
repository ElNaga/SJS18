import { useParams } from "react-router-dom"
import {Link} from 'react-router-dom'
import { useOutletContext } from "react-router-dom"

export const Users = ({users}) => {

    const {sutendts} = useOutletContext()


    return (
        <div>
            <h2>Users element</h2>

            {/* <li>
                <Link to='/users/:1'>
                    User 1
                </Link>
            </li>
            <li>
                <Link to='/users/:2'>
                    User 2
                </Link>
            </li>
            <li>
                <Link to='/users/new'>
                    New User
                </Link>
            </li> */}

            <h2>
                {users.map( user => <li key={user.name}>{user.name}</li>)}
                {sutendts.map( user => <li key={user.name}>{user.name}</li>)}
            </h2>
        </div>
    )
}