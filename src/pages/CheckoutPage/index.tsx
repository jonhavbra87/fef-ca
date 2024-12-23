//import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
//import * as yup from 'yup';

import useCartStore from '../../store/cartStore';
//import { GradientButton } from "../../styles/GradientButton";
import GradientHeading from '../../styles/GradientHeading';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type FormData = {
  firstName: string;
  lastName: string;
  address: string;
  postcode: number;
  country: string;
  email: string;
  paymentMethod: string;
};

const paymentMethods = ['Visa', 'Mastercard', 'PayPal', 'Vipps'];

function CheckoutPage() {
  const navigate = useNavigate();
  const { items, clearCart } = useCartStore();
  const subtotal = items.reduce(
    (total, item) => total + item.discountedPrice,
    0
  );
  const shippingCost = 8; // Standard shipping cost

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    const orderDetails = {
      ...data,
      items,
      subtotal,
      shippingCost,
    };
    console.log(orderDetails);

    // Simulate order submission
    setTimeout(() => {
      reset();
      clearCart();
      setIsSubmitting(false);
      // Naviger til checkout success
      navigate('/checkoutsuccess');
    }, 450);
  };

  return (
    <div className="mx-auto">
      <GradientHeading>Checkout</GradientHeading>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 space-y-6 p-8 max-w-xl mx-auto rounded-lg shadow-md"
      >
        {/* Address Form */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="mb-1 font-semibold text-lg">
              First Name
            </label>
            <input
              id="firstName"
              {...register('firstName', {
                required: 'Please enter your first name',
                minLength: {
                  value: 3,
                  message: 'Your first name should be at least 3 characters',
                },
              })}
              className="border text-black p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastName" className="mb-1 font-semibold text-lg">
              Last Name
            </label>
            <input
              id="lastName"
              {...register('lastName', {
                required: 'Please enter your last name',
                minLength: {
                  value: 3,
                  message: 'Your last name should be at least 3 characters',
                },
              })}
              className="border text-black p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="address" className="mb-1 font-semibold text-lg">
            Address
          </label>
          <input
            id="address"
            {...register('address', {
              required: 'Please enter your address',
              minLength: {
                value: 3,
                message: 'Your address should be at least 3 characters',
              },
            })}
            className="border text-black p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          {errors.address && (
            <p className="mt-1 text-sm text-red-600">
              {errors.address.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="postcode" className="mb-1 font-semibold text-lg">
              Postcode
            </label>
            <input
              id="postcode"
              {...register('postcode', {
                required: 'Please enter your postcode',
                pattern: {
                  value: /^[0-9]+$/, // RegExp for numeric values
                  message: 'Postcode must be numeric',
                },
                minLength: {
                  value: 4,
                  message: 'Your postcode should be at least 4 digits',
                },
              })}
              className="border text-black p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            {errors.postcode && (
              <p className="mt-1 text-sm text-red-600">
                {errors.postcode.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="country" className="mb-1 font-semibold text-lg">
              Country
            </label>
            <input
              id="country"
              {...register('country', {
                required: 'Please enter your country',
              })}
              className="border text-black p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            {errors.country && (
              <p className="mt-1 text-sm text-red-600">
                {errors.country.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-semibold text-lg">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Please enter your email address',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address',
              },
            })}
            className="border text-black p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Payment method */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-lg">Payment Method</label>
          <div className="flex flex-wrap gap-4">
            {paymentMethods.map((method) => (
              <label key={method} className="flex items-center gap-2">
                <input
                  type="radio"
                  value={method}
                  {...register('paymentMethod', {
                    required: 'Please select a payment method',
                  })}
                  className="text-cta focus:ring-cta"
                />
                {method}
              </label>
            ))}
          </div>
          {errors.paymentMethod && (
            <p className="mt-1 text-sm text-red-600">
              {errors.paymentMethod.message}
            </p>
          )}
        </div>

        {/* Order Summary */}
        <h2 className="text-lg font-semibold">Order Summary</h2>
        <div className="border-t pt-4">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>{item.title}</span>
              <span>${item.discountedPrice.toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between mt-2">
            <span>Shipping</span>
            <span>${shippingCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold mt-4">
            <span>Total</span>
            <span>${(subtotal + shippingCost).toFixed(2)}</span>
          </div>
        </div>

        {/* Order Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-cta text-white rounded-md"
        >
          {isSubmitting ? 'Placing order...' : 'Place Order'}
        </button>
      </form>
    </div>
  );
}

export default CheckoutPage;
