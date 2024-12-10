import { FaShoppingCart } from 'react-icons/fa';
import useCartStore from '../../store/cartStore';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const count = useCartStore((state) => state.count) || 0; // Fallback til 0 hvis count ikke er definert
  const navigate = useNavigate();

  function handleClick() {
    navigate('/cart/');
  }
  return (
    <div
      className={`relative text-2xl cursor-pointer transition-colors duration-300 ${
        count > 0 ? 'text-cta' : 'text-card'
      }`}
      aria-label={`Cart with ${count} item${count === 1 ? '' : 's'}`}
      onClick={handleClick}
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
