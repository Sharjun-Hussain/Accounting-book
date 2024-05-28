import { createSlice } from "@reduxjs/toolkit";

const SandhaSlice = createSlice({
     name:"Sandha",
     initialState:{
        ThisMonthSandhaDetails: [],
        LastMonthSandhaDetails:[],
        loading:false
     },
     reducers:{
        setThisMonthSandhaDetails:(state,action)=>{
            state.ThisMonthSandhaDetails = action.payload;
        },
        setLastMonthSandhaDetails:(state,action)=>{
            state.LastMonthSandhaDetails = action.payload
        }
     }
}) 

export const {setThisMonthSandhaDetails,setLastMonthSandhaDetails} = SandhaSlice.actions;

export default SandhaSlice.reducer;

