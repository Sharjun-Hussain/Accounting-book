import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  authReducer from "./Slices/authSlice";
import { thunk } from "redux-thunk";
import SandhaReducer from "./Slices/SandhaSlice";

const reducer = combineReducers({
    authState: authReducer,
    SandhaState: SandhaReducer
})
export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(thunk)
})

export default store