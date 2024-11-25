// components/Products/index.tsx
import { BASE_API_URL } from '../../api/apiConfig';
import useApi from '../../hooks/useApi';
//import { ApiResponse } from '../../types/apiResponse';
import { Product } from '../../types/product';
import ProductCard from '../ProductCard';

function Products() {
  const {
    data: product,
    isLoading,
    isError,
  } = useApi<Product[]>(`${BASE_API_URL}`);

  const products = product;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !products) {
    return <div>Error loading data.</div>;
  }

  console.log('products from product page', products);

  return (
    <div>
      <h1 className='text-3xl text-cream'>Products</h1>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default Products;
