import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: JSON.parse(localStorage.getItem("items")) || [], // Initialize with stored data if available
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.item.push(action.payload); 
      // Add new item to the array
      localStorage.setItem("items", JSON.stringify(state.item))

    },
    // removeItem: (state, action) => {
    //   state.items = state.items.filter((item) => item.id !== action.payload.id); // Remove item from the array
    // },
    
    clearItems: (state) => {
      state.item = []; // Clear all items from the array
    },
  },
});

export const { addItem, clearItems } = itemSlice.actions;

export default itemSlice.reducer;
