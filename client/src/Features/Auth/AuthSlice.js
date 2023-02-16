import {createSlice} from '@reduxjs/toolkit'
import { register } from './AuthActions';


const initialState = {
    isLoading:false,
    isError:false,
    isRegisterSuccess:false,
    message:''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState:initialState,
    reducers:{

    },
    extraReducer: (builder)=>{
        builder
            .addCase(register.pending,(state)=>{
                state.isLoading = false;
            })
            .addCase(register.fulfilled,(state,action)=>{
                state.isLoading = false;
                state.isError = false;
                state.isRegisterSuccess = true;
                state.message = 'success'
            })
            .addCase(register.rejected,(state,action)=>{
                state.isLoading = false;
                state.isError = true;
                state.isRegisterSuccess = false;
                state.message = ''
            })
        }
})

export default authSlice.reducer