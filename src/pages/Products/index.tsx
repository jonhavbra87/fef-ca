// components/Products/index.tsx
import { BASE_API_URL } from '../../api/apiConfig';
import useApi from '../../hooks/useApi';
//import { ApiResponse } from '../../types/apiResponse';
import { Product } from '../../types/product';
import ProductCard from '../../components/ProductCard';
import GradientHeading from '../../styles/GradientHeading';
import Loader from '../../styles/StyledLoader';
import Carousel from '../../components/carousel';
import { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar';

function Products() {
  //state for search input
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showLoader, setShowLoader] = useState(true);
  const {
    data: product,
    isLoading,
    isError,
  } = useApi<Product[]>(`${BASE_API_URL}`);

  const products = product;

  // Control Loader display with a timeout
  useEffect(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => {
        setShowLoader(false);
      }, 1000); // Minimum 2 seconds

      return () => clearTimeout(timeout); // Cleanup timeout
    }
  }, [isLoading]);

  // Show loading message if `isLoading` is `true`
  if (isLoading || showLoader) {
    return <Loader />;
  }

  if (isError || !products) {
    return <div>Error loading data.</div>;
  }

  // Filter products based on the search term
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Event handler for search input change
  const handleSearch = (query: string) => {
    setSearchTerm(query);
  };

  return (
    <div>
      <GradientHeading>Products</GradientHeading>

      <Carousel />

      {/* SearchBar komponent */}
      <div className="my-4">
        <SearchBar onSearch={handleSearch} />
      </div>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default Products;
