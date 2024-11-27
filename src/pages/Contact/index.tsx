import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import GradientHeading from '../../styles/GradientHeading';
import { GradientButton } from '../../styles/GradientButton';

//import { FormData } from '../../types/FormData'

// Valideringsskjema ved bruk av Yup
const schema = yup
  .object({
    firstName: yup
      .string()
      .min(3, 'Your first name should be at least 3 characters.')
      .max(10, 'Your first name cannot be longer than 10 characters.')
      .required('Please enter your first name'),
    lastName: yup
      .string()
      .min(3, 'Your first name should be at least 3 characters.')
      .max(10, 'Your first name cannot be longer than 10 characters.')
      .required('Please enter your first name'),
    email: yup
      .string()
      .email('Please enter a valid email address')
      .matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Please enter a valid email address'
      )
      .required('Please enter your email address'),
    body: yup
      .string()
      .min(10, 'Your message should be at least 10 characters.')
      .max(500, 'Your message cannot be longer than 500 characters.')
      .required('Please enter your message'),
  })
  .required();

// Bruker `yup.InferType` for å automatisk hente ut typene fra schema
type FormData = yup.InferType<typeof schema>;

/* interface FormData {
  firstName: string;
  age: number;
} */

function Contact() {
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
    alert('Your message has been sent!');
    reset();
    //refresh page
  }

  return (
    <div>
      <GradientHeading>Contact Us</GradientHeading>
      <form
        className="flex flex-col gap-6 p-8 max-w-xl mx-auto bg-darkPurple rounded-lg shadow-md 
                md:max-w-2xl lg:max-w-3xl lg:p-10 xl:max-w-4xl xl:p-12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          <div className="flex flex-col">
            <label
              htmlFor="firstName"
              className="mb-1 font-semibold text-cream text-lg lg:text-xl"
            >
              First Name
            </label>
            <input
              id="firstName"
              className="border text-black p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-rosewood 
                      transition-all duration-300 ease-in-out lg:p-5"
              {...register('firstName')}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="lastName"
              className="mb-1 font-semibold text-cream text-lg lg:text-xl"
            >
              Last Name
            </label>
            <input
              id="lastName"
              className="border text-black border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-rosewood
                      transition-all duration-300 ease-in-out lg:p-5"
              {...register('lastName')}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="mb-1 font-semibold text-cream text-lg lg:text-xl"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="border text-black border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-rosewood
                    transition-all duration-300 ease-in-out lg:p-5"
            {...register('email')}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="body"
            className="mb-1 font-semibold text-cream text-lg lg:text-xl"
          >
            Message
          </label>
          <textarea
            id="body"
            className="border text-black border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-rosewood 
                    transition-all duration-300 ease-in-out resize-none lg:p-5 lg:h-40"
            {...register('body')}
          />
          {errors.body && (
            <p className="mt-1 text-sm text-red-600">{errors.body.message}</p>
          )}
        </div>

        <GradientButton type="submit" className="mt-6 py-6 w-full self-center ">
          Submit
        </GradientButton>
      </form>
    </div>
  );
}

export default Contact;