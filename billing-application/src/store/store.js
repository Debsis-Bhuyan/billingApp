import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import itemReducer from "./itemSlice";
import transactionReducer from "./transactionSlice";
import purchaseSlice from "./purchaseSlice";
import estimateSlice from "./estimateSlice";
import purchaseItem from "./purchaseItem";

export default configureStore({
  reducer: {
    user: userReducer,
    item: itemReducer,
    transaction: transactionReducer,
    purchase:purchaseSlice,
    estimate:estimateSlice,
    purchaseItem: purchaseItem
  },
});
