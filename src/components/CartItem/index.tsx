import { useState } from 'react';
import { Product } from '../../types/product';
import { ProductPrice } from '../ProductPrice';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';

const CartItem = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);
  const { removeFromCart } = useCartStore();

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <li className="bg-gray-500 rounded-lg shadow-md border border-deepPurple hover:shadow-lg transition-shadow p-4 mb-4">
      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Product Image with Clickable Link */}
        <div className="flex-shrink-0 w-24 h-24 cursor-pointer">
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image.url}
              alt={product.image.alt || 'Product Image'}
              className="w-full h-full object-cover rounded-md"
            />
          </Link>
        </div>

        {/* Product Details */}
        <div className="flex-grow px-4">
          <h2 className="text-lg font-bold text-cream">{product.title}</h2>
          <p className="text-sm sm:line-clamp-2 md:line-clamp-3 lg:line-clamp-5 text-blush mb-2">
            {product.description}
          </p>
          <ProductPrice product={product} />
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={decrementQuantity}
            className="bg-blush text-white px-2 py-1 rounded-lg hover:bg-red-700 transition-colors"
          >
            -
          </button>
          <span className="text-cream font-bold">{quantity}</span>
          <button
            onClick={incrementQuantity}
            className="bg-rosewood text-white px-2 py-1 rounded-lg hover:bg-purple-700 transition-colors"
          >
            +
          </button>
        </div>

        {/* Total Price for Item */}
        <div className="text-cream text-md font-bold ml-4">
          ${(product.discountedPrice * quantity).toFixed(2)}
        </div>

        {/* Delete Button */}
        <button
          onClick={() => removeFromCart(product.id)}
          className="bg-rosewood text-white px-4 py-2 rounded-lg ml-4 hover:bg-red-700 transition-colors"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default CartItem;
