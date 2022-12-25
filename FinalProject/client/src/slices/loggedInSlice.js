import { createSlice } from "@reduxjs/toolkit";


const loggedInSlice = createSlice({
    name: "loggedIn",
    initialState: {
        loggedIn: false
    },
    reducers: {
        setLogin(state, action, statusLogin){
            state.loggedIn = statusLogin
        }
    }
})

export const {setLogin} = loggedInSlice.actions
export default counterSlice.reducer