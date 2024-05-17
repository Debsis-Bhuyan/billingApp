import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import itemReducer from "./itemSlice";
import transactionReducer from "./transactionSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    item: itemReducer,
    transaction: transactionReducer,
  },
});
