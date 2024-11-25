import { Link } from 'react-router-dom';
import { Product } from '../../types/product';
import { ProductPrice } from '../ProductPrice';

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <li className="bg-plum p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      {/* Bruker Link for å gjøre kortet klikkbart */}
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image.url}
          alt={product.image.alt || 'Product Image'}
          className="mb-4 w-full h-64 object-cover rounded-md"
        />
        <h2 className="text-lg font-bold mb-2 text-cream">{product.title}</h2>
        <p className="text-sm text-blush mb-2">{product.description}</p>
        <ProductPrice product={product} />
        <p className="text-sm italic text-blush mt-1">
          Rating: {product.rating}/5
        </p>
      </Link>
    </li>
  );
};

export default ProductCard;
