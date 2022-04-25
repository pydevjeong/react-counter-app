import { configureStore,createSlice } from "@reduxjs/toolkit";


const initialCounterState={counter:0,showCounter:true}



const counterSlice=createSlice({
  name:'counter',
  initialState:initialCounterState,
  reducers:{
    increment(state){
      state.counter++;
    },
    decrement(state){
      state.counter--;
    },
    increseValue(state,action){
      state.counter=state.counter+action.payload
    },
    openCounter(state){
      state.showCounter=!state.showCounter
    }
  }
})

const store=configureStore({
  reducer:{counter:counterSlice.reducer}
})

export const counterActions=counterSlice.actions;

export default store