import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  authReducer from "./Slices/authSlice";


const reducer = combineReducers({
    authState: authReducer
})
export const store = configureStore({
    reducer,
    
    
})

export default store