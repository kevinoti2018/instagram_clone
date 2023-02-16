
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