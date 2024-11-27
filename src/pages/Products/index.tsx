// components/Products/index.tsx
import { BASE_API_URL } from '../../api/apiConfig';
import useApi from '../../hooks/useApi';
//import { ApiResponse } from '../../types/apiResponse';
import { Product } from '../../types/product';
import ProductCard from '../../components/ProductCard';
import GradientHeading from '../../styles/GradientHeading';
import Loader from '../../styles/StyledLoader';
import Carousel from '../../components/carousel';

function Products() {
  const {
    data: product,
    isLoading,
    isError,
  } = useApi<Product[]>(`${BASE_API_URL}`);

  const products = product;

  // Show loading message if `isLoading` is `true`
  if (isLoading) {
    return <Loader />;
  }

  if (isError || !products) {
    return <div>Error loading data.</div>;
  }

  console.log('products from product page', products);

  return (
    <div>
      <GradientHeading>Products</GradientHeading>

      <Carousel />

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default Products;
