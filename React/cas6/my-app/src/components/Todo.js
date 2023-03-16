import { mockTodos } from '../mockData'
import { ListTodos } from './ListTodos'
import { CreateTodo } from './CreateTodo'
import { useState } from 'react'

export const Todo = () => {

    const addTodo = (text) => {
        if (text.trim() === '') {
            alert('Empty To-Do')
            return
        }

        // const newTodo = {
        //     id: todos.length + 1,
        //     text: text,
        //     completed: false
        // }

        setTodos([...todos, {
            id: todos.length + 1,
            text: text,
            completed: false
        }])
    }

    const markAsCompleted = (id) => {
        // todos.find(todo => todo.id === id)

        setTodos( [...todos.map(todo => {
            if( todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })])
    }

    const deleteTodo = (id) => {
        setTodos([...todos.filter(todo => todo.id !== id)])
    }

    const [todos, setTodos] = useState(mockTodos)

    return (
        <div>
            <CreateTodo addTodo={addTodo} />
            <ListTodos todos={todos} markAsCompleted={markAsCompleted} deleteTodo={deleteTodo}/>
        </div>
    )
}