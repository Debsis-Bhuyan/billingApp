import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transaction: localStorage.getItem("transactions") || null,
};

const transactionsSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setTransaction: (state, action) => {
      state.transaction = action.payload;
      localStorage.setItem("transactions", action.payload);
    },
    clearTransaction: (state) => {
      state.transaction = null;
      localStorage.removeItem("transactions");
    },
  },
});

export const  {setTransaction, clearTransaction}= transactionsSlice.actions;
export default transactionsSlice.reducer;
