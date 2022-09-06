import { Link, Outlet } from "react-router-dom"

export const UserLayout = () => {
    const users = [
        {
          name: "Daniel"
        },
        {
          name: "Aleksandar"
        },
        {
          name: "Damjan"
        },
      ]


    return (
        <>
                    <ul>
            <li>
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
            </li>
        </ul>
        <Outlet context={users}/>
        </>

    )
}