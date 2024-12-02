import { Link } from 'react-router-dom';
import { Product } from '../../types/product';
import { ProductPrice } from '../ProductPrice';
import { GradientButton } from '../../styles/GradientButton';
import { FaShoppingCart } from 'react-icons/fa';
import { useCartStore } from '../../store/cartStore';

export const ProductCard = ({ product }: { product: Product }) => {
  // Zustand store to add product to cart
  const { addToCart } = useCartStore();
  return (
    <li className="bg-background rounded-lg shadow-md border border-deepPurple hover:shadow-lg transition-shadow">
      {/* Content that wraps product image and text */}
      <Link to={`/product/${product.id}`} className="block">
        <img
          src={product.image.url}
          alt={product.image.alt || 'Product Image'}
          className="mb-4 w-full h-64 object-cover rounded-md"
        />
        <div className="px-4">
          <h2 className="text-lg font-bold mb-2 text-cream">{product.title}</h2>
          <p className="text-sm text-blush mb-2">{product.description}</p>
          <ProductPrice product={product} />
          <p className="text-sm italic text-blush mt-1">
            Rating: {product.rating}/5
          </p>
        </div>
        <div className="flex justify-end items-center mb-4 gap-4">
          <button
            className="text-cream text-2xl cursor-pointer"
            onClick={(e) => {
              e.preventDefault(); // Prevent link navigation
              addToCart(product);
            }}
          >
            <FaShoppingCart />
          </button>
          <GradientButton>View product</GradientButton>
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
