import { useState } from 'react'

export const ListTodos = ({ todos, markAsCompleted, deleteTodo }) => {


    const completed = (todos.filter(todo => todo.completed)).length

    const [editId, setEditId] = useState()

    const markAsEditable = (id) => {
        setEditId(id)
    }

    const changeText = () => {

    }

    return (
        <div>
            <p>Completed : {completed}</p>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} >
                        {editId == todo.id ? 
                            <input value={todo.text}
                            onChange={ () => changeText(todo.id, )}/>
                            :
                            <span className={todo.completed ? "mark-as-done" : ''}>
                                {todo.text}
                            </span>
                        }
                        <div>
                            <button
                                onClick={() => markAsEditable(todo.id)}>
                                edit
                            </button>

                            <input
                                type="checkbox"
                                value={todo.completed}
                                checked={todo.completed}
                                onChange={() => markAsCompleted(todo.id)}
                            />
                            <span
                                className="deleteSpan"
                                onClick={() => deleteTodo(todo.id)}
                            >X</span>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    )
}