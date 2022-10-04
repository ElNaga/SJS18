
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts : [
        {
            userId : 1,
            id : 1,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, in.",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dignissimos cumque voluptatibus praesentium quo incidunt dolore, cupiditate obcaecati provident repudiandae!"
        },
        {
            userId : 1,
            id : 2,
            title: "Lorem, ipsum dolor.",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dignissimos cumque voluptatibus praesentium quo incidunt dolore, cupiditate obcaecati provident repudiandae!"
        }
    ],
    status : "idle",
    error : null
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers(builder) {
        builder
        .addCase( fethPosts.fulfilled, (state, action) => {
            state.status = 'fulfield';
            state.posts = action.payload
        }  )
        .addCase( fethPosts.pending, (state, action) => {
            state.status = 'pending...';
        }  )
        .addCase( fethPosts.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message
        }  )
    }
    
})

export const fethPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    return response.json()
})

export default postsSlice.reducer