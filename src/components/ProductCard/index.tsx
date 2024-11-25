import { Link } from 'react-router-dom';
import { Product } from '../../types/product';
import { ProductPrice } from '../ProductPrice';

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <li className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      {/* Bruker Link for å gjøre kortet klikkbart */}
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image.url}
          alt={product.image.alt || 'Product Image'}
          className="mb-4 w-full h-64 object-cover"
        />
        <h2 className="text-lg font-bold mb-2">{product.title}</h2>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <ProductPrice product={product} />
        <p className="text-sm italic text-gray-500 mt-1">
          Rating: {product.rating}/5
        </p>
      </Link>
    </li>
  );
};

export default ProductCard;
