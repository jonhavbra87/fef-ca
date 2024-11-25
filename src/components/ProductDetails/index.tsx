import { useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { BASE_API_URL } from '../../api/apiConfig';
import { ProductPrice } from '../ProductPrice';
import { Product } from '../../types/product';

function ProductDetails() {
  // Hent `id` fra URL-parametrene
  const { id } = useParams();
  //console.log('id:', id);

  // Gjør API-kallet for å hente produktdetaljer ved bruk av `useApi`
  const {
    data: product,
    isLoading,
    isError,
  } = useApi<Product>(`${BASE_API_URL}/${id}`);

  // Vis lastemelding hvis `isLoading` er `true`
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Vis feilmelding hvis det er en feil eller hvis `product` er `undefined`
  if (isError || !product) {
    return <div>Error loading product details.</div>;
  }

  console.log('data from productdetail', product);

  return (
    <div>
      <div className="p-4 border rounded-lg shadow-md">
        <img
          src={product.image.url}
          alt={product.image.alt || 'Product Image'}
          className="w-full h-64 object-cover mb-4"
        />
        <h2 className="text-lg font-bold mb-2">{product.title}</h2>
        <p className="text-md text-gray-600 mb-4">{product.description}</p>

        <div className="mb-4">
          <ProductPrice product={product} />
          {/* Bruker eksisterende `ProductPrice` komponent */}
        </div>

        <p className="text-sm italic text-gray-500">
          Rating: {product.rating}/5
        </p>
        <p className="text-sm italic text-gray-300">
          #{product.tags?.join(', ')}
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;
