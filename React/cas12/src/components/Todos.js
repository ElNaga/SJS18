import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { add, remove,toggleCompleted } from "../slices/todosSlice"


export const Todos = () => {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const inputRef = useRef()

    const handleInputChange = (event) => {
        // console.log(event)
        if(event.key === 'Enter') {
            // alert("enter was pressed", inputRef.current.value)
            dispatch(add({
                title : inputRef.current.value,
                
            }))
            inputRef.current.value = ''
        }
    }

    return (
        <div>
            <ol>
                {todos.map( (todo) => (
                    <li 
                        key={todo.id} 
                        style={{ 
                            color: todo.completed && "red" ,
                            textDecoration : todo.completed && "line-through"
                            }}>
                        {todo.title}
                        {/* {todo.id} */}
                        <br />
                        <button
                            onClick={ () => dispatch(remove(todo.id))}
                        >
                            -
                        </button>
                        <button
                            onClick={ () => dispatch(toggleCompleted(todo.id))}
                        >
                            Completed?
                        </button>
                    </li>
                ) )}
            </ol>
            <input ref={inputRef} onKeyDown={handleInputChange} />
            <p>Press Enter</p>
        </div>
    )
}