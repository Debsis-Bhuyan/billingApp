import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: localStorage.getItem("items") || null,
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.item = action.payload;
      localStorage.setItem("items", JSON.stringify(action.payload));
    },
    clearItems: (state) => {
      state.item = null;
      localStorage.removeItem("items");
    },
  },
});

export const { setItems, clearItems } = itemSlice.actions;

export default itemSlice.reducer;
