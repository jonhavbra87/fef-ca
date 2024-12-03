import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem';
import { useCartStore } from '../../store/cartStore';
import { GradientButton } from '../../styles/GradientButton';

function CartPage() {
  const { items } = useCartStore();

  return (
    <div>
      <h1>Cart</h1>
      <p>This is cart page</p>
      <div>
        {items.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>

      <Link to="/checkoutsuccess">
        <GradientButton>Place order</GradientButton>
      </Link>
    </div>
  );
}
export default CartPage;
