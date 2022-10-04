import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import counterReducer from './slices/counterSlice'
import postsReducer from "./slices/postsSlice";
import todosReducer from './slices/todosSlice'

export const store = configureStore({
    reducer : {
        counter : counterReducer, //vrzano so slajsot preku import na slajsot
        todos : todosReducer, // import na reducer
        posts : postsReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})