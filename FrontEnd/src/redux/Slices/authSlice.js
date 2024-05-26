/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    loading: false,
    user:null,
    token:null,
    error:null
  },
  reducers: {
    loginRequest(state) {
      state.loading = true
    },
    loginSuccess(state, action) {
      state.loading = false,
      state.isAuthenticated = true,
      state.user = action.payload,
      state.token = action.payload.token,
      state.error = null
    },
    loginfailed(state, action) {
      state.error = action.payload,
      state.loading = false
    },
    RegisterRequest(state, action) {  
      state.loading =true
      
    },
    RegisterSuccess(state, action) {
      state.loading =false,
      state.isAuthenticated = true,
      state.user = action.payload,
      state.token = action.payload.token,
      state.error = null
    },
    Registerfailed(state, action) {
      state.error = action.payload,
      state.loading = false
    },
    Logout(state) {
      state.isAuthenticated = false,
      state.loading = false,
      state.user = null,
      state.token = null,
      state.error = null
    }
    
    
  },
});

const { actions, reducer } = authSlice;
export const {
  loginRequest,
  loginSuccess,
  loginfailed,
  RegisterRequest,
  RegisterSuccess,
  Registerfailed,
  Logout
} = actions;
export default reducer;
