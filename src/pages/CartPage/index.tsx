import CartItem from '../../components/CartItem';
import { useCartStore } from '../../store/cartStore';

function CartPage() {
  const { items } = useCartStore();

  return (
    <div className="bg-darkPurple ">
      <h1>Cart</h1>
      <p>This is cart page</p>
      <div>
        {items.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
export default CartPage;
