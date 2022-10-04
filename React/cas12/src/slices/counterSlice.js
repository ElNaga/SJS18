import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name : 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment(state, action){
            state.count += 1
        },
        decrement(state, action){
            state.count -= 1
        },
        reset(state, action){
            state.count = 0
        },
        incrementBy(state, action){
            console.log(action)
            state.count += action.payload
        }
    }
})

export const { increment, decrement, reset, incrementBy} = counterSlice.actions
export default counterSlice.reducer