import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../Reducers/Reducer";

const store = configureStore({
  reducer: {
    cart: CartReducer  // Corrected key here
  }
});

export default store;