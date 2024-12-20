import { useNavigate } from 'react-router-dom';
import { GradientButton } from '../../styles/GradientButton';
import { LuPartyPopper } from 'react-icons/lu';
import { useEffect, useState } from 'react';

function CheckoutSuccess() {
  const navigate = useNavigate();

  // State for å holde ordrenummer
  const [orderNumber, setOrderNumber] = useState('');

  // Funksjon for å generere et tilfeldig ordrenummer
  const generateOrderNumber = () => {
    return `#${Math.floor(100000 + Math.random() * 900000)}`;
  };
  // Generer ordrenummer ved render
  useEffect(() => {
    setOrderNumber(generateOrderNumber());
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-dvh mt-6 px-4 rounded-md bg-neutral text-center">
      {/* Overskrift */}
      <LuPartyPopper className="text-7xl md:text-9xl text-secondary mb-4 animate-bounce" />
      <h1 className="text-3xl md:text-5xl font-bold text-neutralSecondary mb-4">
        Order Successful!
      </h1>

      {/* Beskrivelse */}
      <p className="text-lg md:text-xl text-neutralSecondary text-opacity-80 mb-6">
        Thank you for your purchase. Your order has been placed successfully.
      </p>
      {/* Ekstra Info */}
      <div className="bg-white p-8 rounded-xl shadow-lg mb-5 w-full max-w-md">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-5">
          Order Summary
        </h2>
        <ul className="text-gray-600 space-y-5 text-start lg:text-lg">
          <li>
            <span className="font-medium text-gray-800">📋 Order Number:</span>
            <span className="ml-2 text-neutral font-bold">{orderNumber}</span>
          </li>
          <li>
            <span className="font-medium text-gray-800">💳 Payment:</span>
            <span className="ml-2">Completed</span>
          </li>
          <li>
            <span className="font-medium text-gray-800">🚚 Shipping:</span>
            <span className="ml-2">Standard (3-5 days)</span>
          </li>
        </ul>
      </div>

      {/* Handlingsknapp */}
      <GradientButton onClick={() => navigate('/')}>
        Back to Home
      </GradientButton>
    </div>
  );
}

export default CheckoutSuccess;
