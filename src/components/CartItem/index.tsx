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
    <ul className="bg-secondary bg-opacity-15 rounded-lg shadow-md border border-neutral mx-auto mb-4">
      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-stretch gap-4">
        {/* Product Image */}
        <div className="flex-shrink-0 md:w-1/3 w-full overflow-hidden aspect-[4/3]">
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image.url}
              alt={product.image.alt || 'Product Image'}
              className="w-full h-full object-cover rounded-t-md md:rounded-l-md md:rounded-t-none"
            />
          </Link>
        </div>

        {/* Product Details */}
        <div className="flex-grow px-1 flex flex-col justify-center">
          <h2 className="text-lg font-bold text-primary mb-2">
            {product.title}
          </h2>
          <p className="text-sm text-neutral mb-2 line-clamp-1">
            {product.description}
          </p>
          <ProductPrice product={product} />
        </div>

        {/* Quantity Controls and Actions */}
        <div className="flex flex-col items-center justify-between md:justify-center md:gap-4 md:w-1/4 px-4">
          <div className="flex items-center gap-2 ">
            <button
              onClick={decrementQuantity}
              className="bg-neutralSecondary text-neutral px-2 py-1 rounded-lg hover:bg-red-300 transition-colors"
            >
              -
            </button>
            <span className="text-primary font-bold">
              {product.quantity || 1}
            </span>
            <button
              onClick={incrementQuantity}
              className="bg-neutral text-white px-2 py-1 rounded-lg hover:bg-green-600 transition-colors"
            >
              +
            </button>
          </div>

          <div className="text-primary text-md font-bold text-center mt-4 md:mt-0">
            {(product.discountedPrice * (product.quantity || 1)).toFixed(2)} kr
          </div>
        </div>
        <button
          onClick={() => removeFromCart(product.id)}
          className="text-red-500 hover:text-red-700 transition-colors mt-4 md:mt-0 flex justify-end p-3"
        >
          <MdDelete className="text-xl" />
        </button>
      </div>
    </ul>
  );
};

export default CartItem;
