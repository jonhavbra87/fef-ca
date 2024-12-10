import { FaStar, FaRegStar, FaStarHalf } from 'react-icons/fa'; // Importere stjerne-ikoner

function ProductRating({ rating }: { rating: number }) {
  const totalStars = 5; // Maksimal vurdering
  const filledStars = Math.floor(rating); // Hele stjerner
  const halfStar = rating % 1 !== 0; // Hvis vurderingen har desimal
  const emptyStars = totalStars - filledStars - (halfStar ? 1 : 0); // Tomme stjerner

  return (
    <div className="flex items-center">
      {/* Hele stjerner */}
      {Array(filledStars)
        .fill(0)
        .map((_, index) => (
          <FaStar key={`filled-${index}`} className="text-cta" />
        ))}
      {/* Halv stjerne (valgfritt) */}
      {halfStar && <FaStarHalf key="half" className="text-cta" />}
      {/* Tomme stjerner */}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <FaRegStar key={`empty-${index}`} className="text-cta" />
        ))}
    </div>
  );
}

export default ProductRating;
