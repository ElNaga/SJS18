import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset, incrementBy } from "../slices/counterSlice"


export const Counter = () => {

    const count = useSelector(state => state.counter.count) //vrzano so store counter
    const dispatch = useDispatch()

    const inputRef = useRef(null)

    console.log(inputRef.current)
    return (
        <div>
            <p>Counter: {count}</p>

            <div>
                <button 
                    onClick={ () => dispatch(increment())}
                
                > + </button>
                <button 
                    onClick={ () => dispatch(decrement())}
                
                > - </button>
                <button 
                    onClick={ () => dispatch(reset())}
                
                > Reset </button>
                <div>
                <input type="number" ref={inputRef}/>    
                <button 
                
                    onClick={ () => {
                        const inputValue = inputRef.current.value
                        dispatch(incrementBy(Number(inputValue)))}}
                
                > Increment By </button>
                </div>

            </div>
        </div>
    )
}