import { useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { BASE_API_URL } from '../../api/apiConfig';
import { ProductPrice } from '../../components/ProductPrice';
import { Product } from '../../types/product';
import { GradientButton } from '../../styles/GradientButton';
import { useCartStore } from '../../store/cartStore'; // Import the Zustand store
import Loader from '../../styles/StyledLoader';
import GradientHeading from '../../styles/GradientHeading';

function ProductDetails() {
  // Get `id` from URL parameters
  const { id } = useParams();

  // Fetch product details using `useApi`
  const {
    data: product,
    isLoading,
    isError,
  } = useApi<Product>(`${BASE_API_URL}/${id}`);

  // Zustand store to add product to cart
  const { addToCart } = useCartStore();

  // Show loading message if `isLoading` is `true`
  if (isLoading) {
    return <Loader />;
  }

  // Show error message if there's an error or if `product` is `undefined`
  if (isError || !product) {
    return <div>Error loading product details.</div>;
  }

  console.log('data from productdetail', product);

  return (
    <div className="flex justify-center items-start min-h-screen bg-darkPurple p-4">
      <div className="px-5 max-w-xl w-full">
      <GradientHeading>  {product.title}</GradientHeading>
        <img
          src={product.image.url}
          alt={product.image.alt || 'Product Image'}
          className="w-full h-64 object-cover mb-4 rounded-lg"
        />
   
        <p className="text-md text-cream mb-4">{product.description}</p>

        <div className="mb-4">
          <ProductPrice product={product} />
        </div>

        <p className="text-sm italic text-gray-500">
          Rating: {product.rating}/5
        </p>
        <p className="text-sm italic text-gray-300">
          #{product.tags?.join(', ')}
        </p>

        {/* Add to Cart Button */}
        <div className="flex justify-end mt-4">
          <GradientButton onClick={() => addToCart(product)}>
            Add to Cart
          </GradientButton>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
