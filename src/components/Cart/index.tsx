import { FaShoppingCart } from 'react-icons/fa';
import { useCartStore } from '../../store/cartStore';

function Cart() {
  const { count } = useCartStore();

  return (
    <div className={`relative text-2xl cursor-pointer transition-colors duration-300 ${
      count > 0 ? 'text-cta' : 'text-card'
    }`}
  >
      <span className="sr-only">Cart</span>
      <FaShoppingCart />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-navigation text-hover text-xs w-4 h-4 flex items-center justify-center rounded-full">
          {count}
        </span>
      )}
    </div>
  );
}

export default Cart;
