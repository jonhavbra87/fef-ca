import { FaShoppingCart } from 'react-icons/fa';
import { useCartStore } from '../../store/cartStore';

function Cart() {
  const { count } = useCartStore();

  return (
    <div className="relative text-primary text-2xl cursor-pointer">
      <span className="sr-only">Cart</span>
      <FaShoppingCart />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-cta text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
          {count}
        </span>
      )}
    </div>
  );
}

export default Cart;
