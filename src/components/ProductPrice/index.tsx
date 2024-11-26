import { Product } from '../../types/product';

export const ProductPrice = ({ product }: { product: Product }) => {
  const hasDiscount = product.price !== product.discountedPrice;

  return (
    <div className="flex gap-2 items-center">
      <span
        className={`${hasDiscount ? 'line-through text-blush' : 'text-blush'}`}
      >
        ${product.price.toFixed(2)}
      </span>
      {hasDiscount && (
        <span className="text-font-semibold text-cream">
          ${product.discountedPrice.toFixed(2)}
        </span>
      )}
    </div>
  );
};
