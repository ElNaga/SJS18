import { useDispatch, useSelector } from "react-redux"
import { sayHello } from "../actions/Hello"
import {increment, decrement} from "../actions/Counter"
import { useState } from "react"

export const Hello = () => {


    const dispatch = useDispatch()

    const greeting = useSelector(state => state.HelloReducer.greeting)
    const {counter} = useSelector(state => state.CounterReducer)
    const [number, setNumber] = useState(0)

    return (
        <div>
            <h1>{greeting}</h1>
            <button onClick={ () => dispatch(sayHello())}>
                Click me!
            </button>
<hr />
            <div>
                <p>Counter : {counter}</p>
                <input type="number" onChange={(e) => setNumber(Number(e.target.value))}/>
                <button
                    onClick={ () => dispatch(increment(number))}
                >+</button>
                <button
                      onClick={ () => dispatch(decrement(number))}
                >-</button>
            </div>

        </div>
    )
}