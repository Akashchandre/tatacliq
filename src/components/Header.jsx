import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, setSelectedCategory } from "../redux/slices/productsSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/authSlice"; // Import logout action
import { MdOutlineLogout } from "react-icons/md";
import { GrCart } from "react-icons/gr";
import { IoHeartOutline } from "react-icons/io5";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // Get current page location
  const { categories, selectedCategory } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.auth);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryChange = (event) => {
    dispatch(setSelectedCategory(event.target.value));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}&category=${selectedCategory}`); 
    }
  };

  const handleLoginLogout = () => {
    if (user) {
      dispatch(logout());
      navigate("/login");
    } else {
      navigate("/login");
    }
  };

  //  current page is the login page
  const isLoginPage = location.pathname === "/login";

  return (
    <header className="bg-white shadow p-2 flex flex-wrap items-center justify-between">
      {/* Logo Always Visible */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src="https://images.storyboard18.com/storyboard18/2024/11/Tata-Cliq-Fashion-2024-11-cc086eeb317e162a9991e92205841f8e-1019x573.jpg"
            alt="logo"
            className="h-12 w-auto"
          />
        </Link>
      </div>

      {/* Hide Search, Wishlist, Cart, and Logout on Login Page */}
      {!isLoginPage && (
        <div className="flex-1 flex flex-wrap items-center justify-end space-x-4">
          {/* Categories Dropdown */}
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="hidden md:block border border-gray-300 text-gray-700 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2.5 w-48"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>

          {/* Search  */}
          <form onSubmit={handleSearch} className="flex flex-1 items-center space-x-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by item name"
              className="flex-1 border border-gray-300 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
            />
            <button
              type="submit"
              className="text-white bg-blue-500 hover:bg-blue-600 rounded-full px-4 py-2"
            >
              Search
            </button>
          </form>

          {/* Wishlist and Cart */}
          <div className="flex space-x-4 items-center">
            <Link to="/wishlist" className="text-lg">
              <IoHeartOutline className="text-2xl" />
            </Link>
            <Link to="/cart" className="text-lg">
              <GrCart className="text-2xl" />
            </Link>
          </div>

          {/* Login/Logout Button */}
          <button
            onClick={handleLoginLogout}
            className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none"
          >
            <MdOutlineLogout />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
