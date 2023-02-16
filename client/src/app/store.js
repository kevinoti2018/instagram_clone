import { configureStore ,applyMiddleware} from '@reduxjs/toolkit'
import authReducer from '../Features/Auth/AuthSlice'
import {composeWithDevTools} from 'redux-devtools-extension'
export const store = configureStore({
  reducer: {
    auth:authReducer
  },
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck:false
  }),
  
})



