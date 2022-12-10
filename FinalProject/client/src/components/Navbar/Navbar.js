import './Navbar.css'
import logo from '../../assets/logo_color.svg'

export const Navbar = () => {

    return (
        <div className="overWrapper">
            <div className="wrapper">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="foodCategories">
                    <ul>
                        <li className="foodCategory">BREAKFAST</li>
                        <li className="aDot"></li>
                        <li className="foodCategory">BRUNCH</li>
                        <li className="aDot"></li>
                        <li className="foodCategory">LUNCH</li>
                        <li className="aDot"></li>
                        <li className="foodCategory">DINNER</li>
                    </ul>
                </div>
                <div className="logButtons">
                    <ul>
                        <li className="logIn">LOG IN</li>
                        <li className="orangeOr">or</li>
                        <li className="createAccount">CREATE ACCOUNT</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

