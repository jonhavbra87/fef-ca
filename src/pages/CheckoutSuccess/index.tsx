import { useNavigate } from "react-router-dom";
import { GradientButton } from "../../styles/GradientButton";

function CheckoutSuccess() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Checkout Success</h1>
      <p>Your order has been placed successfully.</p>
      <GradientButton onClick={() => navigate('/')}>Back to home</GradientButton>
    </div>
  );
}

export default CheckoutSuccess;
