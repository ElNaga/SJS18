import './LoggedIn.css'

export const LoggedInButtons = () => {
  return (
      <div className="navbar--logButtons">
          <ul>
              <li className="Navbar--MyRecipesButton LoggedInButton">MY RECIPES</li>
              <li className="Black--Dot"></li>
              <li className="Navbar--MyProfileButton LoggedInButton">MY PROFILE</li>
              <li className="Black--Dot"></li>
              <li className="Navbar--LogOutButton LoggedInButton">LOG OUT</li>
          </ul>
      </div>
  )
}