import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { cartReducer } from "./cartSlice";
import { goodsApi } from "./goodsApi";

export const store = configureStore({
  reducer: {
    [goodsApi.reducerPath]: goodsApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(goodsApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>
