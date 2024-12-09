import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem';
import { useCartStore } from '../../store/cartStore';
import { GradientButton } from '../../styles/GradientButton';
import { useState } from 'react';
import { IoAdd } from "react-icons/io5";
import GradientHeading from '../../styles/GradientHeading';

function CartPage() {
  const { items, clearCart } = useCartStore();
  const [couponCode, setCouponCode] = useState('');

  const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement>) => setCouponCode(e.target.value);
  const subtotal = items.reduce((total, item) => total + item.discountedPrice, 0);
  const shippingCost = 8; // Eksempelverdi
  
  return (
    <div className='mx-auto'>
      
      <div className="flex justify-between items-center">
        <GradientHeading>Cart</GradientHeading>
        <button onClick={clearCart} className="text-sm font-semibold hover:underline">
          Remove all
        </button>
      </div>
    
      <ul className='space-y-4 mb-6'>
        {items.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>



      {/* Kostnadsoversikt */}
      <div className=" border-t border-gray-300 pt-4 mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-bold">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Shipping Cost</span>
          <span className="font-bold">${shippingCost.toFixed(2)}</span>
        </div>
      
        <div className="flex justify-between text-lg font-bold mt-4">
          <span>Total</span>
          <span>${(subtotal + shippingCost).toFixed(2)}</span>
        </div>
      </div>

      {/* Kupongkode */}
      <div className="flex mb-3">
        <input
        type="text"
        value={couponCode}
        onChange={handleCouponChange}
        placeholder="Enter Coupon Code"
          className="rounded-s-md grow border border-cta text-primary p-2"
        />

        <button

          className="rounded-e-md bg-cta w-auto text-2xl text-white text-bold p-3 hover:bg-cta hover:bg-opacity-60 transition duration-300"
        >
          <IoAdd />
        </button>
      </div>

      <Link to="/checkoutpage">
        <GradientButton>Place order</GradientButton>
      </Link>
    </div>
  );
}
export default CartPage;
