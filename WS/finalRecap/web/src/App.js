import { useState } from "react";
import Login from './Login'
import Register from './Register'

const App = () => {

	const [location, setLocation ] = useState('login')

	const locationChange = (e) => {
		setLocation(e.target.dataset.target)
		console.log(e.target.dataset.target)
	};

	return (
		<div className="App">
			<nav>
				<button onClick={locationChange} data-target="login">Log in</button>
				<button onClick={locationChange} data-target="register">Register</button>
			</nav>
			<div>
				{location === 'login' ? <Login/> : null}
				{location === 'register' ? <Register/> : null}
			</div>
		</div>
	);
}

export default App;