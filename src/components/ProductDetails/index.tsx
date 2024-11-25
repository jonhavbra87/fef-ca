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
    <div className='flex'>
      <div className="p-4 rounded-lg shadow-md justify-center items-center ">
        <img
          src={product.image.url}
          alt={product.image.alt || 'Product Image'}
          className="w-full max-w-md object-cover mb-4 rounded-lg"
        />
        <h2 className="text-lg font-bold mb-2 text-rosewood text-center">{product.title}</h2>
        <p className="text-md text-cream mb-4">{product.description}</p>

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
