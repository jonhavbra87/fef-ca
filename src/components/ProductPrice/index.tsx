import { Product } from '../../types/product';

export const ProductPrice = ({ product }: { product: Product }) => {
  const hasDiscount = product.price !== product.discountedPrice;

  return (
    <div className="flex flex-col gap-2 items-start">
      {/* Show original price with strikethrough if discounted */}
      <span
        className={`text-sm ${hasDiscount ? 'line-through text-gray-500' : 'text-primary text-xl'}`}
      >
        {product.price.toFixed(2)} kr
      </span>
      {/* Show discounted price */}
      {hasDiscount && (
        <span className="font-semibold text-xl text-darkGreen">
          {product.discountedPrice.toFixed(2)} kr
        </span>
      )}
    </div>
  );
};

export default ProductPrice;
