import { createSlice } from '@reduxjs/toolkit';
import { createPost } from './PostAction';
const initialState={
    posts:[],
    isError:false,
    isLoading:false,
    isPostSuccess:true,
    message:""
}



export const authSlice = createSlice({
    name:"post",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(createPost.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(createPost.fulfilled,(state,action)=>{
            console.log('action', action);
            state.isLoading = false;
            state.isError=false;
            state.isPostSuccess=true;
            state.posts = state.push(action.payload.data.result)
            state.message = "success"
        })
        .addCase(createPost.rejected,(state)=>{
            state.isLoading = false;
            state.isError=true;
            state.isPostSuccess=false;
            state.message = "error"
        })

    }
})

export default authSlice.reducer