import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  purchase: JSON.parse(localStorage.getItem("purchase")) || [], // Initialize with stored data if available
};

const purchaseSlice = createSlice({
  name: "purchase",
  initialState,
  reducers: {
    // add purchase order
    addPurchase: (state, action) => {
      state.purchase.push(action.payload); // Add new item to the array
      localStorage.setItem("purchase", JSON.stringify(state.purchase))
    },
    // removeItem: (state, action) => {
    //   state.items = state.items.filter((item) => item.id !== action.payload.id); // Remove item from the array
    // },
    
    // clear all the purchase order
    clearPurchase: (state) => {
      state.purchase = []; 
    },
  },
});

export const { addPurchase, clearPurchase } = purchaseSlice.actions;

export default purchaseSlice.reducer;
