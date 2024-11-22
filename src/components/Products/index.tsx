// components/Products/index.tsx
import useApi from '../../hooks/useApi';
import { ApiResponse } from '../../types/apiResponse';
import ProductCard from '../ProductCard';


function Products() {
  // Bruker `useApi` hooken for å hente API-responsen med typen `ApiResponse`
  const { data, isLoading, isError } = useApi<ApiResponse>(
    'https://v2.api.noroff.dev/online-shop/'
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data.</div>;
  }

  // Sjekk at `data` eksisterer og hent produktlisten fra `data.data`
  const products = data?.data;

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
