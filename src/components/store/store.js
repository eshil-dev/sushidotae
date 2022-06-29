import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import orderingSlice from './orderSlice';

export const store = configureStore({
  reducer: {
    Orders: cartReducer,
    Ordering: orderingSlice,
  },
})