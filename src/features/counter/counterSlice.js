import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    cartItems: [],
  },
  reducers: {
    addItems: (state, action) => {
      const isExist = state.cartItems?.find((item) => item?.id === action.payload?.id);
      if (isExist) {
        isExist.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        state.value += 1;
      }
    },
    increaseQuan: (state, action) => {
      const product = state.cartItems?.find((item) => item?.id === action.payload?.id);
      if (product) {
        product.quantity += 1; 
      }
    },
    decreaseQuan: (state, action) => {
      const product = state.cartItems?.find((item) => item?.id === action.payload?.id);
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1; 
        } else {
          state.cartItems = state.cartItems?.filter((item) => item.id !== action.payload.id);
          state.value -= 1;
        }
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems?.filter((item) => item.id !== action.payload.id);
      state.value -= 1; 
    },

  }
});


export const {  addItems, removeItem, increaseQuan, decreaseQuan } = counterSlice.actions;

export default counterSlice.reducer;
