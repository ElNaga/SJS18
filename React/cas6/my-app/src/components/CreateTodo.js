import {useState} from 'react'

export const CreateTodo = ({addTodo}) => {

    const [newTodo, setNewTodo] = useState ("")

    const addNewTodo = () => {
        addTodo(newTodo)
        setNewTodo('')
    }

    return(
        <div>
            <input
             placegolder='new todo'
             value={newTodo}
             onChange= { (e) => setNewTodo(e.target.value)}
             />
             <button
                onClick={() => addNewTodo(newTodo)}
             >
                Add
             </button>
        </div>
    )
}