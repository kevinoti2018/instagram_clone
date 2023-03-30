import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostService } from "./PostService";

export const createPost = createAsyncThunk("post/createPost",
async(postdata,thunkAPI)=>{
    try {
        return PostService.createPost(postdata)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const getPosts = createAsyncThunk("post/getPost",async(thunkAPI)=>{
    try{
        return PostService.getPosts()
    }
    catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})