import { useState } from "react"
import { useEffect } from "react"

export const LifecycleFuncComponent = () => {

    const [counter, setCounter] = useState(0)

    console.log('rerendering')

    useEffect(() => {
        console.log('useEffect funcComponent')

        return () => {
            console.log("LifecycleFuncComponent -> componentWillUnmount")
        }
    },[]) //empty array as dependency === componentDidMount

    const increment  = () => (
        setCounter((count) => (++count))
    )
    

    return (
        <div>
            <h2>Func Component </h2>
            <p>Counter is: {counter}</p>
            <button onClick={increment}>
            Increment 1
            </button>
        </div>
    )
}