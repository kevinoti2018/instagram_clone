
import {createAsyncThunk} from '@reduxjs/toolkit';
import { AuthService } from './AuthService';

export const register = createAsyncThunk('auth/signup',async (userData,thunkApi)=>{
    try{
        return AuthService.register(userData)
    }
    catch(error){
        return thunkApi.rejectWithValue(error)
    }
}) 
export const login = createAsyncThunk('auth/signin',async (userData,thunkApi)=>{
    try{
        return AuthService.login(userData)
    }
    catch(error){
        return thunkApi.rejectWithValue(error)
    }
}) 
export const  resetNewPassword= createAsyncThunk('auth/reset-password',async (email,thunkApi)=>{
    try{
        return AuthService.reseNewPassword(email)
    }
    catch(error){
        return thunkApi.rejectWithValue(error)
    }
}) 