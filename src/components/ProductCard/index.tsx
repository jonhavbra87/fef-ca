import { Link } from 'react-router-dom';
import { Product } from '../../types/product';
import { ProductPrice } from '../ProductPrice';
import { GradientButton } from '../../styles/GradientButton';

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <li className="bg-darkPurple rounded-lg shadow-md border border-deepPurple hover:shadow-lg transition-shadow">
      {/* Content that wraps product image and text */}
      <Link to={`/product/${product.id}`} className="block">
        <img
          src={product.image.url}
          alt={product.image.alt || 'Product Image'}
          className="mb-4 w-full h-64 object-cover rounded-md"
        />
        <div className="px-4">
          <h2 className="text-lg font-bold mb-2 text-cream">{product.title}</h2>
          <p className="text-sm text-blush mb-2">{product.description}</p>
          <ProductPrice product={product} />
          <p className="text-sm italic text-blush mt-1">
            Rating: {product.rating}/5
          </p>
        </div>
        <div className="flex justify-end mb-4">
          <GradientButton>View product</GradientButton>
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
