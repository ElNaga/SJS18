
import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id : '1',
        title: "Learn Toolkit",
        completed: false
    },
    {
        id : '2',
        title: "Learn Slices",
        completed: true
    }
]



const todosSlice = createSlice({
    name : "todos",
    initialState,
    reducers: {
        // add(state, action) {
        //     state.push({
        //         id: nanoid(),
        //         title: action.payload.title,
        //         completed: false
        //     })
        // },
        add : {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare({title}) {
                return {
                    payload: {

                        id: nanoid(),
                        title,
                        completed : false
                    }

                }
            }
        },
        remove (state,action) {
            // nacin 1
            // state.filter( (todo) => action.payload.id !== todo.id )

            // nacin 2
            const index = state.findIndex(todo => todo.id === action.payload)

            state.splice(index, 1)
        },
        toggleCompleted (state, action) {
            const todo = state.find(todo => todo.id === action.payload)
            todo.completed = !todo.completed
        }
    }
})

export const { add, remove, toggleCompleted} = todosSlice.actions
export default todosSlice.reducer