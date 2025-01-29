import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart(state, action) {              // Add to cart
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
     
    },
    removeFromCart(state, action) {                       // Remove from cart
      const updatedCart = state.filter((item) => item.id !== action.payload);
     return updatedCart;
    },
    incrementQuantity(state, action) {              // Increment quantity
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
     }
    },
    decrementQuantity(state, action) {           // Decrement quantity
      const item = state.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
     }
    },
    clearCart() {                         // Clear cart
      return [];
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
