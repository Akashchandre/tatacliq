import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import productsReducer from './slices/productsSlice';
import cartReducer from './slices/cartSlice';
import wishlistReducer from './slices/wishlistSlice';

const store = configureStore({       
  reducer: {
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
