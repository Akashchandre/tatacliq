import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: [],
  reducers: {
    addToWishlist(state, action) {            // Add to wishlist
      state.push(action.payload);
      
    },
    removeFromWishlist(state, action) {                             // Remove from wishlist
      const updatedWishlist = state.filter((item) => item.id !== action.payload);
      return updatedWishlist;
    },
    clearWishlist: () => {                 // Clear wishlist
      return [];
    }
  },
});

export const { addToWishlist, removeFromWishlist , clearWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;
