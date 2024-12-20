import { useNavigate } from 'react-router-dom';
import CartItem from '../../components/CartItem';
import useCartStore from '../../store/cartStore';
import { GradientButton } from '../../styles/GradientButton';
import { useState } from 'react';
import { IoAdd } from 'react-icons/io5';
import GradientHeading from '../../styles/GradientHeading';

function CartPage() {
  const { items, total, clearCart } = useCartStore(); // Bruker `total` fra store
  const [couponCode, setCouponCode] = useState('');
  const navigate = useNavigate();

  const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCouponCode(e.target.value);

  const shippingCost = 99.99; // Eksempelverdi

  const handlePlaceOrder = () => {
    // Naviger til Checkout-siden
    if (items.length > 0) {
      navigate('/checkoutpage');
    }
  };

  return (
    <div className="mx-auto">
      {/* Heading */}
      <div className="flex justify-between items-center">
        <GradientHeading>Cart</GradientHeading>
        <button
          onClick={clearCart}
          className="text-sm font-semibold hover:underline"
        >
          Remove all
        </button>
      </div>

      {/* Cart Items */}
      <ul className="space-y-4 mb-6">
        {items.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>

      {/* Kostnadsoversikt */}
      <div className="border-t border-gray-300 pt-4 mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-bold">{total.toFixed(2)} kr</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Shipping Cost</span>
          <span className="font-bold">{shippingCost.toFixed(2)} kr</span>
        </div>
        <div className="flex justify-between text-lg font-bold mt-4">
          <span>Total</span>
          <span>{(total + shippingCost).toFixed(2)} kr</span>
        </div>
      </div>

      {/* Kupongkode */}
      <div className="flex mb-3">
        <input
          type="text"
          value={couponCode}
          onChange={handleCouponChange}
          placeholder="Enter Coupon Code"
          className="rounded-s-md grow border border-neutral text-primary p-2"
        />
        <button className="rounded-e-md bg-neutral w-auto text-2xl text-white text-bold p-3 hover:bg-secondary hover:bg-opacity-60 transition duration-300">
          <IoAdd />
        </button>
      </div>

      {/* Place Order Button */}
      <div className="mt-8 flex justify-center">
        <GradientButton
          onClick={handlePlaceOrder}
          disabled={items.length === 0} // Deactivate button if cart is empty
        >
          Place Order
        </GradientButton>
      </div>
    </div>
  );
}

export default CartPage;
