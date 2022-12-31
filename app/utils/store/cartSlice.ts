import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGoods } from "../../interfaces";

type initialStateType = {
  cart: IGoods[];
};

const initialState: initialStateType = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
			state.cart.push(action.payload)
		},
    incrementQuantity: (state, action) => {
      const good = state.cart.find(
        (good: IGoods) => good.id === action.payload
      );
      if (good) {
        good.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const good = state.cart.find(
        (good: IGoods) => good.id === action.payload
      );
      if (good) {
        if (good.quantity === 1) {
          good.quantity = 1;
        } else {
          good.quantity--;
        }
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (good) => good.id !== action.payload
      );
      state.cart = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
