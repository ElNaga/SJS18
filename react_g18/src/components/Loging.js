import { useEffect, useState } from "react"


export const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    console.log('rerendering')

    useEffect( () => {
        console.log('pasword has changed')
    },[password,username])

    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
    
        }}>
            <label htmlFor="" > Username: </label>
            <input 
                type="text" 
                placeholder="Enter Username"
                value={username}
                onChange={(event) => (setUsername(event.target.value))}
                />
            <label htmlFor="" > Password: </label>
            <input 
                type="password" 
                placeholder="Enter Password"
                value={password}
                onChange={(event) => (setPassword(event.target.value))}
                />
                <span>
                    {username} : {password}
                </span>

                <button 
                    onClick={() => {
                        setUsername('Alek');
                        setPassword('Aleksandar')
                    }}
                >
                    Change both username and password
                </button>
        </div>
    )
}