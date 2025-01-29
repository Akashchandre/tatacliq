import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/productsSlice';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';




const Home = () => {
  const dispatch = useDispatch();
  const { products, selectedCategory } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts()); // Fetch products from the API
  }, [dispatch]);

  // Filter products by selected category
  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
   <div>
     <div> <Banner /></div>
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="border p-4 rounded hover:shadow-lg"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain"
              />
              <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
              <p className="text-gray-600">${product.price}</p>
            </Link>
          ))
        ) : (
          <p className="text-center col-span-4 text-gray-600">
            No products available for this category.
          </p>
        )}
      </div>
    </div>
   </div>
  );
};

export default Home;
