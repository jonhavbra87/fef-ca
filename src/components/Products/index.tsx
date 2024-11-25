// components/Products/index.tsx
import { BASE_API_URL } from '../../api/apiConfig';
import useApi from '../../hooks/useApi';
import { ApiResponse } from '../../types/apiResponse';
import ProductCard from '../ProductCard';


function Products() {
  // Bruker `useApi` hooken for å hente API-responsen med typen `ApiResponse`
  const { data: product, isLoading, isError } = useApi<ApiResponse>(
    `${BASE_API_URL}`
);
// Sjekk at `data` eksisterer og hent produktlisten fra `data.data`
const products = product?.data;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data.</div>;
  }

  console.log('products from product page', products);
  

  return (
    <div>
      <h1>Products List</h1>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default Products;
