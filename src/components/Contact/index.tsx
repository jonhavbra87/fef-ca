import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
//import { FormData } from '../../types/FormData'
// Valideringsskjema ved bruk av Yup
const schema = yup
  .object({
    firstName: yup
      .string()
      .min(3, 'Your first name should be at least 3 characters.')
      .max(10, 'Your first name cannot be longer than 10 characters.')
      .required('Please enter your first name'),
    age: yup
      .number()
      .min(18, 'Your age must be 18 or higher')
      .max(100, 'Your age must be 100 or lower')
      .typeError('Your age must be a number'),
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
    } = useForm<FormData>({
      resolver: yupResolver(schema),
    });

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <form
      className="flex flex-col gap-6 p-8 max-w-md mx-auto bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col">
        <label htmlFor="firstName" className="mb-1 font-semibold text-gray-700">
          First Name
        </label>
        <input
          id="firstName"
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register('firstName')}
        />
        {errors.firstName && (
          <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="age" className="mb-1 font-semibold text-gray-700">
          Age
        </label>
        <input
          id="age"
          type="number"
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register('age')}
        />
        {errors.age && (
          <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="mt-4 p-3 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-700 transition duration-200"
      >
        Submit
      </button>
    </form>
  );
}

export default Contact;
