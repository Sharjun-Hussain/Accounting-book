/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        loading:false
    },
    reducers: {
        loginRequest(state, action){
          return{
            ...state,
            loading:true
          }  
        },
        loginSuccess(state,action){
            return{
                loading:false,
                isAuthenticated:true,
                user:action.payload
            }
            
        },
        loginfailed(state,action){
            return{
                ...state,
                loading:false,
                error : action.payload
            }
        },
        RegisterRequest(state, action){
            return{
              ...state,
              loading:true
            }  
          },
          RegisterSuccess(state,action){
              return{
                  loading:false,
                  isAuthenticated:true,
                  user:action.payload
              }
              
          },
          Registerfailed(state,action){
              return{
                  ...state,
                  loading:false,
                  error : action.payload
              }
          }
    }
})

const {actions,reducer} = authSlice;
export const  {loginRequest,loginSuccess,loginfailed, RegisterRequest,RegisterSuccess,Registerfailed} = actions;
export default reducer;