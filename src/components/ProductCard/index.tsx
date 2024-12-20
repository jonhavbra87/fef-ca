import { useNavigate } from 'react-router-dom';
import { Product } from '../../types/product';
import { ProductPrice } from '../ProductPrice';
import { FaCartArrowDown } from "react-icons/fa6";
import useCartStore from '../../store/cartStore';
import ProductRating from '../ProductRating';
import ProductImage from '../ProductImage';
import { CardButton } from '../../styles/CartButton';

export const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCartStore();
  const navigate = useNavigate(); // React Router navigation hook

  // Navigate to product page
  const navigateToProduct = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <li className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow relative">
      {/* Discount Sticker */}
      {product.price !== product.discountedPrice && (
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold z-10">
          {Math.round(((product.price - product.discountedPrice) / product.price) * 100)}% OFF
        </span>
      )}

      {/* Product Image */}
      <div
        className="block relative group cursor-pointer"
        onClick={navigateToProduct}
        aria-label={`Navigate to ${product.title}`}
      >
        <ProductImage
          src={product.image.url}
          alt={product.image.alt || 'Product Image'}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-bold text-gray-800">{product.title}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
        <ProductPrice product={product} />
        <ProductRating rating={product.rating} />
      </div>

      {/* Action Buttons */}
      <div className="p-4 flex justify-between items-center">
        {/* Add to Cart Button */}
        <button
          className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
          onClick={(e) => {
            e.preventDefault(); // Prevent navigation
            addToCart(product);
          }}
          aria-label={`Add ${product.title} to cart`}
        >
          <FaCartArrowDown className="text-xl" />
          <span className="hidden sm:inline">Add to cart</span>
        </button>

        {/* View Product Button */}
        <CardButton onClick={navigateToProduct} aria-label={`View product details for ${product.title}`}>
          View product
        </CardButton>
      </div>
    </li>
  );
};

export default ProductCard;
