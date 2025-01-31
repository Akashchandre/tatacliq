import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Wishlist from './pages/Wishlist';
import PrivateRoute from './components/PrivateRoute';
import SearchResults from './pages/SearchResult';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { auth } from './firebase';
import { setUser } from './redux/slices/authSlice';
import { setCart } from './redux/slices/cartSlice';
import { setWishlist } from './redux/slices/wishlistSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Retrieve stored user, cart, and wishlist from LocalStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      dispatch(setUser(storedUser));
    }

    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    dispatch(setCart(storedCart));

    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    dispatch(setWishlist(storedWishlist));

    // Firebase auth state persistence
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  }, [dispatch]);
  
  return (
    <div className="app">
     
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/search" element={<SearchResults />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
      
    </div>
  );
}

export default App;
