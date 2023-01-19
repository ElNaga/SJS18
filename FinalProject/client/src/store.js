import { configureStore } from '@reduxjs/toolkit'
import loggedInReducer from './slices/loggedInSlice'

export const store = configureStore({
    reducer:{
        loggedIn: loggedInReducer
    }
})