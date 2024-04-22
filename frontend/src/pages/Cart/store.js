import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../../pages/Cart/CartSlice.js';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    
  },
});

export default store;
