import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useCartStore } from "../../store/cartStore";
import { GradientButton } from "../../styles/GradientButton";
import GradientHeading from "../../styles/GradientHeading";


const schema = yup.object({
  firstName: yup
    .string()
    .min(3, 'Your first name should be at least 3 characters.')
    .required('Please enter your first name'),
  lastName: yup
    .string()
    .min(3, 'Your last name should be at least 3 characters.')
    .required('Please enter your last name'),
  address: yup
    .string()
    .min(5, 'Your address should be at least 5 characters.')
    .required('Please enter your address'),
  postcode: yup
    .string()
    .min(4, 'Your postcode should be at least 4 characters.')
    .required('Please enter your postcode'),
  country: yup
    .string()
    .required('Please enter your country'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Please enter your email address'),
  paymentMethod: yup
    .string()
    .required('Please select a payment method'),
}).required();


type FormData = yup.InferType<typeof schema>;


function CheckoutPage() {
    
    const { items } = useCartStore();
    const subtotal = items.reduce((total, item) => total + item.discountedPrice, 0);
    const shippingCost = 8; // Eksempelverdi
  
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    function onSubmit(data: FormData) {
        console.log(data);
        alert('Your order has been placed!');
        reset();
      }

    return (
      <div className='mx-auto'>

          <GradientHeading>Checkout</GradientHeading>

    <form 
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 space-y-6 p-8 max-w-xl mx-auto rounded-lg shadow-md"
      >
        {/* Personlig informasjon */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="mb-1 font-semibold text-lg">First Name</label>
            <input
              id="firstName"
              {...register('firstName')}
              className="border text-black p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-rosewood"
            />
            {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastName" className="mb-1 font-semibold  text-lg">Last Name</label>
            <input
              id="lastName"
              {...register('lastName')}
              className="border text-black p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-rosewood"
            />
            {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="address" className="mb-1 font-semibold  text-lg">Address</label>
          <input
            id="address"
            {...register('address')}
            className="border text-black p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-rosewood"
          />
          {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="postcode" className="mb-1 font-semibold  text-lg">Postcode</label>
            <input
              id="postcode"
              {...register('postcode')}
              className="border text-black p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-rosewood"
            />
            {errors.postcode && <p className="mt-1 text-sm text-red-600">{errors.postcode.message}</p>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="country" className="mb-1 font-semibold  text-lg">Country</label>
            <input
              id="country"
              {...register('country')}
              className="border text-black p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-rosewood"
            />
            {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country.message}</p>}
          </div>
        </div>

        {/* Valg av betalingsmetode */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold  text-lg">Payment Method</label>
          <div className="flex flex-wrap gap-4">
            {['Visa', 'Mastercard', 'PayPal', 'Vipps'].map((method) => (
              <label key={method} className="flex items-center gap-2">
                <input
                  type="radio"
                  value={method}
                  {...register('paymentMethod')}
                  className="text-rosewood focus:ring-rosewood"
                />
                {method}
              </label>
            ))}
          </div>
          {errors.paymentMethod && (
            <p className="mt-1 text-sm text-red-600">{errors.paymentMethod.message}</p>
          )}
        </div>

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

        {/* Order Button */}
        <GradientButton type="submit" className="w-full py-4">
          Place Order
        </GradientButton>
      </form>
    </div>
    );
    
  }
  
  export default CheckoutPage;
