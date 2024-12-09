import { useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { BASE_API_URL } from '../../api/apiConfig';
import { ProductPrice } from '../../components/ProductPrice';
import { Product } from '../../types/product';
import { GradientButton } from '../../styles/GradientButton';
import useCartStore from '../../store/cartStore'; // Import the Zustand store
import Loader from '../../styles/StyledLoader';
import GradientHeading from '../../styles/GradientHeading';
import ProductRating from '../../components/ProductRating';

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
    <div className="">
    <div className="text-center shadow z-10">
      <GradientHeading>{product.title}</GradientHeading>
    </div>

    <div className="flex flex-col md:flex-row justify-start items-start min-h-screen p-4 gap-8">
      
      {/* Product Image */}
      <div className="relative w-full h-64 md:h-96">
  <img
    src={product.image.url}
    alt={product.image.alt || 'Product Image'}
    className="absolute inset-0 w-full h-full object-cover rounded-lg"
  />
</div>

        {/* <GradientHeading>{product.title}</GradientHeading> */}

      {/* Product Details */}
      <div className="md:w-1/2 w-full flex flex-col">

        <p className="text-md text-primary mb-4">{product.description}</p>

        <div className="mb-4 text-lg">
          <ProductPrice product={product} />
        </div>

        <ProductRating rating={product.rating} />
        <p className="text-sm italic text-gray-300 mb-4">
          #{product.tags?.join(', ')}
        </p>

        {/* Add to Cart Button */}
        <div className="flex justify-end mb-6">
          <GradientButton onClick={() => addToCart(product)}>
            Add to Cart
          </GradientButton>
        </div>

        {/* Reviews Section */}

          <h2 className="text-2xl font-bold mb-4">Reviews</h2>
          {product.reviews && product.reviews.length > 0 ? (
            product.reviews.map((review) => (
              <div
                key={review.id}
                className="p-4 bg-white rounded-lg shadow-md mb-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg">{review.username}</h3>
                  <ProductRating rating={review.rating} />
                </div>
                <p className="text-sm text-gray-600">{review.description}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic">No reviews yet.</p>
          )}
       
      </div>
    </div>
  </div>
  );
}

export default ProductDetails;
