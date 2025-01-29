import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search); // Get query params
  const query = queryParams.get('query');                 // Get query param 'query'
  const category = queryParams.get('category');               // Get query param 'category'

  const { products } = useSelector((state) => state.products);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Filter products based on query and category
    const results = products.filter(
      (product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) &&
        (category === 'all' || product.category === category)
    );
    setFilteredProducts(results);
  }, [products, query, category]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded hover:shadow-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain"
              />
              <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
              <p className="text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No results found for "{query}".</p>
      )}
    </div>
  );
};

export default SearchResults;
