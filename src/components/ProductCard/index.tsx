import { ProductPrice } from "../ProductPrice";
import { Product } from "../../types/product";

function ProductCard({ product }: { product: Product }) {
    return (
      <li className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <img
          src={product.image.url}
          alt={product.image.alt || 'Product Image'}
          className="mb-4 w-full h-64 object-cover rounded-md"
        />
        <h2 className="text-lg font-bold mb-2 text-center">{product.title}</h2>
        <p className="text-sm text-gray-600 mb-4 text-center">{product.description}</p>
        <ProductPrice product={product} />
        <p className="text-sm italic text-gray-500 mt-2 text-center">Rating: {product.rating}/5</p>
      </li>
    );
  }

  export default ProductCard