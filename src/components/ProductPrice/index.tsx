import { Product } from '../../types/product';

export const ProductPrice = ({ product }: { product: Product }) => {
  const hasDiscount = product.price !== product.discountedPrice;

  return (
    <div className="flex gap-2 items-center">
      <span
        className={`${hasDiscount ? 'line-through text-cta text-opacity-75' : 'text-neutral'}`}
      >
        ${product.price.toFixed(2)}
      </span>
      {hasDiscount && (
        <span className="text-font-semibold text-primary font-semibold">
          ${product.discountedPrice.toFixed(2)}
        </span>
      )}
    </div>
  );
};
