// components/Products/index.tsx
import useApi from '../../hooks/useApi';
import { ApiResponse } from '../../types/apiResponse';

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
          <li key={product.id} className="border p-4 rounded-lg shadow-md">
            <img
              src={product.image.url}
              alt={product.image.alt || 'Product Image'}
              className="mb-4 w-full h-64 object-cover"
            />
            <h2 className="text-lg font-bold mb-2">{product.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <p className="text-md font-semibold">Price: ${product.price}</p>
            {
              // Bruker en ternær operator for å vise rabattert pris bare når den er lavere enn den originale prisen
              product.discountedPrice < product.price ? (
                <p className="text-md text-red-500 font-bold">
                  Discounted Price: ${product.discountedPrice.toFixed(2)}
                </p>
              ) : null
            }
            <p className="text-sm italic text-gray-500 mt-1">
              Rating: {product.rating}/5
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
