import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  authReducer from "./Slices/authSlice";
import { thunk } from "redux-thunk";

const reducer = combineReducers({
    authState: authReducer
})
export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(thunk)
})

export default store