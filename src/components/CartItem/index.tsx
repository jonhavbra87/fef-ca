import { Product } from '../../types/product';
import { ProductPrice } from '../ProductPrice';
import { Link } from 'react-router-dom';
import useCartStore from '../../store/cartStore';
import { MdDelete } from 'react-icons/md';

const CartItem = ({ product }: { product: Product }) => {
  const { removeFromCart, updateQuantity } = useCartStore();

  const incrementQuantity = () => {
    updateQuantity(product.id, (product.quantity || 1) + 1);
  };

  const decrementQuantity = () => {
    if ((product.quantity || 1) > 1) {
      updateQuantity(product.id, (product.quantity || 1) - 1);
    }
  };

  return (
    <ul className="bg-base rounded-lg shadow-md border border-hover bg-opacity-80 mx-auto hover:shadow-lg transition-shadow py-4 mb-4">
      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {/* Product Image with Clickable Link */}
        <div className="flex-shrink-0 w-24 h-24 cursor-pointer mx-auto md:mx-0">
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image.url}
              alt={product.image.alt || 'Product Image'}
              className="w-full h-full object-cover rounded-md"
            />
          </Link>
        </div>

        {/* Product Details */}
        <div className="flex-grow px-1 text-center md:text-left">
          <h2 className="text-lg font-bold text-primary">{product.title}</h2>
          <p className="text-sm sm:line-clamp-2 md:line-clamp-3 lg:line-clamp-5 text-secondary mb-2">
            {product.description}
          </p>
          <ProductPrice product={product} />
        </div>

        {/* Quantity Controls and Actions Wrapper */}
        <div className="flex flex-col md:flex-row md:gap-4 md:items-center justify-center md:justify-end w-full md:w-auto">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2 mx-auto md:mx-0">
            <button
              onClick={decrementQuantity}
              className="bg-secondary text-white px-2 py-1 rounded-lg hover:bg-red-700 transition-colors"
            >
              -
            </button>
            <span className="text-primary font-bold">
              {product.quantity || 1}
            </span>
            <button
              onClick={incrementQuantity}
              className="bg-cta text-white px-2 py-1 rounded-lg hover:bg-purple-700 transition-colors"
            >
              +
            </button>
          </div>

          {/* Total Price for Item */}
          <div className="text-primary text-md font-bold mt-2 md:mt-0 ml-0 md:ml-4">
            ${(product.discountedPrice * (product.quantity || 1)).toFixed(2)}
          </div>

          {/* Delete Button */}
          <button
            onClick={() => removeFromCart(product.id)}
            className="text-white me-2 md:mt-0 ml-0 md:ml-4 hover:text-cta transition-colors"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </ul>
  );
};

export default CartItem;
