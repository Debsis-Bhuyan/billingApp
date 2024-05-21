import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  estimate: JSON.parse(localStorage.getItem("purchase")) || [], // Initialize with stored data if available
};

const estimateSlice = createSlice({
  name: "estimate",
  initialState,
  reducers: {
    // add purchase order
    addEstimate: (state, action) => {
      state.estimate.push(action.payload); // Add new item to the array
      localStorage.setItem("estimate", JSON.stringify(state.purchase))
    },
    // removeItem: (state, action) => {
    //   state.items = state.items.filter((item) => item.id !== action.payload.id); // Remove item from the array
    // },
    
    // clear all the purchase order
    clearEstimate: (state) => {
      state.estimate = []; 
    },
  },
});

export const { addEstimate, clearEstimate } = estimateSlice.actions;

export default estimateSlice.reducer;
